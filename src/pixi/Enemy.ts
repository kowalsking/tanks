import { Container, Graphics, Sprite, Texture } from 'pixi.js'
import { Turn } from '../enums/enums'


export default class Enemy extends Container {
  private tank = new Sprite()
  private acceleration = 1
  public moving: boolean = false
  public bullets: any[] = []
  public pos = {
    x: 0,
    y: 1
  }
  public rotation: number = 0
  public a = 90

  constructor (private texture: Texture, public enemyx: number, public enemyy: number) {
    super()
    this.create()
    this.width = 16
    this.height = 16
  }

  public create () {
    this.tank.texture = Texture.WHITE
    this.tank.anchor.set(0.5)
    this.position.set(this.enemyx - this.width / 2, this.enemyy - this.height / 2)
    this.addChild(this.tank)
  }

  public move () {
    this.x += this.pos.x
    this.y += this.pos.y
  }

  public rotate () {
    this.angle += this.a
  }

  public checkCollision (block: Sprite) {
    return block.x < this.x + this.width &&
    block.x + block.width > this.x &&
    block.y < this.y + this.height &&
    block.y + block.height > this.y
  }
}