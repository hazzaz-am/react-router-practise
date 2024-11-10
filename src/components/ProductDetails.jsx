import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
	const { state } = useLocation();

	return (
		<div className="product-details">
			<h2 className="product-details__title">{state.title}</h2>
			<article className="product-details__article">
				<img
					src={state.images[0]}
					alt={state.title}
					className="product-details__img"
				/>
				<p>
					<strong>Category:</strong> {state.category}
				</p>
				<p>
					<strong>Brand:</strong> {state.brand}
				</p>
				<p>
					<strong>Price:</strong> ${state.price}
				</p>
				<p>
					<strong>Rating:</strong> {state.rating}
				</p>
				<p>
					<strong>Description:</strong> {state?.description}
				</p>
				<Link to={`/products`} className="product__link">
					Continue Shopping
				</Link>
			</article>
		</div>
	);
};
export default ProductDetails;
