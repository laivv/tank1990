import HeroTank from '../Tank/HeroTank'
import EnemyTank from '../Tank/EnemyTank'
import Weapon from '../Weapon/Weapon'
import Bullet from '../Bullet/Bullet'
import { arrayRemove } from '../util/index'
import Widget from '../Widget/Widget'

type CanvasRenderingContext2DMap = { [key: string]: CanvasRenderingContext2D }
/**
 *
 * 场景类
 * @export
 * @class Scene
 */
export default class Scene {

  private heroTanks: Array<HeroTank> = []
  private heroTimer: number  = 0
  private enemyTanks: Array<EnemyTank> = []
  private enemyTimer: number  = 0
  private weapons: Array<Weapon> = []
  private weaponsTimer: number  = 0
  private bullets: Array<Bullet> = []
  private bulletsTimer: number  = 0
  private el: HTMLElement
  public width: number
  public height: number
  private canvasLayers: CanvasRenderingContext2DMap = {}
  private isInited: boolean = false

  constructor(el: HTMLElement, width: number, height: number) {
    this.el = el
    this.width = width
    this.height = height
  }


  /**
   *
   * 将控件添加到场景中
   * @param {Widget} widget
   * @returns
   * @memberof Scene
   */
  add(widget: Widget) {
    if (widget instanceof Weapon) {
      this.weapons.push(widget)
    }
    else if (widget instanceof EnemyTank) {
      this.enemyTanks.push(widget)
    }
    else if (widget instanceof HeroTank) {
      this.heroTanks.push(widget)
    }
    else if (widget instanceof Bullet) {
      this.bullets.push(widget)
    }
    return this
  }

  /**
   *
   * 将控件从场景移除
   * @param {Widget} widget
   * @returns
   * @memberof Scene
   */
  remove(widget: Widget) {
    if (widget instanceof Weapon) {
      arrayRemove(this.weapons, widget)
    }
    else if (widget instanceof EnemyTank) {
      arrayRemove(this.enemyTanks, widget)
    }
    else if (widget instanceof HeroTank) {
      arrayRemove(this.heroTanks, widget)
    }
    else if (widget instanceof Bullet) {
      arrayRemove(this.bullets, widget)
    }
    return this
  }

  private draw(layerName: string, t: Widget) {
    this.canvasLayers[layerName].drawImage(t.image, t.x, t.y, t.width, t.height)
  }
  private clearLayer(layerName: string) {
    this.canvasLayers[layerName].clearRect(0, 0, this.width, this.height)
  }
  /**
   *
   * 渲染背景
   * @memberof Scene
   */
  renderBackground() {
    this.canvasLayers.bgLayer.fillRect(0, 0, this.width, this.height)
  }

  /**
   *
   * 渲染我方tank
   * @memberof Scene
   */
  renderHeroTanks() {
    if (this.heroTimer || !this.heroTanks.length) {
      return
    }
    this.heroTimer = window.setInterval(() => {
      this.clearLayer('hreoLayer')
      for (let i = 0; i < this.heroTanks.length; ++i) {
        const t = this.heroTanks[i]
        this.draw('hreoLayer', t)
        if (t.isMoving) {
          t.move()
        }
      }
    },0)
   
  }

  /**
   *
   * 渲染敌方tank
   * @memberof Scene
   */
  renderEnemyTanks() {
    if (this.enemyTimer || !this.enemyTanks.length) {
      return
    }
    this.enemyTimer = window.setInterval(() => {
      this.clearLayer('enemyLayer')
      for (let i = 0; i < this.enemyTanks.length; ++i) {
        const t = this.enemyTanks[i]
        this.draw('enemyLayer', t)
      }

      if (!this.enemyTanks.length) {
        clearInterval(this.enemyTimer)
        this.enemyTimer = 0
        this.clearLayer('enemyLayer')
      }
    }, 0)

  }

  /**
   *
   * 渲染掉落的道具
   * @memberof Scene
   */
  renderWeapons() {
    if (this.weaponsTimer || !this.weapons.length) {
      return
    }
    this.weaponsTimer = window.setInterval(() => {
      this.clearLayer('weaponLayer')
      for (let i = 0; i < this.weapons.length; ++i) {
        const t = this.weapons[i]
        if (t.show) {
          this.draw('weaponLayer', t)
        }
      }
      if (!this.weapons.length) {
        clearInterval(this.weaponsTimer)
        this.weaponsTimer = 0
        this.clearLayer('weaponLayer')
      }
    }, 0)
  }

  /**
   *
   * 渲染子弹
   * @memberof Scene
   */
  renderBullets() {
    if (this.bulletsTimer || !this.bullets.length) {
      return
    }

    this.bulletsTimer = window.setInterval(() => {
      this.clearLayer('bulletLayer')
      for (let i = 0; i < this.bullets.length; ++i) {
        const t = this.bullets[i]
        if (!t.move()) {
          t.destory()
          continue
        }
        this.draw('bulletLayer', t)
      }

      if (!this.bullets.length) {
        clearInterval(this.bulletsTimer)
        this.bulletsTimer = 0
        this.clearLayer('bulletLayer')
      }
    }, 0)



  }

  /**
   *
   * 渲染
   * @memberof Scene
   */
  render() {
    if (!this.isInited) {
      throw new Error('请先初始化场景')
    }
    this.renderBackground()
    this.renderHeroTanks()
    this.renderEnemyTanks()
    this.renderWeapons()
    this.renderBullets()
  }

  /**
   *
   * 清空场景
   * @memberof Scene
   */
  clear() {
    this.heroTanks = []
    this.enemyTanks = []
    this.weapons = []
    this.bullets = []
    Object.keys(this.canvasLayers).forEach(layerName => {
      this.clearLayer(layerName)
    })
  }

  /**
   *
   * 初始化场景
   * @memberof Scene
   */
  init() {
    if (!this.isInited) {
      const container = document.createElement('div')
      Object.assign(container.style, { position: 'relative', width: this.width + 'px', height: this.height + 'px' });
      ['bgLayer', 'hreoLayer', 'enemyLayer', 'weaponLayer', 'bulletLayer'].forEach((layer, index) => {
        const canvas = document.createElement('canvas')
        Object.assign(canvas, { width: this.width, height: this.height })
        Object.assign(canvas.style, { position: 'absolute', top: 0, left: 0, zIndex: index + 1 })
        container.appendChild(canvas)
        this.canvasLayers[layer] = canvas.getContext('2d') as CanvasRenderingContext2D
      })
      this.el.appendChild(container)
      Object.defineProperty(this, 'isInited', { configurable: false, value: true })
    }
  }
}