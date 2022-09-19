import Widget from "../Widget/Widget"
import { getRndCoord } from "../util/index"
import Scene from "../Scene/Scene"
import Tank from "../Tank/Tank"

/**
 * 
 * 武器（道具）基类
 * @export
 * @class Weapon
 * @extends {Widget}
 */
export default class Weapon extends Widget {

  /**
   *
   * 有效时间， 有些武器用一会就消失了，比如钢盔
   * @private
   * @type {(number | null)}
   * @memberof Weapon
   */
  public expiresTime: number | null = null

  /**
   *
   * 是否拾起-没拾起会渲染在场景地图上，拾起则装备到tank、老鹰或敌人上并从地图上消失
   * @private
   * @type {boolean}
   * @memberof Weapon
   */
  public isPickup: boolean = false

  /**
   *
   * 拾起超时时间 - 超过时间从地图消失
   * @private
   * @type {number}
   * @memberof Weapon
   */
  public expiresPickup: number = 10 * 1000

  /**
   *
   * 宿主对象-装备到谁身上了(正常应该是英雄tank(星星，手枪等等),也可能是敌方坦克(如炸弹)或者老家（加固武器）)
   * @private
   * @type {Array<Widget>}
   * @memberof Weapon
   */
  public hosts: Array<Tank> = []

  /**
   *
   * 拾起超时定时器
   * @private
   * @type {(number | null)}
   * @memberof Weapon
   */
  public expriesPickupTimer: number | null = null

  /**
   *
   * 闪烁定时器
   * @private
   * @type {(number | null)}
   * @memberof Weapon
   */
  public glintTimer: number  = 0

  /**
   *
   * 闪烁 （一显一隐）
   * @private
   * @type {boolean}
   * @memberof Weapon
   */
  public show: boolean = true

  constructor(image: HTMLImageElement, scene: Scene) {
    super(0, 0, 16, 16, image, scene)
    const { x, y } = getRndCoord(this.MAP_WIDTH, this.MAP_HEIGTH)
    this.x = x
    this.y = y

    this.init()
  }
  // 当被拾起时要做的动作（从地图上消失）
  onPickup() {
    this.isPickup = true
    if (this.expiresTime !== null) {
      setTimeout(() => {
        this.destory()
      }, this.expiresTime)
    }

    // 清除让武器从地图消失的timer
    if (this.expriesPickupTimer) {
      clearTimeout(this.expriesPickupTimer)
      clearInterval(this.glintTimer)
      this.expriesPickupTimer = null
      this.glintTimer = 0
    }
    // 从地图上移除
    this.scene.remove(this)
  }

  destory() {
    this.hosts.forEach(host => host.remove(this))
  }

  init() {
    // 超时未拾消失
    this.expriesPickupTimer = window.setTimeout(() => {
      this.scene.remove(this)
      if (this.glintTimer) {
        clearInterval(this.glintTimer)
        this.glintTimer = 0
      }
    }, this.expiresPickup)
    // 闪烁
    this.glintTimer = window.setInterval(() => {
      this.show = !this.show
      this.scene.renderWeapons()
    }, 200)
  }
}