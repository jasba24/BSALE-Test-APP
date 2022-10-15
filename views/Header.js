import "../public/style.css"

const Header = () => {
	const view = `
		<div class="Header-main">
			<div class="Header-logo">
				<h1>
					<a href="/">
						<img src="https://i.ibb.co/K2W7VzZ/logo-bsale.png" alt="logo empresa" />
					</a>
				</h1>
			</div>
			<div class="Header-nav">
				<input id="search-input" type="text" placeholder="buscar..." />
        <img src="https://i.ibb.co/2vmbxKD/icon-search.png" alt="icono buscar" />
			</div>
		</div>
	`
	return view
}

export default Header