import { Container, Graphics, Sprite, Texture } from 'pixi.js'
import { Turn } from '../enums/enums'
import { HEIGHT, WIDTH } from '../enums/enums'


export default class Enemy extends Container {
  private tank = new Sprite()
  private acceleration = 1

  constructor (private texture: Texture, public enemyx: number, public enemyy: number) {
    super()
    this.create()
    this.moveDown()
    this.width = 32
    this.height = 32
  }

  public create () {
    this.tank.texture = this.texture
    this.tank.anchor.set(0.5)
    this.position.set(this.enemyx - this.width / 2, this.enemyy - this.height / 2)
    this.addChild(this.tank)
  }

  public moveUp () {
    this.tank.y -= this.acceleration
    this.tank.angle = Turn.UP
  }

  public moveDown () {
    this.y += this.acceleration
    this.angle = Turn.DOWN
  }

  public moveLeft () {
    this.tank.x -= this.acceleration
    this.tank.angle = Turn.LEFT
  }

  public moveRight () {
    this.tank.x += this.acceleration
    this.tank.angle = Turn.RIGHT
  }

  public checkCollision (block: Sprite) {
    return block.x < this.x + this.width &&
    block.x + block.width > this.x &&
    block.y < this.y + this.height &&
    block.y + block.height > this.y
  }
}