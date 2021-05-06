import { Container } from 'pixi.js'
import Loader from '../pixi/Loader'

export default class Battlefield extends Container {
  constructor() {
    super()
  }

  public show (loader: Loader) {
    console.log('SHOW')

  }
}