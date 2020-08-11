import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import UsersList from "./UsersList";
import { PrivateRoute } from "./PrivateRoute";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <PrivateRoute exact path="/" component={UsersList} />
          <Route path="/login" exact component={LoginForm} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
