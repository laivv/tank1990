import Weapon from "./Weapon"
import resource from '../resource/Resource'
import Scene from './../Scene/Scene';
/**
 *
 * 星星
 * @export
 * @class StarWeapon
 * @extends {Weapon}
 */
export default class StarWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_6, scene)
  }

}