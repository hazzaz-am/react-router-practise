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

	const getVisiblePageNumbers = () => {
		const visiblePages = 5;
		const pages = [];

		let startingPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
		const endingPage = Math.min(totalPages, startingPage + (visiblePages - 1));

		if (endingPage - startingPage < visiblePages - 1) {
			startingPage = Math.max(1, endingPage - visiblePages + 1);
		}

		for (let i = startingPage; i <= endingPage; i++) {
			pages.push(i);
		}

		return pages;
	};

	const visiblePages = getVisiblePageNumbers();

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
			{visiblePages.map((pageNumber) => (
				<button
					className={currentPage === pageNumber ? "active" : ""}
					onClick={() => onHandleCurrentPage(pageNumber)}
					key={pageNumber}
				>
					{pageNumber}
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
