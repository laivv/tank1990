import Weapon from "./Weapon"
import resource from '../resource/Resource'
import Scene from './../Scene/Scene';
/**
 *
 * 增加一条生命
 * @export
 * @class LifeWeapon
 * @extends {Weapon}
 */
export default class LifeWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_2, scene)
  }

}