import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/enums'
import { WIDTH, HEIGHT, ENEMY_COUNT } from '../enums/enums'
import Battlefield from '../screen/Battlefield'
export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))
  private loadingScreen = new LoadingScreen()
  private battlefield = new Battlefield()

  private init () {
    this.loadingScreen.show(this.loader.getTexture('loading-screen'), this.loader.getTexture('start-button'))
    this.append([this.loadingScreen])
    this.handleEvents()
  }

  private start () {
    this.loadingScreen.hide()
    this.battlefield.create(this.loader)
    this.append([this.battlefield])
  }

  private handleEvents () {
    this.loadingScreen.on(Events.START, () => {
      this.start()
      this.createTicker()
    })
  }

  private createTicker () {
    this.scene.ticker.add(() => {
      this.update()
    })
  }

  public update () {
    this.battlefield.field.forEach((block, idx) => {
        const tank = this.battlefield.tank
        const collision = this.checkCollision(tank, block)
      tank.moveBullets()
      if (collision) {
        console.log('BOOM')
        // tank.moving = false
      }
      tank.bullets.forEach((bullet, i) => {
        const hit = this.checkCollision(bullet, block)
        if (hit) {
          this.battlefield.removeChild(block)
          this.battlefield.field.splice(idx, 1)
          tank.parent.removeChild(bullet)
          tank.bullets.splice(i, 1)
        }
      })
    })
  }

  public checkCollision (entity: any, block: Sprite) {
    return block.x < entity.x + entity.width &&
    block.x + block.width > entity.x &&
    block.y < entity.y + entity.height &&
    block.y + block.height > entity.y
  }

  public distBetweenPoints(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  private append (child: DisplayObject[]) {
    this.scene.stage.addChild(...child)
  }
}
