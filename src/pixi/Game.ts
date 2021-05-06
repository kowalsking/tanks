import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/events'
import { WIDTH, HEIGHT } from '../constants/sizes'
import Battlefield from '../screen/Battlefield'
import Tank from '../pixi/Tank'

export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))
  private loadingScreen = new LoadingScreen()
  private battlefield = new Battlefield()
  private tank = new Tank()

  constructor () {
    console.log(1)
  }

  private init () {
    this.loadingScreen.show(this.loader.getTexture('loading-screen'), this.loader.getTexture('start-button'))
    this.append([this.loadingScreen])
    this.handleEvents()
    this.createTicker()
  }

  private start () {
    this.loadingScreen.hide()
    this.battlefield.show(this.loader)
    this.tank.create(this.loader.getTexture('tank'))
    this.append([this.battlefield, this.tank])
  }

  private handleEvents () {
    this.loadingScreen.on(Events.START, () => {
      console.log('Start the Game!')
      this.start()
    })
  }

  private createTicker () {
    this.scene.ticker.add(() => {
      this.tank.moveUp()
    })
  }

  private append (child: DisplayObject[]) {
    this.scene.stage.addChild(...child)
  }
}
