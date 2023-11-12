import ReactPaginate from "react-paginate";
import "./pagination.scss";
import { useEffect } from "react";

function Pagination({ pageCount, handPageClick }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                breakClassName="break-class"
                activeClassName="activepagination"
                containerClassName={"pagination"}
                pageLinkClassName="buttonPage"
                previousLinkClassName="buttonPage"
                nextLinkClassName="buttonPage"
                nextLabel="next >"
                onPageChange={handPageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default Pagination;
