import { Application } from 'pixi.js'

class Scene extends Application {
  private width: number
  private height: number

  constructor (width: number, height: number) {
    super()
    this.width = width
    this.height = height
    this.view.width = this.width
    this.view.height = this.height
    document.body.append(this.view)
    console.log(this.view)
  }
}

export const startPixi = (): Scene => new Scene(1024, 768)
