import Tank from "./Tank"
import { Dir } from "../enums/Dir"
import Scene from "../Scene/Scene"
import resource from '../resource/Resource'
/**
 *
 * 我方英雄tank
 * @export
 * @class HeroTank
 * @extends {Tank}
 */
export default class HeroTank extends Tank{
  constructor(x: number, y: number, dir: Dir, scene :Scene){
    super(x, y, dir, 0.5, resource.p1_0, scene)
  }

  move(){
    this.image = resource['p1_' + this.dir]
    return super.move()
  }
}
