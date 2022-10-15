// import '../public/style.css'
import Categories from '../templates/Categories'
import Products from '../templates/Products'
import getHash from './../utils/getHash'
import changeHash from '../utils/resolveRoutes'

const Product = async () => {
  let hash = getHash()
  const view = `
    <div class="Categories-inner">
      ${await Categories()}
      <article class="Categories-card">
        <a href="/" >
          <h2>TODOS LOS PRODUCTOS</h2>
        </a>
      </article>
      ${await Products(hash)}
		</div>
  `

  return view
}

export default Product
