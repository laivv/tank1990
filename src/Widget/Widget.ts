import Scene from "../Scene/Scene"

export default class Widget {

  /**
   * 控件坐标x
   * @type {number} 
   * @memberof Widget
   */
  public x: number
  /**
   * 控件坐标y
   * @type {number} 
   * @memberof Widget
   */
  public y: number
  /**
   * 控件宽度
   * @type {number} 
   * @memberof Widget
   */
  public width: number
  /**
   * 控件高度
   * @type {number} 
   * @memberof Widget
   */
  public height: number
  /**
   * 控件贴图 - 原生Image实例
   * @type {HTMLImageElement} 
   * @memberof Widget
   */
  public image: HTMLImageElement

  /**
   *
   * 场景宽度
   * @type {number}
   * @memberof Widget
   */
  public MAP_WIDTH: number

  /**
   *
   * 场景高度
   * @type {number}
   * @memberof Widget
   */
  public MAP_HEIGTH: number
  /**
  *
  * 最大x坐标
  * @type {number}
  * @memberof Widget
  */
  public MAX_X: number

  /**
   *
   * 最大y坐标
   * @type {number}
   * @memberof Widget
   */
  public MAX_Y: number

  /**
   *
   * 场景上下文
   * @type {Scene}
   * @memberof Widget
   */
  public scene: Scene

  constructor(x: number, y: number, width: number, height: number, image: HTMLImageElement, scene: Scene) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = image
    this.MAP_WIDTH = scene.width
    this.MAP_HEIGTH = scene.height
    this.MAX_X = this.MAP_WIDTH - this.width
    this.MAX_Y = this.MAP_HEIGTH - this.height
    this.scene = scene;
  }
  destory() {
    this.scene.remove(this)
  }
}