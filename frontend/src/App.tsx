import * as React from "react";
import { useSelector } from "react-redux";

import Home from './pages/Home';

import './App.css';

const App: React.FC = () => {
  const hasErrorHappened: boolean = useSelector(
    (state: MediaState) => state.hasRequestCrash);
    
  return (
    <>
      {hasErrorHappened && <div>Something bad happened with your request. Try refresh the search</div>}
      <Home />
    </>
  );
}

export default App;
