import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Redux/BooksSlice";
import { v4 as uuidv4 } from "uuid";
const Addform = () => {
  const { isLogedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const title = useRef(null);
  const descreption = useRef(null);
  const price = useRef(null);

  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(
      addBooks({
        title: title.current.value,
        price: `${price.current.value} EGP `,
        description: descreption.current.value,
        id: uuidv4()
      })
    );
    title.current.value = null;
    price.current.value = null;
    descreption.current.value = null;
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmite}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              ref={title}
              className="form-control"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              ref={price}
              required
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="Description">Description</label>
            <textarea
              ref={descreption}
              className="form-control"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            disabled={!isLogedIn}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
