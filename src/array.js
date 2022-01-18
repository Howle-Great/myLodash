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

export {
  chunk,
  compact
}