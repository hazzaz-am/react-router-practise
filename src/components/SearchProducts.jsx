/* eslint-disable react/prop-types */

const SearchProducts = ({searchTerm, onHandleSearchTerm}) => {
  return (
		<div className="search">
			<input
				type="text"
				name="search"
				placeholder="Search Products....."
				id="search"
				onChange={onHandleSearchTerm}
				value={searchTerm}
			/>
		</div>
	);
}
export default SearchProducts