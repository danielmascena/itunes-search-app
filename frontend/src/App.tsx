import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Home from './pages/Home';

import './App.css';

const App: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch();

  const resources: readonly IMedia[] = useSelector(
    (state: AppState) => state.mediaCollection,
    shallowEqual
  );

  return (
    <Home />
  );
}

export default App;
