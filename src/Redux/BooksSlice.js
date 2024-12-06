import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// get books from database
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await fetch("https://book-server-pied.vercel.app/books");
      const data = await res?.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  add books
export const addBooks = createAsyncThunk(
  "book/addBooks",
  async (bookData, ThunkAPI) => {
    const { rejectWithValue, getState } = ThunkAPI;
    try {
      // add user name and user id to book data if logged in
      bookData = {
        ...bookData,
        userName: getState().auth?.name,
        userId: getState().auth?.id
      };
      const res = await fetch("https://book-server-pied.vercel.app/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
      const data = await res?.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Delete books to database
 export const deleteBook = createAsyncThunk(
  "book/deleteBooks",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {

      await fetch(`https://book-server-pied.vercel.app/books/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
      return id;
      
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
// get   select book frome database
// export const getOneBook = createAsyncThunk("book/getOneBook", async (id, ThunkAPI) => {
//   const { rejectWithValue } = ThunkAPI;
//   try {
//     const res = await fetch(`http://localhost:5000/books/${id}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json; charset=utf-8" }
//     });
//     const data = await res?.json();
//     return data;
//   } catch (error) {
//     rejectWithValue(error.message);
//   }
// })
const initialState = { books: [], isLooding: false, error: null,/*bookInf:null*/};
const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get books frome database
    builder.addCase(getBooks.pending, (state) => {
      state.isLooding = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLooding = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLooding = false;
      state.error = action.payload;
    });
    // add books to database
    builder.addCase(addBooks.pending, (state) => {
      state.isLooding = true;
    });
    builder.addCase(addBooks.fulfilled, (state, action) => {
      state.isLooding = false;
      state.books.push(action.payload);
    });
    builder.addCase(addBooks.rejected, (state, action) => {
      state.isLooding = false;
      state.error = action.payload;
    });
    // Delete books to database
       builder.addCase(deleteBook.pending, (state) => {
      state.isLooding = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLooding = false;
      state.books = state.books.filter((book => book.id !== action.payload));
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLooding = false;
      state.error = action.payload;
    });
// get   select book frome database
  //  builder.addCase(getOneBook.pending, (state) => {
  //     state.isLooding = true;
  //   });
  //   builder.addCase(getOneBook.fulfilled, (state, action) => {
  //     state.isLooding = false;
  //     state.bookInf = { ...state.bookInf, ...state.books.find(book => { return book.id === action.payload.id }) };
  //     console.log(state.bookInf);
      
  //   });
  //   builder.addCase(getOneBook.rejected, (state, action) => {
  //     state.isLooding = false;
  //     state.error = action.payload;
  //   });
  }
});
export default booksSlice.reducer;
