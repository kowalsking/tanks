import { Container, Sprite, Texture } from 'pixi.js'
import Bullet from './Bullet'
export default class Tank extends Container {
  public tank = new Sprite()
  public moving = true
  public bullets: Bullet[] = []

  constructor () {
    super()
  }

  public create (texture: Texture, x = 400, y = 500) {
    this.tank.texture = texture
    this.tank.anchor.set(0.5)
    this.position.set(x, y)
    this.eventsHadler()
    this.addChild(this.tank)
  }

  public eventsHadler () {
    window.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowUp':
          if (this.angle !== 0) return this.angle = 0
          this.y -= 10
          break
        case 'ArrowRight':
          if (this.angle !== 90) return this.angle = 90
          this.x += 10
          break
        case 'ArrowDown':
          if (this.angle !== 180) return this.angle = 180
          this.y += 10
          break
        case 'ArrowLeft':
          if (this.angle !== 270) return this.angle = 270
          this.x -= 10
          break
        case ' ':
          this.shoot()
      }
    })
  }

  public shoot () {
    let direction = 'up'
    if (this.angle === 90) direction = 'right'
    if (this.angle === 270) direction = 'left'
    if (this.angle === 180) direction = 'down'
    const bullet = new Bullet(direction)
    bullet.position.set(this.x, this.y)
    this.parent.addChild(bullet)
    this.bullets.push(bullet)
  }

  public stop (): void {
    if (this.angle === 0) {
      this.y += 10
    }
    switch (this.angle) {
      case 0:
        return
      case 90:
        this.x -= 10
        break
      case 180:
        this.y -= 10
        break
      case 270:
        this.x += 10
        break
    }
  }

  public moveBullets () {
    this.bullets.forEach(bullet => {
      if (bullet.direction === 'up') {
        bullet.y -= .05
      } else if (bullet.direction === 'left') {
        bullet.x -= .05
      } else if (bullet.direction === 'right') {
        bullet.x += .05
      } else if (bullet.direction === 'down') {
        bullet.y += .05
      }
    })
  }

  public destroy () {
    this.bullets.forEach(b => this.parent.removeChild(b))
    this.bullets = []
    this.parent.removeChild(this)
    super.destroy()
  }
}
