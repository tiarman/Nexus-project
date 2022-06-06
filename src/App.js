import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import OurDocuments from './Components/HomePageComponents/AboutUsNave/OurDocuments/OurDocuments';
import OurPerformence from './Components/HomePageComponents/AboutUsNave/OurPerformence/OurPerformence';
import Management from './Components/HomePageComponents/Management/Management';
import Message from './Components/HomePageComponents/Message/Message';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard/:panel">
          <Dashboard />
        </Route>
        <Route path="/performence">
          <OurPerformence />
        </Route>
        <Route path="/massege">
          <Message />
        </Route>
        <Route path="/management">
          <Management />
        </Route>
        <Route path="/document">
          <OurDocuments />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;