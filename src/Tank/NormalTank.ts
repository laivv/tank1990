import EnemyTank from "./EnemyTank"
import Scene from "../Scene/Scene"
import { Dir } from "../enums/Dir"
import resource from '../resource/Resource'

/**
 * 
 * 普通敌方tank
 * @export
 * @class NormalTank
 * @extends {EnemyTank}
 */
export default class NormalTank extends EnemyTank {
  constructor(x: number, y: number, dir: Dir, scene: Scene) {
    super(x, y, dir, 1, resource.t_3, scene)
  }
}
