import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justifyContent={"flex-end"} alignItems={"center"}>
          {user ? (
            <Button onClick={() => signOut()} variant={"outlined"} color="success" component="div">
              Logout
            </Button>
          ) : (
            <Button variant={"outlined"} color="success" component="div">
              Login
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
