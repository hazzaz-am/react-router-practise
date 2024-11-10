import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		setError(null);

		fetch("https://dummyjson.com/products")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Couldn't fetch Data");
				}
				return res.json();
			})
			.then((productsData) => setProducts(productsData.products))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<section className="products-container">
			<h2>Wellcome to Products Page</h2>
			{isLoading && <p>Products Loading............</p>}
			{error && <p>{error}</p>}

			{!isLoading && !error && (
				<div className="products">
					{products &&
						products.length > 0 &&
						products.map((product) => (
							<article key={product.id} className="product">
								<img
									src={product.images[0]}
									alt={product.title}
									className="product__img"
								/>
								<h3>{product.title}</h3>
								<p>Category: {product.category}</p>
								<p>Price: {product.price}</p>
								<p>Description: {product.description?.substr(0, 100)}....</p>
								<Link
									to={`/products/${product.id}`}
									state={product}
									className="product__link"
								>
									Show Details
								</Link>
							</article>
						))}
				</div>
			)}
		</section>
	);
};

export default Products;
