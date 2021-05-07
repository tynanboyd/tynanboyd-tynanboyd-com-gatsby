import React from 'react';
{
  /* import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute"; */
}
import BookClubNavBar from '../components/BookClubNavBar';

{
  /* import Profile from "../components/Profile"; */
}
{
  /* import Login from "../components/Login"; */
}
const App = () => (
  <>
    <h1>No Dead White Men Bookclub</h1>

    {/* <Router>
      <PrivateRoute path="/bookclub/profile" component={Profile} />
      <Login path="/bookclub/login" />
    </Router> */}

    <BookClubNavBar />
  </>
);
export default App;
