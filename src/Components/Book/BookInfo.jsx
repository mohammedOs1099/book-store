import { Fragment } from "react";

const BookInfo = ({ inf }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {inf ? (
        <div>
          <p className="fw-bold">Title: {inf?.title}</p>
          <p className="fw-light">Description: {inf?.description}</p>
          <p className="fst-italic">Price: {inf?.price}</p>
        </div>
      ) : (
        <div className="alert alert-info  " role="alert">
          There is no book selected yet. Please select!ndary
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
