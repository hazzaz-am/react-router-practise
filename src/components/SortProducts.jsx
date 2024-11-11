/* eslint-disable react/prop-types */

const SortProducts = ({ sortCriteria, onHandleSortCriteria }) => {
	return (
		<div className="sort">
			<select
				name="sort"
				id="sort"
				className="sort-select"
				value={sortCriteria}
				onChange={onHandleSortCriteria}
			>
				<option value="">Sort By</option>
				<option value="title-asc">Title: A - Z</option>
				<option value="title-desc">Title: Z - A</option>
				<option value="price-asc">Price: Low to High</option>
				<option value="price-desc">Price: High to Low</option>
				<option value="rating-asc">Rating: Low to High</option>
				<option value="rating-desc">Rating: High to Low</option>
			</select>
		</div>
	);
};
export default SortProducts;
