const getCategories = async () => {
  const response = await fetch('http://localhost:3000/api/category')
  let data = await response.json()
  let categoriesArray = []

  for (let i = 0; i < data.length; i++) {
    categoriesArray.push({
      id: data[i].id,
      name: data[i].name
    })
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

  categoriesArray = categoriesArray.sort(sortArray)

  return categoriesArray
}

export default getCategories
