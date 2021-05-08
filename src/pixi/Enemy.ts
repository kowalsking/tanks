import { Container, Sprite, Texture } from 'pixi.js'
import { Turn } from '../constants/constants'
import { HEIGHT, WIDTH } from '../constants/constants'

export default class Enemy extends Container {
  private tank = new Sprite()
  private acceleration = 13

  constructor (private texture: Texture) {
    super()
    this.create()
  }

  public create () {
    this.tank.texture = this.texture
    this.tank.x = Math.random() * WIDTH
    this.tank.y = Math.random() * HEIGHT
    this.tank.anchor.set(0.5)
    this.addChild(this.tank)
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