import * as React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import {getMediaDescription} from "../../helpers";

const MediaResourceItem: React.FC<Media> = (props) => {
    const {
        artistName,
        artworkUrl100
    } = props;
    const [primaryText, secondaryText, extraText] = getMediaDescription(props);

  return (
    <ListItem alignItems="flex-start">
      {artworkUrl100 && (
          <ListItemAvatar>
            <Avatar alt={artistName} src={artworkUrl100} />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={primaryText}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {secondaryText}
            </Typography>
            {extraText}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default MediaResourceItem;
