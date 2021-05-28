import { Loader as PixiLoader, Texture } from 'pixi.js'

export default class Loader extends PixiLoader {
  constructor (onAssetsLoad: () => void) {
    super()
    this.add('loading-screen', '/assets/screens/scr1.png')
    this.add('start-button', '/assets/button.png')
    this.add('wall_1', '/assets/board/small_wall_1.png')
    this.add('wall_2', '/assets/board/small_wall_2.png')
    this.add('wall_3', '/assets/board/small_wall_3.png')
    this.add('wall_4', '/assets/board/small_wall_4.png')
    this.add('leaves', '/assets/board/leaves.png')
    this.add('eagle', '/assets/board/eagle.png')
    this.add('wall', '/assets/board/wall.png')
    this.add('tank', '/assets/tanks/tank.png')
    this.add('enemy_blue', '/assets/tanks/enemy_blue.png')
    this.add('enemy_red', '/assets/tanks/enemy_red.png')
    this.add('enemy_white', '/assets/tanks/enemy_white.png')
    this.load(() => onAssetsLoad())
  }

  public getTexture (name: string): Texture {
    return this.resources[name].texture
  }
}