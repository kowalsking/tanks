import { Container, Sprite, Texture } from 'pixi.js'

export default class LoadingScreen extends Container {

  constructor (private w: number, private h: number) {
    super()
    this.width = w
    this.height = h
    this.alpha = 0

  }

  public show (screenTexture: Texture) {
    this.alpha = 1
    const sprite = new Sprite(screenTexture)
    sprite.width = this.w
    sprite.height = this.h
    this.addChild(sprite)
  }
}