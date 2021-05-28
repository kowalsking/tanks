import { Container, Sprite, Texture } from 'pixi.js'
import { Turn } from '../enums/enums'
export default class Tank extends Container {
  private tank = new Sprite()
  private acceleration = 13

  constructor (private texture: Texture) {
    super()
    this.create()
  }

  public create () {
    this.tank.texture = this.texture
    this.tank.x = 200
    this.tank.y = 400
    this.tank.anchor.set(0.5)
    this.move()
    this.addChild(this.tank)
  }

  public move () {
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
    this.tank.y -= this.acceleration
    this.tank.angle = Turn.UP
  }

  private moveDown () {
    this.tank.y += this.acceleration
    this.tank.angle = Turn.DOWN
  }

  private moveLeft () {
    this.tank.x -= this.acceleration
    this.tank.angle = Turn.LEFT
  }

  private moveRight () {
    this.tank.x += this.acceleration
    this.tank.angle = Turn.RIGHT
  }
}