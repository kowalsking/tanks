import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/events'

const WIDTH = 1024
const HEIGHT = 768

export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))
  private loadingScreen = new LoadingScreen()

  constructor () {
    console.log(1)
  }

  private init () {
    this.loadingScreen.show(this.loader.getTexture('loading-screen'), this.loader.getTexture('start-button'))
    this.append(this.loadingScreen)
    this.loadingScreen.on(Events.START, () => {
      console.log('Start the Game!')
    })
  }

  private append (child: DisplayObject) {
    this.scene.stage.addChild(child)
  }
}