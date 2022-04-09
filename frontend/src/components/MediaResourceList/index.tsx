import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import MediaResourceItem from "../MediaResourceItem";
import ResultNotFound from "../ResultsNotFound";

import {getMoreSearchResults} from "../../store/actionCreators";

const MediaResourceList: React.FC = React.memo(() => {

    const dispatch: Dispatch<any> = useDispatch();
    
    const resources: readonly Media[] = useSelector(
        (state: MediaState) => state.mediaCollection
    );
    const hasMoreToLoad: boolean = useSelector(
        (state: MediaState) => state.shouldLoadMoreResults);
    
    const loadNextResults = React.useCallback(() => {
       dispatch(getMoreSearchResults(resources.length));
    }, [dispatch, resources]);

    return (
        <section>
            <h2>List of Resources</h2>
            {resources.length > 0
                ? (
                    <List>
                        <InfiniteScroll
                            dataLength={resources.length}
                            next={loadNextResults}
                            hasMore={hasMoreToLoad}
                            loader={
                                <Box sx={{ width: '100%', textAlign: 'center' }}>
                                    <CircularProgress disableShrink />
                                </Box>
                            }
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>End of the results</b>
                                </p>
                            }
                            scrollThreshold={0.95}
                        >
                            {resources.map((resource: Media) => (
                                <>
                                    <MediaResourceItem media={resource} />
                                    <Divider variant="inset" component="li" />
                                </>
                            ))}
                        </InfiniteScroll>
                    </List>
                ) : (
                    <ResultNotFound />
                )
            }
        </section>
    );
});

export default MediaResourceList;