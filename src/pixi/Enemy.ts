import { Texture } from "pixi.js";
import Bullet from "./Bullet";
import Tank from "./Tank";

export default class Enemy extends Tank {
  public bullets: Bullet[] = []
  private interval: any

  constructor () {
    super()
    this.name = 'enemy'
  }

  public create (texture: Texture, x: number, y: number) {
    this.tank.texture = texture
    this.tank.anchor.set(0.5)
    this.height = this.width = this.tank.height = this.tank.width
    this.position.set(x, y)
    this.addChild(this.tank)
    this.shoot()
  }

  public move (): void {
    switch (this.angle) {
      case 0:
        this.y -= 0.01
        break
      case 90:
        this.x += 0.01
        break
      case 180:
        this.y += 0.01
        break
      case 270:
        this.x -= 0.01
        break
    }
  }

  public shoot (): void {
    this.interval = setInterval(() => {      
      let direction = 'up'
      if (this.angle === 90) direction = 'right'
      if (this.angle === 270) direction = 'left'
      if (this.angle === 180) direction = 'down'
      const bullet = new Bullet(direction)
      bullet.position.set(this.x, this.y)
      this.parent.addChild(bullet)
      this.bullets.push(bullet)
    }, 1500)
  }

  public changeDirection () {
    switch (this.angle) {
      case 0:
        this.angle = Math.random() > 0.5 ? 90 : 180
        if (this.angle === 90) this.y += 5
        break
      case 90:
        this.angle = Math.random() > 0.5 ? 270 : 180
        if (this.angle === 180) this.x -= 5

        break
      case 180:
        this.angle = Math.random() > 0.5 ? 270 : 0
        if (this.angle === 270) this.y -= 5

        break
      case 270:
        this.angle = Math.random() > 0.5 ? 0 : 90
        if (this.angle === 0) this.x += 5

        break
    }
  }

  public destroy () {
    super.destroy()
    clearInterval(this.interval)
  }
}