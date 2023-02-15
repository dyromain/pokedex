interface IPaginationProps {
    currentPage: number;
    onPageClick: (page: number) => void;
    maxPage: number;
}

export default function Pagination ({
    currentPage,
    onPageClick,
    maxPage,
}: IPaginationProps) {
    const prevPage = currentPage - 1 < 1 ? 1 : currentPage - 1;
    const nextPage = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    return (
        <div className="pagination">
            <ul>
                {prevPage !== currentPage && (
                    <li>
                        <button onClick={() => onPageClick(prevPage)}>{prevPage}</button>
                    </li>
                )}
            <li>{currentPage}</li>
            {nextPage !== currentPage && (
                <li>
                    <button onClick={() => onPageClick(nextPage)}>{nextPage}</button>
                </li>
            )}
            </ul>
        </div>
    );
}
