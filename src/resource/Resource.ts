export type Resource = {
  [key: string]: HTMLImageElement
}

const resource: Resource = {}

class ImageLoader {

  private stateMap: { [key: string]: boolean } = {}
  private callback: Function | null = null
  private res: Resource = {}

  ready(func: Function) {
    this.callback = func
    return this
  }

  load(object: { [x: string]: string }) {
    for (let key in object) {
      this.res[key] = new Image()
      this.res[key].src = object[key]
      this.stateMap[key] = false
      this.res[key].onload = () => {
        this.stateMap[key] = true
        let ready = true
        for (let i in this.stateMap) {
          if (!this.stateMap[i]) {
            ready = false
            break
          }
        }
        if (ready && this.callback) {
          Object.assign(resource, this.res )
          this.callback(this.res)
        }
      }
    }
    return this
  }
}

/**
 *
 * 加载图片资源文件
 * @export
 * @param {{ [x:string]: string }} resoures
 * @returns
 */
export function LoadImage(resoures: { [x: string]: string }) {
  return new ImageLoader().load(resoures)
}


export default resource