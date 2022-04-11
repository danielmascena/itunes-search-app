import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Home from "./pages/Home";

import "./App.css";

const App: React.FC = () => {
  const hasErrorHappened: boolean = useSelector(
    (state: MediaState) => state.hasRequestCrash
  );

  return (
    <>
      {hasErrorHappened && (
        <Box>
          Something bad happened with your request. Clear the searc and try
          again
        </Box>
      )}
      <Home />
    </>
  );
};

export default App;
