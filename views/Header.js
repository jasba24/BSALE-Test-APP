import "../public/style.css"

const Header = () => {
	const view = `
		<div class="Header-main">
			<div class="Header-logo">
				<h1>
					<a href="/">
						<img src="../public/logo-bsale.png" alt="logo empresa" />
					</a>
				</h1>
			</div>
			<div class="Header-nav">
				<input id="search" type="text" />
        <img src="../public/icon-search.png" alt="icono buscar" />
			</div>
		</div>
	`
	return view
}

export default Header