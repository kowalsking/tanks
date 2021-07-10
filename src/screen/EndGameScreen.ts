import { Container, Sprite, Texture } from 'pixi.js'

export default class LoadingScreen extends Container {

  constructor (width: number, height: number) {
    super()
    this.width = width
    this.height = height
    this.alpha = 0
  }

  public show (screenTexture: Texture) {
    this.alpha = 1
    
    const sprite = new Sprite(screenTexture)
    this.addChild(sprite)
  }
}