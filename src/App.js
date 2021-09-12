import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "pages/LandingPage";
import DetailPages from "pages/DetailsPage";
import Example from "pages/Example";
import Checkout from "pages/Checkout";

import "assets/scss/style.scss";




function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" component={LandingPage}></Route> */}
        <Route path="/properties/:id" component={DetailPages}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
