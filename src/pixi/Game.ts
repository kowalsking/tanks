import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/enums'
import { WIDTH, HEIGHT, ENEMY_COUNT } from '../enums/enums'
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

  private init () {
    this.loadingScreen.show(this.loader.getTexture('loading-screen'), this.loader.getTexture('start-button'))
    this.append([this.loadingScreen])
    this.handleEvents()
  }

  private start () {
    this.loadingScreen.hide()
    this.battlefield.create(this.loader)
    this.tank = new Tank(this.loader.getTexture('tank'))
    // this.createEnemies()
    this.append([this.battlefield/*, this.tank*/])
  }

  // private createEnemies () {
  //   const textures = [this.loader.getTexture('enemy_blue'), this.loader.getTexture('enemy_red'), this.loader.getTexture('enemy_white')]
  //   for (let i = 0; i < ENEMY_COUNT; i++) {
  //     this.enemies.push(new Enemy(textures[Math.floor(Math.random() * textures.length)]))
  //   }
  //   this.append(this.enemies)
  // }

  private handleEvents () {
    this.loadingScreen.on(Events.START, () => {
      this.start()
      this.createTicker()
    })
  }

  private createTicker () {
    const enemies = this.battlefield.enemies
      
    this.scene.ticker.add((delta) => {
      enemies.forEach(enemy => {
        enemy.moveDown()
        this.battlefield.field.forEach(block => {
          
          if (
              block.x < enemy.x + enemy.width &&
              block.x + block.width > enemy.x &&
              block.y < enemy.y + enemy.height &&
              block.y + block.height > enemy.y
            ) {
            debugger
            // return true
          }
        })
      })
    })
  }

  private append (child: DisplayObject[]) {
    this.scene.stage.addChild(...child)
  }
}
