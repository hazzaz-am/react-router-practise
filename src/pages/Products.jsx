import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import SearchProducts from "../components/SearchProducts";
import SortProducts from "../components/SortProducts";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");
	const [sortCriteria, setSortCriteria] = useState("");

	const productsPerPage = 10;

	useEffect(() => {
		setIsLoading(true);
		setError(null);

		let url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
			(currentPage - 1) * productsPerPage
		}`;

		if (searchTerm !== "") {
			url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${productsPerPage}&skip=${
				(currentPage - 1) * productsPerPage
			}`;
		}

		if (sortCriteria) {
			const splitCriteria = sortCriteria.split("-");
			const title = splitCriteria[0];
			const order = splitCriteria[1];
			url += `&sortBy=${title}&order=${order}`;
		}

		fetch(url)
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
	}, [currentPage, searchTerm, sortCriteria]);

	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
		// reset to first page on new search
		setCurrentPage(1);
	};

	const handleSortCriteria = (e) => {
		setSortCriteria(e.target.value);
	};

	// for searching products in current page
	// const filterProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

	return (
		<section className="products-container">
			<h2>All Products</h2>

			<div className="actions">
				{/* search products */}
				<SearchProducts
					searchTerm={searchTerm}
					onHandleSearchTerm={handleSearchTerm}
				/>

				{/* sort products */}
				<SortProducts
					onHandleSortCriteria={handleSortCriteria}
					sortCriteria={sortCriteria}
				/>
			</div>

			{/* Loading and Error */}
			{isLoading && <p>Products Loading............</p>}
			{error && <p>{error}</p>}

			{!isLoading && !error && (
				<>
					{/* Products */}
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
