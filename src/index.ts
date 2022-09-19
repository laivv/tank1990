import { LoadImage } from "./resource/Resource"
import Scene from "./Scene/Scene"
import { Dir } from "./enums/Dir"
import HeroTank from "./Tank/HeroTank"
import NormalTank from "./Tank/NormalTank"
import BombWeapon from "./Weapon/BombWeapon"
import GuardWeapon from "./Weapon/GuardWeapon"
import HelmetWeapon from "./Weapon/HelmetWeapon"
import StarWeapon from "./Weapon/StarWeapon"
import LifeWeapon from "./Weapon/LifeWeapon"
import TimeWeapon from "./Weapon/TimeWeapon"


//0.UP 1.DOWN 2.LEFT 3.RIGHT

LoadImage({
  p1_0: './images/1Player/m0-1-1.gif',
  p1_1: './images/1Player/m0-3-1.gif',
  p1_2: './images/1Player/m0-0-1.gif',
  p1_3: './images/1Player/m0-2-1.gif',
  w_1: './images/weapon/p3.gif',
  w_2: './images/weapon/p0.gif',
  w_3: './images/weapon/p4.gif',
  w_4: './images/weapon/p5.gif',
  w_5: './images/weapon/p2.gif',
  w_6: './images/weapon/p1.gif',
  t_0: './images/gray-tank/1-2-1.gif',
  t_1: './images/gray-tank/1-4-1.gif',
  t_2: './images/gray-tank/1-1-1.gif',
  t_3: './images/gray-tank/1-3-1.gif',
  bullet_0: './images/bullet-1.gif',
  bullet_1: './images/bullet-3.gif',
  bullet_2: './images/bullet-0.gif',
  bullet_3: './images/bullet-2.gif',
}).ready(function () {

  const ctxMap = document.getElementById('map') 
  const scene = new Scene(ctxMap as HTMLElement, 250, 200)

  scene.init()
  const hero = new HeroTank(50, 50, Dir.RIGHT, scene)
  scene.add(hero)
  // scene.add(new NormalTank(100, 100, 1, scene))
  // scene.add(new NormalTank(100, 100, 1, scene))
  // scene.add(new NormalTank(100, 100, 1, scene))
  // scene.add(new NormalTank(100, 100, 1, scene))
  
  // scene.add(new BombWeapon(scene))
  // scene.add(new LifeWeapon(scene))
  // scene.add(new GuardWeapon(scene))
  // scene.add(new HelmetWeapon(scene))
  // scene.add(new TimeWeapon(scene))
  // scene.add(new StarWeapon(scene))
  scene.render()


  document.addEventListener('keydown', function ({ keyCode }) {
    const DirMAP : {[key: string] : any} = { 37: Dir.LEFT, 38: Dir.UP, 39: Dir.RIGHT, 40: Dir.DOWN }
    const dir = DirMAP[keyCode]
    if (dir !== undefined) {
      console.log('dir:', dir)
      hero.dir = dir
      hero.isMoving = true
    }
  })
  document.addEventListener('keyup', function ({ keyCode }) {
    hero.isMoving = false
  
  })
})