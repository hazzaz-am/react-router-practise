import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductInfo = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const { productId } = useParams();

	useEffect(() => {
		setIsLoading(true);
		setError(null);

		fetch(`https://dummyjson.com/products/${productId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Couldn't fetch Data");
				}
				return res.json();
			})
			.then((productsData) => setProduct(productsData))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, [productId]);

	return (
		<div className="product-details">
			<h2 className="product-details__title">{product.title}</h2>
			{isLoading && <p>Products Loading............</p>}
			{error && <p>{error}</p>}

			{!isLoading && !error && (
				<article className="product-details__article">
					<img
						src={product.images[0]}
						alt={product.title}
						className="product-details__img"
					/>
					<p>
						<strong>Category:</strong> {product.category}
					</p>
					<p>
						<strong>Brand:</strong> {product.brand}
					</p>
					<p>
						<strong>Price:</strong> ${product.price}
					</p>
					<p>
						<strong>Rating:</strong> {product.rating}
					</p>
					<p>
						<strong>Description:</strong> {product?.description}
					</p>
					<Link to={`/`} className="product__link">
						Continue Shopping
					</Link>
				</article>
			)}
		</div>
	);
};
export default ProductInfo;
