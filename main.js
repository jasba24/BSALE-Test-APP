import Home from './views/Home'
import Header from './views/Header'
import getHash from './utils/getHash'
import Product from './views/Product'
import resolveRoutes from './utils/resolveRoutes'

const products = async () => {
  const header = document.querySelector('header')
  const main = document.querySelector('#app')

  const routes = {
    '/': Home,
    '/:id': Product
  }

  header.innerHTML = Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route]
  main.innerHTML = await render()

  const input = document.getElementById('search-input')
  let word = ''

  input.addEventListener('keyup', async e => {
    if (e.code !== undefined && e.code.includes('Key')) {
      let productsArray = []
      word += e.code[3]
      const response = await fetch(
        `http://localhost:3000/api/products/search/${word}`
      )
      const data = await response.json()
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
      main.innerHTML = await Product(productsArray)
    }
  })
}

products()
