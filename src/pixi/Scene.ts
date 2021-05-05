import { Application, Container, DisplayObject, Sprite, Texture } from 'pixi.js'

export class Scene extends Application {
  constructor (private width: number, private height: number) {
    super()
    this.width = width
    this.height = height
    this.view.width = this.width
    this.view.height = this.height
    document.body.append(this.view)
  }

  public showLoadingScreen (screen: Texture) {
    const loadingScreen = new Sprite(screen)
    const container = new Container()
    // loadingScreen.width = this.view.width
    // loadingScreen.height = this.view.height
    // loadingScreen.anchor.set(0.5)
    // loadingScreen.x = this.width / 2
    // loadingScreen.y = this.height / 2
    console.log(loadingScreen)
    container.addChild(loadingScreen)
    this.append(container)
  }

  private append (child: DisplayObject) {
    this.stage.addChild(child)
  }
}

