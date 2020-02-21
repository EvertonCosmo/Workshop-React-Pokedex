import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <div className="container is-fullhd">
        <Switch>
          {/* <Route exact path="/" render={() => ( 
                                                            <Redirect to="/customerlist"/>
                                                  )}/> */}
          <Route exact path="/" component={HomePage} />
          <Route
            path="/pokemon/:id"
            render={props => <PokemonPage {...props} />}
          />
          {/* <Route exact path="/customerlist" component={Customers}/> */}
        </Switch>
      </div>
    </Fragment>
  </BrowserRouter>
);
export default Routes;
