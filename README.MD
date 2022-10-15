# Aplicación BSALE Test

### Desarrollado con las siguientes tecnologías

- JavaScript
- HTML
- CSS
- Vite

###### Usando JavaScript como lenguaje principal y el empaquetador Vite para gestionar las templates, servicios y utilidades de la aplicación de una sola página.

## Templates de la aplicación
- **Home**: Vista principal de la aplicación encargada de mostrar los productos, el Header y las categorías.
- **Product**: Vista encargada de mostrar los productos junto con el Home y el Header.
- **Header**: Vista encargada de mostrar el logo de la empresa y el buscador. 
- **Category**: Template encargado de mostrar las categorías, para ser agregadas al Home.
- **Products**: Template encargado de mostrar los productos filtrados según la categoría seleccionada, para ser agregados al Home.

## Utilidades de la aplicación
- **GetHash**: Utilidad encargada de obtener la categoría seleccionada para filtrar los productos según la categoría a la que corresponda cada producto.
- **ResolveRoutes**: Utilidad encargada de manejar las rutas de la aplicación para gestionar los templates que se deben mostrar en la vista principal.

## Servicios de la aplicación
- **GetCategories**: Servicio encargado de traer las categorías a través de la API y ordenarlas alfabéticamente.
- **GetProducts**: Servicio encargado de traer los productos a través de la API, ordenarlos alfabéticamente y según la categoría seleccionada. 
