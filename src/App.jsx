import { Fragment } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import Addform from "./Components/AddForm";
import BookContainer from "./Components/Book/BookContiner";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Addform />
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;
