import Weapon from "./Weapon"
import Scene from './../Scene/Scene'
import resource from '../resource/Resource'
/**
 * 
 * 枪
 * @export
 * @class GunWeapon
 * @extends {Weapon}
 */
export default class GunWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_2,scene)
  }
}