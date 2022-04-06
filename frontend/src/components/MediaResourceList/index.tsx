import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";

import * as api from "../../service";
import MediaResourceItem from "../MediaResourceItem";

interface Props {
    resources: IMedia[];
}

const MediaResourceList: React.FC<Props> = React.memo(({resources = []}: Props) => {

    const [collection, setCollection] = React.useState(resources);
    const fetchData = React.useCallback(() => {
        api.getMediaResourceArtistByTerm('iron maiden')
        .then(response => {
            if (response.status === 200) {
                setCollection([...collection, ...response.data.results])
            }
        });
    }, [collection]);

    React.useEffect(() => {
        if (collection.length < 20) {
            fetchData();
        }
    }, [fetchData, collection.length]);

    return (
        <section>
            <h2>List of Resources</h2>
            <ul>
                <InfiniteScroll
                    dataLength={collection.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {collection.map((resource: IMedia) => (
                        <li key={resource.artistId + Date.now()}>
                            {/*<MediaResourceItem {...resource} />*/}
                            {resource.artistName}
                        </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </section>
    );
});

export default MediaResourceList;