import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import MediaResourceItem from "../MediaResourceItem";
import ResultNotFound from "../ResultsNotFound";

import { fetchLoadResults } from "../../store/actionCreators";

const MediaResourceList: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();

  const resources: readonly Media[] = useSelector(
    (state: MediaState) => state.mediaCollection,
    shallowEqual
  );
  const hasMoreToLoad: boolean = useSelector(
    (state: MediaState) =>
      state.searchByArtist || state.searchByAlbum || state.searchBySong
  );

  const queryTerm: string = useSelector(
    (state: MediaState) => state.searchTerm
  );

  const loadNextResults = React.useCallback(() => {
    dispatch(fetchLoadResults());
  }, [dispatch]);

  const headingMessageResult = React.useMemo(() => {
    if (queryTerm !== "") {
      return (
        <>
          These are the result searching for {queryTerm}. Found{" "}
          {resources.length} entries
        </>
      );
    }
    return <>Type something in the search box to see some results</>;
  }, [queryTerm, resources.length]);

  return (
    <section>
      <Box
        component="h4"
        sx={{ textAlign: "center", textTransform: "uppercase" }}
      >
        {headingMessageResult}
      </Box>
      {resources.length > 0 ? (
        <List>
          <InfiniteScroll
            dataLength={resources.length}
            next={loadNextResults}
            hasMore={hasMoreToLoad}
            loader={
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <CircularProgress disableShrink />
              </Box>
            }
            endMessage={
              <Box component="p" sx={{ textAlign: "center" }}>
                <b>End of the results</b>
              </Box>
            }
          >
            {resources.map((resource: Media, index: number) => (
              <Box key={`${resource.artistId}-${index}`}>
                <MediaResourceItem {...resource} />
                <Divider variant="inset" component="li" />
              </Box>
            ))}
          </InfiniteScroll>
        </List>
      ) : (
        queryTerm && <ResultNotFound />
      )}
    </section>
  );
});

export default MediaResourceList;
