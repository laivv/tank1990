import Weapon from "./Weapon"
import Scene from './../Scene/Scene';
import resource from '../resource/Resource'
/**
 *
 * 船
 * @export
 * @class ShipWeapon
 * @extends {Weapon}
 */
export default class ShipWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_6, scene)
  }
}