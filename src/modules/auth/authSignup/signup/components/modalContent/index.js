import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './index.css';

const useStyles = makeStyles((theme) => ({
  ModalAdd: {
    width: 600,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "whitesmoke",
  },
  root: {
    padding: "20px 0",

    width: "90%",
    margin: "auto",
    "& .MuiBox-root": {
      margin: theme.spacing(1),
    },
  },
  btns: {
    margin: "0px 0 10px 0",
    textAlign: "right",
    width: "95%",
  },
  closeBtn:{
      border:"1px solid #000",
      borderRadius:"5px",
  }
}));

export default function Index({handleClose}) {
  const classes = useStyles();



  return (
    <div className={classes["ModalAdd"]}>
      <div className={classes["root"]}>
        <div>
          <Box width="90%" style={{textAlign:'right'}}>
          قوانین و مقررات
          </Box>

          <Box width="100%">
          </Box>
        </div>
      </div>

      <div className={classes["btns"]}>
        <button className={classes.closeBtn} onClick={handleClose}>
          بستن{" "}
        </button>
      </div>
    </div>
  );
}

