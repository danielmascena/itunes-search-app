import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';

import Home from "./pages/Home";

const App: React.FC = () => {
  const hasErrorHappened: boolean = useSelector(
    (state: MediaState) => state.hasRequestCrash
  );

  return (
    <>
      {hasErrorHappened && (
        <Box>
          <RunningWithErrorsIcon color="error" />
          Sorry for the inconvenience but something gone wrong with your request. Try redoing your search with a different query.
        </Box>
      )}
      <Home />
    </>
  );
};

export default App;
