import { Container, Graphics, Sprite, Texture } from 'pixi.js'
import { Turn } from '../enums/enums'
import { HEIGHT, WIDTH } from '../enums/enums'


export default class Enemy extends Container {
  private tank = new Sprite()
  private acceleration = 1

  constructor (private texture: Texture, public enemyx: number, public enemyy: number) {
    super()
    this.create()
    this.width = 24
    this.height = 24
  }

  public create () {
    this.tank.texture = Texture.WHITE
    console.log(this.enemyx)
    // this.tank.anchor.set(0.5)
    // this.tank.position.set(0)
    this.position.set(this.enemyx + 10, this.enemyy + 10)
    // this.mask = new Graphics()
    // .beginFill(0xffffff)
    // .drawRect(this.x, this.y, this.height, this.width)
    // .endFill();
    // this.tank.anchor.set(0.5)
    // this.x = this.x + this.tank.width / 2
    // this.y = this.y + this.tank.height / 2
    this.addChild(this.tank)
  }

  public moveUp () {
    this.tank.y -= this.acceleration
    this.tank.angle = Turn.UP
  }

  public moveDown () {
    this.y += this.acceleration
    // this.angle = Turn.DOWN
  }

  public moveLeft () {
    this.tank.x -= this.acceleration
    this.tank.angle = Turn.LEFT
  }

  public moveRight () {
    this.tank.x += this.acceleration
    this.tank.angle = Turn.RIGHT
  }
}