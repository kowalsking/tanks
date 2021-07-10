import { DisplayObject, Sprite } from 'pixi.js'
import Loader from './Loader'
import { Scene } from './Scene'
import LoadingScreen from '../screen/LoadingScreen'
import { Events } from '../enums/enums'
import { WIDTH, HEIGHT, ENEMY_COUNT } from '../enums/enums'
import Battlefield from '../screen/Battlefield'
import Enemy from './Enemy'
import Tank from './Tank'
import Bullet from './Bullet'
import EndGameScreen from '../screen/EndGameScreen'
export default class Game {
  private scene = new Scene(WIDTH, HEIGHT)
  private loader = new Loader(this.init.bind(this))
  private loadingScreen = new LoadingScreen()
  private battlefield = new Battlefield()
  private endGame = new EndGameScreen(this.scene.view.width, this.scene.view.height)

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
      const collision = this.checkCollision(tank, block, 5)
      const enemies = this.battlefield.enemies
      tank.moveBullets()
      if (collision) {
        tank.stop()
      }
      enemies.forEach(enemy => {
        enemy.move()
        enemy.moveBullets()
        if (this.checkCollision(enemy, block, 10)) {
          enemy.changeDirection()
        }
        enemy.bullets.forEach((bullet, i) => {
          if (this.checkCollision(bullet, tank, 5)) {
            this.gameOver()
          }
          this.shootCollision(enemy, bullet, block, i, idx)

        })
      })

      tank.bullets.forEach((bullet, i) => {
        enemies.forEach((enemy, i) => {
          if (this.checkCollision(bullet, enemy, 0)) {
            enemies.splice(i, 1)
            enemy.destroy()
            this.battlefield.removeChild(enemy)
          }
        })
        this.shootCollision(tank, bullet, block, i, idx)

      })
    })
  }

  private shootCollision (tank: Tank | Enemy, bullet: Bullet, block: Sprite, i: number, idx: number) {
    const hit = this.checkCollision(bullet, block, 5)
    if (hit) {
      if (block.name === 'wall') {
        tank.parent.removeChild(bullet)
        tank.bullets.splice(i, 1)
        return
      }
      tank.parent.removeChild(bullet)
      tank.bullets.splice(i, 1)
      this.battlefield.removeChild(block)
      this.battlefield.field.splice(idx, 1)
    }
  }

  private gameOver () {
    this.endGame.show(this.loader.getTexture('game_over'))
    this.append([this.endGame])
  }

  public checkCollision (entity: any, block: any, offset: number) {
    if (!block || !entity) {
      debugger
    }
    return block.x < entity.x + entity.width + offset &&
    block.x + block.width + offset > entity.x &&
    block.y < entity.y + entity.height + offset &&
    block.y + block.height + offset > entity.y
  }

  public distBetweenPoints(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  private append (child: DisplayObject[]) {
    this.scene.stage.addChild(...child)
  }
}
