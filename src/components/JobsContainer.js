import React from "react";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { Job } from "./";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((item) => {
          return <Job key={item._id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
