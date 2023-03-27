import { FaCheck, FaSearch } from "react-icons/fa";
import Button from "../elements/Button";
import React, { useState } from "react";
import toastr from "../lib/toastr";
import { Collapse, Spinner } from "reactstrap";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [searchToken, setSearchToken] = useState("");
  const toggleHandler = (e) => {
    setIsOpen(!isOpen);
    e.target.parentElement.remove();
  };

  const changeSearchItemHandler = (e) => {
    setSearchToken(e.target.value);
    if (e.target.value) {
      e.target.classList.remove("error");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchToken) {
      setIsShowLoader(!isShowLoader);

      console.log(document.getElementsByName("seachItem")[0].value);
    } else {
      document.getElementsByName("seachItem")[0].classList.add("error");
      toastr.error("Enter the gene name");
    }
  };
  return (
    <>
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 mb-1">
        <Button onClick={toggleHandler}>
          <FaCheck className="mx-1" />
          Click to Start
        </Button>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="col-12">
          <div className="search-box">
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="row">
                <div className="col-xs-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <div className="search-box-holder">
                    <input
                      disabled={isShowLoader}
                      name="seachItem"
                      type="text"
                      onChange={(e) => changeSearchItemHandler(e)}
                      value={searchToken}
                      placeholder="Enter the gene name and click the search"
                      autoComplete="off"
                      maxLength="50"
                      className={`form-control input-text ${
                        isShowLoader ? "disabled" : ""
                      }`}
                    />
                    <Button
                      type="submit"
                      exteraClass="search-btn"
                      isDisabled={isShowLoader}
                    >
                      {isShowLoader ? (
                        <Spinner size="sm" className="mx-2" />
                      ) : (
                        <FaSearch size="16px" className="mx-2" />
                      )}
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Search;
