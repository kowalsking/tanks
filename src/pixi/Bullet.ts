import { Container, Sprite, Texture } from 'pixi.js'

export default class Bullet extends Container {
  public direction: string

  constructor (direction: string) {
    super()
    this.direction = direction
    const texture = new Sprite(Texture.WHITE)
    this.addChild(texture)
  }
}