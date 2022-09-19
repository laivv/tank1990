import Weapon from "./Weapon"
import Scene from "../Scene/Scene"
import resource from '../resource/Resource'
/**
 *
 * 炸弹
 * @export
 * @class BombWeapon
 * @extends {Weapon}
 */
export default class BombWeapon extends Weapon {
  constructor(scene: Scene) {
    super(resource.w_1, scene)
  }
 
}