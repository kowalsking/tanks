import { Application, Container, DisplayObject, Sprite, Texture } from 'pixi.js'

type Resizer = {
  center: {
    x: number;
    y: number;
  }
}
export class Scene extends Application {
  private resizer: Resizer

  constructor (private width: number, private height: number) {
    super()
    this.width = width
    this.height = height
    this.view.width = this.screen.width = this.width
    this.view.height = this.screen.height = this.height
    this.getSizes()
    document.body.append(this.view)
  }

  private getSizes () {
    this.resizer = {
      center: {
        x: this.width / 2,
        y: this.height / 2
      }
    }
  }

  private append (child: DisplayObject) {
    this.stage.addChild(child)
  }
}

