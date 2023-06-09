import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// Import components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

// Import images
import mernograph from "./images/mernograph.png";

// Import styles
import useStyles from "./styles";

// Allows us to Dispatch an action
import { useDispatch } from "react-redux";

// Import the action
import { getPosts } from "./actions/posts";

const App = () => {
  // Use the styles defined in styles.js
  const classes = useStyles();

  // Set up the dispatch
  const dispatch = useDispatch();

  // Use the useEffect hook to dispatch the action (getPosts) when the page loads
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* Title */}
        <Typography variant="h2" align="center" className={classes.heading}>
          MERNograph
        </Typography>
        {/* Logo */}
        <img
          src={mernograph}
          className={classes.image}
          alt="mernograph"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/* Posts */}
            {/*  Full width on mobile devices, 7 columns on small devices and up */}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            {/* Form */}
            {/*  Full width on mobile devices, 4 columns on small devices and up */}
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
