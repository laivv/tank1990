import MoveWidget from '../Widget/MoveWidget'
import Tank from '../Tank/Tank'
import { Dir } from '../enums/Dir'
import Scene from '../Scene/Scene'
import resource from '../resource/Resource'


/**
 * 
 * 子弹类
 * @export
 * @class Bullet
 * @extends {MoveWidget}
 */
export default class Bullet extends MoveWidget {

  /**
   *
   * Tank上下文
   * @type {Tank}
   * @memberof Bullet
   */
  public tank: Tank


  /**
   *Creates an instance of Bullet.
   * @param {Tank} 所在tank上下文
   * @param {Scene} 所在场景scene上下文
   * @memberof Bullet
   */
  constructor(tank: Tank, scene: Scene) {
    const { dir, x, y, height, width } = tank
    let bullet_x: number, bullet_y: number, bullet_w: number, bullet_h: number;
    switch (dir) {
      case Dir.UP:
        bullet_x = x + parseInt( (width / 2) + '' )
        bullet_y = y
        bullet_w = 3
        bullet_h = 4
        break
      case Dir.DOWN:
        bullet_x = x + parseInt((width / 2) + '')
        bullet_y = y + height
        bullet_w = 3
        bullet_h = 4
        break
      case Dir.LEFT:
        bullet_x = x
        bullet_y = y + parseInt( (height / 2) + '')
        bullet_w = 4
        bullet_h = 3
        break
      case Dir.RIGHT:
        bullet_x = x + width
        bullet_y = y + parseInt( (height / 2) + '')
        bullet_w = 4
        bullet_h = 3
        break
    }
    super(bullet_x, bullet_y, bullet_w, bullet_h, dir, 1, resource['bullet_' + dir], scene)
    this.tank = tank
  }

}