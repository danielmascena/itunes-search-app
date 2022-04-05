import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Home from './pages/Home';
import * as api from "./service";

import './App.css';

const App: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch();

  const resources: readonly IMedia[] = useSelector(
    (state: AppState) => state.mediaCollection,
    shallowEqual
  );

  React.useEffect(() => {
    api.getMediaResourceArtistByTerm('iron maiden')
      .then(console.log);
  }, []);

  return (
    <Home />
  );
}

export default App;
