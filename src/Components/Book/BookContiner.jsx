import { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook /*getOneBook*/ } from "../../Redux/BooksSlice";

const BookContainer = () => {
  const [SelectedBook, setSelectedBook] = useState(null);
  const { isLooding, books, error /* bookInf */ } = useSelector(
    (state) => state.book
  );
  const getOneBook = (id) => {
    const book = books.find((book) => book.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...book };
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className=" col-md-6 col-lg-6 ">
          <BooksList
            isLooding={isLooding}
            books={books}
            error={error}
            dispatch={dispatch}
            deleteBook={deleteBook}
            getOneBook={getOneBook}
            setSelectedBook={setSelectedBook}
          />
        </div>
        <div className="col-md-6 col-lg-6 side-line">
          <BookInfo inf={SelectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
