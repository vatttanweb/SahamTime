import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
const useStyles = makeStyles((them)=>({
  iconCenter:{
    textAlign:"center",
 
  },
  icon:{
    fontSize:"40px",

  },
}))
export default function Index({sendLogin}) {
  const classes = useStyles();
  return (
    <>
      <div className="vh-100 d-flex justify-content-center ">
        <div className="form-access my-auto position-relative">
          <div className="position-absolute w-100 top-5"></div>
          <form onSubmit={sendLogin}  style={{border:0,boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
            <span>پایان ثبت نام</span>
            <div className={classes.iconCenter}>
              <CheckCircleOutlineIcon sx={{ fontSize: 40 , color:"rgb(49,175,112)"}} />
            </div>
      
            <div className=" w-100 mb-10 alert alert-custom alert-light-info ">
              <div className="alert-text text-center">
                ثبت نام شما با موفقیت انجام شد
              </div>
              <div className="alert-text text-center">
                برای ورود به سامانه معاملات الگوریتم ورود کنید
              </div>
            </div>
            <button type="submit" className="btn btn-success font-weight-normal">
              ورود به سامانه الگوریتم
            </button>
            <div className="form-group"></div>
          </form>
        </div>
      </div>
    </>
  );
}
