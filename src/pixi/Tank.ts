import { Container, Sprite, Texture } from 'pixi.js'
import Bullet from './Bullet'
export default class Tank extends Container {
  private tank = new Sprite()
  public moving = true
  public bullets: Bullet[] = []

  constructor () {
    super()
  }

  public create (texture: Texture) {
    this.tank.texture = texture
    this.tank.anchor.set(0.5)
    this.position.set(400, 500)
    this.eventsHadler()
    this.addChild(this.tank)
  }

  public eventsHadler () {
    window.addEventListener('keydown', e => {
      // if (!this.moving) return

      switch (e.key) {
        case 'ArrowUp':
          this.y -= 10
          this.angle = 0
          break
        case 'ArrowRight':
          this.x += 10
          this.angle = 90
          break
        case 'ArrowLeft':
          this.x -= 10
          this.angle = 270
          break
        case 'ArrowDown':
          this.y += 10
          this.angle = 180
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
}
