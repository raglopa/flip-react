export const reStructure = (array = []) => {
  const n = Math.floor(Math.sqrt(array.length))
  let out = []
  let tmp = []

  array.forEach(item => {
    tmp = tmp.concat([item])
    if (tmp.length === n) {
      out = out.concat([tmp])
      tmp = []
    }
  })

  return out
}