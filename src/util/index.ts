/**
    * 根据容器宽高获取随机坐标
    * @param  {number} width 宽度
    * @param  {number} height 高度
    */
export function getRndCoord(width: number, height: number): { x: number, y: number } {
  let x = Math.floor(Math.random() * width)
  let y = Math.floor(Math.random() * height)
  return { x, y }
}

/**
 * 删除数组中的项
 * @param  {Array<any>} array 目标数组
 * @param  {any} item 要移除的项
 */
export function arrayRemove(array: Array<any>, item: any): boolean {
  const index = array.findIndex(i => i === item)
  if (index !== -1) {
    array.splice(index, 1)
    return true
  }
  return false
}


export function hit(a: any, b: any) {
  if(a.x >= b.x && a.y >= b.y && a.x <= b.x + b.width && a.y <= b.y + b.height){
    return true
  }
  return false
}
