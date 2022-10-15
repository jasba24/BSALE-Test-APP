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
}

products()
