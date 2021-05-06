import { Container, Sprite, Texture } from 'pixi.js'

export default class Tank extends Container {
  private tank = new Sprite()

  constructor () {
    super()
  }

  public create (texture: Texture) {
    this.tank.texture = texture

    this.tank.x = 200
    this.tank.y = 400
    this.addChild(this.tank)
  }

  public move () {
    window.addEventListener('keydown', e => {
      console.log(e.key)
      // switch (e.keyCode) {
      //   case 37:
      //     this.moveUp()
      //     break
      // }
    })
  }

  public moveUp () {
    this.tank.y -= 3
  }

  private moveDown () {
    this.tank.y += 3
  }

  private moveLeft () {
    this.tank.x -= 3
  }

  private moveRight () {
    this.tank.x += 3
  }
}