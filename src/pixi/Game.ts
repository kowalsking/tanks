import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'

const WIDTH = 1024
const HEIGHT = 768

export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))

  constructor () {
    console.log(this.scene)
  }

  private init () {
    this.scene.showLoadingScreen(this.loader.getTexture('loading-screen'))
    this.scene.showLoadingScreen(this.loader.getTexture('start-button'))
  }

  private append (child: DisplayObject) {
    this.scene.stage.addChild(child)
  }
}