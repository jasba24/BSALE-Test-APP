// import '../public/style.css'
import Categories from '../templates/Categories'
import Products from '../templates/Products'
import getHash from './../utils/getHash'

const Product = async products => {
  let hash
  if (products) {
    hash = products
  } else {
    hash = getHash()
  }

  const view = `
    <div class="Categories-inner">
      ${await Categories()}
      <article class="Categories-card">
        <a href="/" >
          <h2>TODOS LOS PRODUCTOS</h2>
        </a>
      </article>
      </div>
    ${await Products(hash)}
  `

  return view
}

export default Product
