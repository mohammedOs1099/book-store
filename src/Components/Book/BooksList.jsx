import { useSelector } from "react-redux";

const BooksList = ({
  setSelectedBook,
  isLooding,
  books,
  error,
  dispatch,
  deleteBook,
  getOneBook
}) => {
  const { isLogedIn } = useSelector((state) => state.auth);
  const booksList = books?.map((book) => {
    return (
      <li
        key={book.id}
        className="list-group-item d-flex  justify-content-between align-items-center"
      >
        <div>{book.title}</div>
        <div className="btn-group" role="group">
          <button
            onClick={() => {
             getOneBook(book.id);
            }}
            disabled={!isLogedIn}
            type="button"
            className="btn btn-primary"
          >
            Read
          </button>
          <button
            onClick={() => {
              dispatch(deleteBook(book.id));
              setSelectedBook(null)
            }}
            disabled={!isLogedIn}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </li>
    );
  });
  return (
    <div>
      <h2>Books List</h2>
      {isLooding ? (
        <p>Looding.... </p>
      ) : error || books?.length === 0 ? (
        <p className=" text-danger alert alert-danger ">
          There is no books yet!
        </p>
      ) : (
        <ul className="list-group">{booksList}</ul>
      )}
    </div>
  );
};

export default BooksList;
