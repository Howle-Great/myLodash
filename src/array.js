const chunk = (array, size = 1) => {
  let outArray = []

  if (size <= 0) {
    return outArray
  }

  let startIndex = 0
  let subArray = array.slice(startIndex, startIndex + size)

  while (subArray.length !== 0) {
    outArray.push(subArray)
    startIndex += size
    subArray = array.slice(startIndex, startIndex + size)
  }
  return outArray
}

const compact = (array) => {
  return array.filter(el => !!el)
}

const concat = (...array) => {
  let base = array.shift()

  if (!Array.isArray(base)) {
    base = [base]
  }

  array.reduce((prev, elem) => {
    if (Array.isArray(elem)) {
      prev.push(...elem)
    } else {
      prev.push(elem)
    }
    return prev
  }, base)

  return base
}

export {
  chunk,
  compact,
  concat
}