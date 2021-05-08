import { Application, DisplayObject } from 'pixi.js'

export class Scene extends Application {
  constructor (private width: number, private height: number) {
    super()
    this.width = width
    this.height = height
    this.view.width = this.screen.width = this.width
    this.view.height = this.screen.height = this.height
    document.body.append(this.view)
  }

  private append (child: DisplayObject) {
    this.stage.addChild(child)
  }
}

