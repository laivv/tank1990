import Weapon from "./Weapon"
import resource from '../resource/Resource'
import Scene from './../Scene/Scene'
/**
 *
 * 加固老鹰
 * @export
 * @class GuardWeapon
 * @extends {Weapon}
 */
export default class GuardWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_3, scene)
  }
}