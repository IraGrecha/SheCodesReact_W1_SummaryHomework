import React from "react";

export default function Form() {
  return (
    <div className="searchForm" class="mb-3">
      <div className="row">
        <div className="col-9">
          <form>
            <input
              type="search"
              placeholder="Type a city"
              class="form-control"
              id="search-city"
            />
            <input
              type="submit"
              placeholder="Search"
              id="btn btn-primary w-50"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
