import React from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from "./";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { searchStatus, searchType, sort, sortOptions, isLoading, search } =
    useSelector((store) => store.allJobs);

  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <div className="form">
        <h4>Search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            name="searchStatus"
            labelText="status"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            disabled={isLoading}
            className="btn btn-block btn-danger"
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchContainer;
