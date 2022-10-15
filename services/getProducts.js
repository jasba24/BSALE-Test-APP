const getProducts = async category => {
  const response = await fetch('https://ancient-gorge-40507.herokuapp.com/api/products')
  const data = await response.json()
  let productsArray = []

  if (category) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].category == category) {
        productsArray.push({
          id: data[i].id,
          name: data[i].name,
          url_image: data[i].url_image,
          price: data[i].price,
          discount: data[i].discount,
          category: data[i].category
        })
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      productsArray.push({
        id: data[i].id,
        name: data[i].name,
        url_image: data[i].url_image,
        price: data[i].price,
        discount: data[i].discount,
        category: data[i].category
      })
    }
  }

  function sortArray(x, y) {
    if (x.name < y.name) {
      return -1
    }
    if (x.name > y.name) {
      return 1
    }
    return 0
  }

  productsArray = productsArray.sort(sortArray)

  return productsArray
}

export default getProducts
