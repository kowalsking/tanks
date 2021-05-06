import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/events'
import { WIDTH, HEIGHT } from '../constants/sizes'
import Battlefield from '../screen/Battlefield'

export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))
  private loadingScreen = new LoadingScreen()
  private battlefield = new Battlefield()

  constructor () {
    console.log(1)
  }

  private init () {
    this.loadingScreen.show(this.loader.getTexture('loading-screen'), this.loader.getTexture('start-button'))
    this.append(this.loadingScreen)
    this.handleEvents()
  }

  private start () {
    this.loadingScreen.hide()
    this.battlefield.show()
  }

  private handleEvents () {
    this.loadingScreen.on(Events.START, () => {
      console.log('Start the Game!')
      this.start()
    })
  }

  private append (child: DisplayObject) {
    this.scene.stage.addChild(child)
  }
}
