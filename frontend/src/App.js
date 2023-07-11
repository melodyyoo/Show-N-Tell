import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage"
import AllShows from "./components/Shows/AllShows";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.thunkRestoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded &&
      <Switch>
        <Route exact path='/'component={LandingPage}/>
        <Route exact path='/shows' component={AllShows}/>
        {/* <Route exact path='/spots/new' component={CreateSpot}/>
        <Route exact path='/spots/:id' component={SpotDetails}/>
        <Route exact path='/spots/:id/edit' component={FormWrapper}/>
        <Route exact path='/reviews/current' component={ManageReviews}/> */}
      </Switch>
      }
    </>
  );
}

export default App;
