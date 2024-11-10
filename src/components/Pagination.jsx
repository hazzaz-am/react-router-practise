/* eslint-disable react/prop-types */

const Pagination = ({ totalPages, currentPage, onHandleCurrentPage }) => {
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			onHandleCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onHandleCurrentPage(currentPage + 1);
		}
	};

	const handleFirstPage = () => {
		onHandleCurrentPage(1);
	};

	const handleLastPage = () => {
		onHandleCurrentPage(totalPages);
	};

	return (
		<div className="pagination">
			<button
				onClick={handleFirstPage}
				disabled={currentPage === 1}
				aria-label="First Page"
			>
				&laquo;&laquo;
			</button>
			<button onClick={handlePreviousPage} disabled={currentPage === 1}>
				Previous
			</button>
			{Array.from({ length: totalPages }, (_, idx) => (
				<button
					className={currentPage === idx + 1 && "active"}
					onClick={() => onHandleCurrentPage(idx + 1)}
					key={idx}
				>
					{idx + 1}
				</button>
			))}
			<button onClick={handleNextPage} disabled={currentPage === totalPages}>
				Next
			</button>
			<button
				onClick={handleLastPage}
				disabled={currentPage === totalPages}
				aria-label="Last Page"
			>
				&raquo;&raquo;
			</button>
		</div>
	);
};
export default Pagination;
