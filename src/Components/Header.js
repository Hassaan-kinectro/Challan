import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
const Header = () => {
    const handleSubmit = () => {
        window.localStorage.removeItem("token"); 
         window.location = "/";
    }
    return(
        <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WELCOME!
            </Typography>
            <Grid container justify="flex-end">
              <Button
              onClick={handleSubmit}
                color="secondary"
                size="large"
                type="submit"
                variant="contained"
              >
                LogOut
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
    )
}
export default Header;
