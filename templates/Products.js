import getProducts from '../services/getProducts'
import '../public/style.css'

const Products = async hash => {
  let products
  if (typeof hash == 'object') {
    products = hash
  } else {
    products = hash === '/' ? await getProducts() : await getProducts(hash)
  }

  const view = `
    <div class="Products">
    ${products
      .map(
        product => `
      <article class="Products-card">
        <img src="${product.url_image}" alt="${product.name}" />
				<h2>${product.name}</h2>
        <h3>$${product.price} <span> ${product.discount == 0 ? "" : `$${product.discount}`}</span></h3>
			</article>
    `
      )
      .join('')}
		</div>
  `

  return view
}

export default Products
