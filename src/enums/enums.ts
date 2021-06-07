export const WIDTH = 900
export const HEIGHT = 756
export const ENEMY_COUNT = 10

export const resizer = {
  center: {
    x: WIDTH / 2,
    y: HEIGHT / 2
  }
}

export enum Turn {
  UP = 0,
  RIGHT = 90,
  DOWN = 180,
  LEFT = 270
}

export enum Events {
  START = 'start_game'
}

export enum Map {
  'empty', // 0
  'wall', // 1 
  'wall_2', // 2
  'wall_3', // 3
  'wall_4', // 4
  'wall_1', // 5
  'enemy_blue', // 6
  'enemy_red', // 7
  'enemy_white', // 8
  'leaves', // 9,
  'eagle' // 10
}