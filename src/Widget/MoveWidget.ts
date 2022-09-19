import Widget from './Widget'
import { Dir } from '../enums/Dir'
import Scene from '../Scene/Scene'

export default class MoveWidget extends Widget {

  /**
   *
   * 移动速度
   * @type {number}
   * @memberof MoveWidget
   */
  public speed: number

  /**
   *
   * 方向
   * @type {Dir}
   * @memberof MoveWidget
   */
  public dir: Dir

  /**
  *
  * 是否在移动
  * @type {Boolean}
  * @memberof MoveWidget
  */
  public isMoving: boolean = false


  constructor(x: number, y: number, width: number, height: number, dir: Dir, speed: number, image: HTMLImageElement, scene: Scene) {
    super(x, y, width, height, image, scene)
    this.speed = speed;
    this.dir = dir;
  }

  /**
   *
   * 移动控件
   * @param {Dir} [dir] 向哪个方向移动
   * @returns {boolean}
   * @memberof MoveWidget
   */
  move(dir?: Dir): boolean {
    dir = dir ? dir : this.dir
    let n: number;
    switch (dir) {
      case Dir.UP:
        if (this.y === 0) {
          return false
        }
        n = this.y - this.speed
        this.y = n < 0 ? 0 : n
        return n >= 0
      case Dir.DOWN:
        if (this.y === this.MAX_Y) {
          return false
        }
        n = this.y + this.speed
        this.y = n > this.MAX_Y ? this.MAX_Y : n
        return n <= this.MAX_Y
      case Dir.LEFT:
        if (this.x === 0) {
          return false
        }
        n = this.x - this.speed
        this.x = n < 0 ? 0 : n
        return n >= 0
      case Dir.RIGHT:
        if (this.x === this.MAX_X) {
          return false
        }
        n = this.x + this.speed
        this.x = n > this.MAX_X ? this.MAX_X : n
        return n <= this.MAX_X
      default:
        return false
    }
  }
}