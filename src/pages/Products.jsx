import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	const productsPerPage = 10;

	useEffect(() => {
		setIsLoading(true);
		setError(null);

		fetch(
			`https://dummyjson.com/products?limit=${productsPerPage}&skip=${
				(currentPage - 1) * productsPerPage
			}`
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Couldn't fetch Data");
				}
				return res.json();
			})
			.then((productsData) => {
				setProducts(productsData.products);
				setTotalPages(Math.ceil(productsData.total / productsPerPage));
			})
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, [currentPage]);

	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	};

	// for searching products in current page
	const filterProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

	return (
		<section className="products-container">
			<h2>All Products</h2>

			{/* search term */}
			<input
				type="text"
				name="search"
				placeholder="Search Products....."
				id="search"
				onChange={handleSearchTerm}
				value={searchTerm}
			/>

			{/* Loading and Error */}
			{isLoading && <p>Products Loading............</p>}
			{error && <p>{error}</p>}

			{!isLoading && !error && (
				<>
					{/* Products */}
					<div className="products">
						{filterProducts &&
							filterProducts.length > 0 &&
							filterProducts.map((product) => (
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

					{/* pagination */}
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						onHandleCurrentPage={setCurrentPage}
					/>
				</>
			)}
		</section>
	);
};

export default Products;
