import { Container, Sprite, Texture } from 'pixi.js'
import { resizer, WIDTH, HEIGHT } from '../constants/sizes'
import { Events } from '../enums/events'

export default class LoadingScreen extends Container {
  private screen = new Sprite()
  private button = new Sprite()

  constructor () {
    super()
  }

  public show (screenTexture: Texture, buttonTexture: Texture) {
    this.addScreen(screenTexture)
    this.addButton(buttonTexture)
  }

  private addScreen (texture: Texture) {
    this.screen.texture = texture
    const container = new Container()
    this.screen.width = WIDTH
    this.screen.height = HEIGHT
    container.addChild(this.screen)
    this.addChild(container)
  }

  private addButton (texture: Texture) {
    this.button.texture = texture
    const container = new Container()
    this.button.anchor.set(0.5)
    this.button.x = resizer.center.x
    this.button.y = resizer.center.y + this.button.height * 1.5
    this.button.interactive = true
    this.button.cursor = 'pointer'
    this.button.on('pointerdown', () => {
      this.emit(Events.START)
    })
    container.addChild(this.button)
    this.addChild(container)
  }

  public hide () {
    this.removeChildren()
  }
}
