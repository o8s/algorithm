// 整数反转
function reverse(x) {
  let rev = 0
  while (x !== 0) {
    const digst = x % 10
    x = ~~(x / 10)
    rev = rev * 10 + digst
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0
    }
  }
  return rev
}

console.log('123 reverse: ', reverse(123))
console.log('-123 reverse: ', reverse(-123))
console.log('120 reverse: ', reverse(120))
console.log('0 reverse: ', reverse(0))
