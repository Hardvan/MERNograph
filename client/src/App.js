import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import mernograph from "./images/mernograph.png";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          MERNograph
        </Typography>
        <img src={mernograph} alt="mernograph" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/*  Full width on mobile devices, 7 columns on small devices and up */}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
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
