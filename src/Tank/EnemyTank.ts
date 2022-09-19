import Tank from "./Tank"
import Scene from "../Scene/Scene"
import { Dir } from "../enums/Dir"
import resource from '../resource/Resource'

/**
 *
 * 敌方tank基类
 * @export
 * @class EnemyTank
 * @extends {Tank}
 */
export default class EnemyTank extends Tank {

  /**
   *
   * 自动射击timer
   * @private
   * @type {(number|null)}
   * @memberof EnemyTank
   */
  private autoShootTimer: number = 0;

  constructor(x: number, y: number, dir: Dir, speed: number, image: HTMLImageElement, scene: Scene) {
    super(x, y, dir, speed, image, scene)
    this.autoShootTimer = 0
    this.autoMove()
    this.autoShoot()
  }

  autoMove() {
    setInterval(() => {
      if (!this.move() || Math.random() * 1000 >= 995) {
        this.dir = Math.floor(Math.random() * 4)
      }
      this.image = resource['t_' + this.dir]
      this.scene.renderEnemyTanks()
    }, 10)
  }

  destory() {
    clearInterval(this.autoShootTimer)
    this.autoShootTimer = 0
    super.destory()
  }

  autoShoot() {
    this.autoShootTimer = window.setInterval(() => {
      this.shoot()
    }, 1000)
  }

}