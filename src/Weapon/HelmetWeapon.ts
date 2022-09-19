import Weapon from "./Weapon"
import resource from '../resource/Resource'
import Scene from './../Scene/Scene'
/**
 *
 * 无故钢盔
 * @export
 * @class HelmetWeapon
 * @extends {Weapon}
 */
export default class HelmetWeapon extends Weapon {
  constructor(scene: Scene, expiresTime = null) {
    super(resource.w_4, scene)
    this.expiresTime = expiresTime
  }

}