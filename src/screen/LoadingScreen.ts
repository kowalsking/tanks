import { Container, Sprite, Texture } from 'pixi.js'
import { resizer, WIDTH, HEIGHT } from '../enums/enums'
import { Events } from '../enums/enums'

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
    this.screen.width = WIDTH
    this.screen.height = HEIGHT
    this.add(this.screen)
  }

  private addButton (texture: Texture) {
    this.button.texture = texture
    this.button.anchor.set(0.5)
    this.button.x = resizer.center.x
    this.button.y = resizer.center.y + this.button.height * 1.5
    this.button.interactive = true
    this.button.cursor = 'pointer'
    this.button.on('pointerdown', () => {
      this.emit(Events.START)
    })
    this.add(this.button)
  }

  private add (entity: Sprite) {
    const container = new Container()
    container.addChild(entity)
    this.addChild(container)
  }

  public hide () {
    this.removeChildren()
  }
}
