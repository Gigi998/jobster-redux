import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const nextPage = () => {
    let nextPage = page + 1;
    if (nextPage > numOfPages) {
      nextPage = 1;
    }
    dispatch(changePage(nextPage));
  };
  const prevPage = () => {
    let prevPage = page - 1;
    if (prevPage < 1) {
      prevPage = numOfPages;
    }
    dispatch(changePage(prevPage));
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              type="button"
              key={pageNum}
              className={pageNum === page ? "pageBtn active" : "pageBtn"}
              onClick={() => dispatch(changePage(pageNum))}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
