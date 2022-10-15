import getProducts from '../services/getProducts'
import '../public/style.css'

const Products = async hash => {
  const products = hash === '/' ? await getProducts() : await getProducts(hash)

  const view = `
    <div class="Products">
    ${products
      .map(
        product => `
      <article class="Products-card">
        <img src="${product.url_image}" alt="${product.name}" />
				<h2>${product.name}</h2>
        <span>$${product.price}</span>
        <span> $${product.discount}</span>
			</article>
    `
      )
      .join('')}
		</div>
  `

  return view
}

export default Products
