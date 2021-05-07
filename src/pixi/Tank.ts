import { Container, Sprite, Texture } from 'pixi.js'
import { Turn } from '../constants/rotation'
export default class Tank extends Container {
  private tank = new Sprite()

  constructor () {
    super()
  }

  public create (texture: Texture) {
    this.tank.texture = texture

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
    this.tank.y -= 3
    this.tank.angle = Turn.UP
  }

  private moveDown () {
    this.tank.y += 3
    this.tank.angle = Turn.DOWN
  }

  private moveLeft () {
    this.tank.x -= 3
    this.tank.angle = Turn.LEFT
  }

  private moveRight () {
    this.tank.x += 3
    this.tank.angle = Turn.RIGHT
  }
}