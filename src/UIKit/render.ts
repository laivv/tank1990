
import Scene from './../Scene/Scene';



class Renderer {

  private timer: number
  private mountNode: HTMLElement
  private el: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private scene: Scene

  constructor(mountNode: HTMLElement, scene: Scene) {
    this.timer = 0
    this.mountNode = mountNode
    this.el = this.createCanvas()
    this.ctx = this.el.getContext('2d') as CanvasRenderingContext2D
    this.scene = scene
  }

  private createCanvas() {
    const canvas = document.createElement('canvas')
    Object.assign(canvas.style, {
      width:  this.scene.width  + 'px',
      height: this.scene.height + 'px'
    })

    return canvas
  }

  render() {
    

  }

}