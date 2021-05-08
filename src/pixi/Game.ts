import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/events'
import { WIDTH, HEIGHT, ENEMY_COUNT } from '../constants/constants'
import Battlefield from '../screen/Battlefield'
import Tank from '../pixi/Tank'
import Enemy from '../pixi/Enemy'

export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))
  private loadingScreen = new LoadingScreen()
  private battlefield = new Battlefield()
  private tank: Tank | null = null
  private enemies: Enemy[] | null = []

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
    this.tank = new Tank(this.loader.getTexture('tank'))
    this.createEnemies()
    this.append([this.battlefield, this.tank])
  }

  private createEnemies () {
    const textures = [this.loader.getTexture('enemy_blue'), this.loader.getTexture('enemy_red'), this.loader.getTexture('enemy_white')]
    for (let i = 0; i < ENEMY_COUNT; i++) {
      this.enemies.push(new Enemy(textures[Math.floor(Math.random() * textures.length)]))
    }
    this.append(this.enemies)
  }

  private handleEvents () {
    this.loadingScreen.on(Events.START, () => {
      console.log('Start the Game!')
      this.start()
    })
  }

  private createTicker () {
    this.scene.ticker.add((delta) => {
      // this.tank.moveUp()
    })
  }

  private append (child: DisplayObject[]) {
    this.scene.stage.addChild(...child)
  }
}
