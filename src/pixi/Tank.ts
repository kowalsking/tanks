import { Container, Sprite, Texture } from 'pixi.js'
import { Turn } from '../enums/enums'
export default class Tank extends Container {
  private tank = new Sprite()
  private acceleration = 13
  private rot = 360 / 30
  private a = 90
  private pos = {
    x: 0,
    y: 0
  }

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
      switch (e.key) {
        case 'ArrowUp':
          this.moveUp()
          break
        case 'ArrowRight':
          this.moveRight()
          break
        case 'ArrowDown':
          this.moveDown()
          break
        case 'ArrowLeft':
          this.moveLeft()
          break
      }
    })
  }

  public moveUp () {
    this.pos.x += 0.1
    this.pos.y -= 0.1
  }

  public move () {
    this.x += this.pos.x
    this.y += this.pos.y
  }

  private moveDown () {
    this.pos.x -= 0.1
    this.pos.y += 0.1
  }

  private moveLeft () {
    this.angle -= this.rot
  }

  private moveRight () {
    this.angle += this.rot
  }
}