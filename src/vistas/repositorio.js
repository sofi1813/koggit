import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Tarjeta from "./tarjeta_repositorio";

export default function Repositorio() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid container direction="column" alignItems="center" className={classes.title}>
        <Typography variant="h4" > REPOSITORIO </Typography>
        <Typography variant="subtitle1" > Almacena publicaciones y temas de interés </Typography>
      </Grid>
      <Grid container xs={10} direction="column" justify="space-around" alignItems="center" className={classes.post}>
        <br/>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={3}
          padding={2}
        >
          <Tarjeta />
          <Tarjeta />
        </Grid>
      
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    //backgroundColor: '#f5f5f5',
  },
  post: {
    flex: 1 ,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),    
    padding: theme.spacing(2),
    backgroundColor: '#fff',
  },
  title: {
    flex: 1 ,   
    padding: theme.spacing(5),
    backgroundColor: '#E7E7E7',
  },
}));
