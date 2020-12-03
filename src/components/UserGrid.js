import "./AppContainer";
import Grid from "components/Grid";
import UserGridItem from "components/UserGridItem";
import { getUsers } from "data/users";
import Pagination from "./Pagination";
import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash-es/debounce";

function UserGrid(props) {
  const [users, setUsers] = useState([]);
  // const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useState({});
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  /**
   *  Update params if param-related variable change
   */

  useEffect(() => {
    setParams({
      page,
      limit,
      ...(props.params ? props.params : {}),
    });
  }, [page, limit, props.params]);

  /*
  Fetch our data if params change
  */
  useEffect(() => {
    fetchData(params);
  }, [params]);

  /**
   * Wrap fetchData in useCallback and
   * debounce to prevent multiple
   * calls from useEffect.
   */
  const fetchData = useCallback(
    //if the function invoked multiple times we only want to run it once
    debounce((params) => {
      getUsers(params).then((response) => {
        // destructure rows and count from the response data
        const { rows, count } = response.data;
        setUsers(rows);
        setTotalPages(Math.ceil(count / limit));
      });
    }, 500), // 500 milliseconds, half a sec
    [] // no idea, needed for debounce to work
  );

  useEffect(() => {
    // determine if previous button should be disabled
    setPrevDisabled(page === 1);

    // determine if next button should be disabled
    setNextDisabled(page >= totalPages);
  }, [page, totalPages])

  // increase our page by 1
  function handleNext() {
    let tempPage = page + 1;
    if (tempPage > totalPages) {
        tempPage = totalPages
    }
    setPage(tempPage);
  }

  // decrease page by 1, or reset to 0
  function handlePrev() {
    let tempPage = page - 1;
    if (tempPage < 1) {
      tempPage = 1;
    }
    setPage(tempPage);
  }

  return (
    <div className="UserGrid">
      <Grid items={users} component={UserGridItem} />
      <Pagination
        totalPages={totalPages}
        itemsPerPage={limit}
        page={page}
        prev={handlePrev}
        next={handleNext}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
      ></Pagination>
    </div>
  );
}

export default UserGrid;
