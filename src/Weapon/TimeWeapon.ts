import Weapon from "./Weapon"
import resource from '../resource/Resource'
import Scene from './../Scene/Scene';
import Tank from './../Tank/Tank';
/**
 *
 * 定住
 * @export
 * @class TimeWeapon
 * @extends {Weapon}
 */
export default class TimeWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_5, scene)
  }

}