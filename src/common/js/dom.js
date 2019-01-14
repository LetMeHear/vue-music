export function addClass (el, className) {
  if (hasClass(el, className)) {
    // eslint-disable-next-line
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 判断dom对象是否有这个class
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
