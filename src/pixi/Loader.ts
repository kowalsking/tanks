import { Loader as PixiLoader, Texture } from 'pixi.js'

export default class Loader extends PixiLoader {
  constructor (onAssetsLoad: () => void) {
    super()
    this.add('loading-screen', '/assets/screens/scr1.png')
    this.add('start-button', '/assets/button.png')
    this.load(() => onAssetsLoad())
  }

  public getTexture (name: string): Texture {
    return this.resources[name].texture
  }
}