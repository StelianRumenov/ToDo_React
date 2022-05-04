import React from "react";
import List from "./List";
import Footer from "./Footer";
import FormInput from "./FormInput";
import Grid from "@mui/material/Grid";

const Layout = () => {
  return (
    <div>
      <List></List>
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-end"
        alignItems="center"
        padding={6}
      >
        <FormInput></FormInput>
        <Footer />
      </Grid>
    </div>
  );
};

export default Layout;
