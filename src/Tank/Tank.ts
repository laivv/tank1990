import MoveWidget from "../Widget/MoveWidget"
import Widget from "../Widget/Widget"
import Bullet from "../Bullet/Bullet"
import { Dir } from "../enums/Dir"
import Scene from "../Scene/Scene"
import Weapon from './../Weapon/Weapon'


/**
 *
 * Tank基类
 * @export
 * @class Tank
 * @extends {MoveWidget}
 */
export default class Tank extends MoveWidget{

  /**
   * 是否死亡
   * @type {boolean} 
   * @memberof Tank
   */
  public isDeath: boolean;

  /**
   *
   * 能经受几次子弹打击
   * @type {number} 
   * @memberof Tank
   */
  public hitCount: number;

  /**
   *
   * 穿戴了哪些武器或装备
   * @type {Array<Widget>} 
   * @memberof Tank
   */
  public weapons: Array<Widget>;

  /**
   *
   * 苏醒倒计时- 未苏醒状态是一颗闪一闪的四角星
   * @type {number}
   * @memberof Tank
   */
  public reviveTime: number;
  
  /**
   *
   * 射出去的子弹
   * @type {Array<Bullet>}
   * @memberof Tank
   */
  public bullets: Array<Bullet>;

  constructor(x: number, y: number, dir:Dir, speed: number, image: HTMLImageElement, scene: Scene){
      super(x, y, 16, 16, dir, speed, image, scene)
      this.bullets = []
      this.isDeath = false
      this.hitCount = 1
      this.weapons = []
      this.reviveTime = 1
  }

  shoot(){
    this.scene.add(new Bullet(this, this.scene))
    this.scene.renderBullets()
  }

  add(weapon: Weapon){
    weapon.onPickup()
    this.weapons.push(weapon)
  }
  remove(weapon: Weapon){

  }

}