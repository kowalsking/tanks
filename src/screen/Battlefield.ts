import { Container, Sprite } from 'pixi.js'
import Loader from '../pixi/Loader'
import { Map } from '../enums/enums'
import Enemy from '../pixi/Enemy'

export default class Battlefield extends Container {
  public enemies: Enemy[] = []
  public map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 1],
    [1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 2, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]
  public field: Sprite[] = []
  
  public create (loader: Loader): void {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        const pieceName = `${this.map[i][j]}`
        let piece
        if (pieceName === '0') continue // empty
        piece = new Sprite(loader.getTexture(Map[this.map[i][j]]))
        if (pieceName === '6') {
          const enemy = new Enemy(loader.getTexture('enemy_blue'), piece.height * j + piece.height / 2, piece.width * i + piece.width / 2)
          this.enemies.push(enemy)
          this.addChild(enemy)
          continue
        }
        piece.width = 36
        piece.height = 36
        piece.position.set(piece.height * j, piece.width * i)
        this.addChild(piece)
        this.field.push(piece)
      }
    }
  }
}