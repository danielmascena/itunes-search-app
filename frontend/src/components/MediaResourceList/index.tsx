import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import * as api from "../../service";
import MediaResourceItem from "../MediaResourceItem";
import ResultNotFound from "../ResultsNotFound";

interface Props {
    resources: Media[];
}

const MediaResourceList: React.FC<Props> = React.memo(({resources = []}: Props) => {

    const [collection, setCollection] = React.useState(resources);
    const fetchData = React.useCallback(() => {
        api.getMediaResourceArtistByTerm('iron maiden')
        //api.getMediaResourceAlbumByTerm('british steel')
        .then(response => {
            if (response.status === 200) {
                setCollection([...collection, ...response.data.results])
            }
        });
    }, [collection]);

    React.useEffect(() => {
        if (collection.length > 0 && collection.length <= 10) {
            fetchData();
        }
    }, [fetchData, collection.length]);

    return (
        <section>
            <h2>List of Resources</h2>
            {resources.length 
                ? (
                    <List>
                        <InfiniteScroll
                            dataLength={collection.length}
                            next={fetchData}
                            hasMore={true}
                            loader={<Box sx={{ width: '100%', textAlign: 'center' }}>
                                    <CircularProgress disableShrink />
                                </Box>
                            }
                        >
                            {collection.map((resource: Media) => (
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