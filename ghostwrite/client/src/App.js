import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrowsePage from "./pages/BrowsePage";
import TextEditor from "./pages/TextEditor";
import ReadDetail from "./componenets/ReadDetail";
import NoMatch from "./pages/NoMatch";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BrowsePage} />
          <Route exact path="/write" component={BrowsePage} />
          <Route exact path="/write/editor" component={TextEditor} />
          <Route exact path="/read" component={BrowsePage} />
          <Route exact path="/read/:piece_id" component={ReadDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
