import '../public/style.css'
import getCategories from '../services/getCategories'

const Categories = async () => {
  const categories = await getCategories()

  const view = `
  ${categories
    .map(
      category => `
  <article class="Categories-card">
    <a href="/${category.id}/" class="category-link">
      <h2>${category.name.toUpperCase()}</h2>
    </a>
  </article>
  `
    )
    .join('')}
	`
  return view
}

export default Categories
