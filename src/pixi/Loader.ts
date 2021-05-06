import { Loader as PixiLoader, Texture } from 'pixi.js'

export default class Loader extends PixiLoader {
  constructor (onAssetsLoad: () => void) {
    super()
    this.add('loading-screen', '/assets/screens/scr1.png')
    this.add('start-button', '/assets/button.png')
    this.add('wall-1', '/assets/board/small_wall_1.png')
    this.add('wall-2', '/assets/board/small_wall_2.png')
    this.add('wall-3', '/assets/board/small_wall_3.png')
    this.add('wall-4', '/assets/board/small_wall_4.png')
    this.add('wall', '/assets/board/wall.png')
    this.add('tank', '/assets/tanks/tank.png')
    this.load(() => onAssetsLoad())
  }

  public getTexture (name: string): Texture {
    return this.resources[name].texture
  }
}