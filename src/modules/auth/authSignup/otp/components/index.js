import React from "react";
import { LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  numInput: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  numInput: {
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
}));

export default function Index({
  handlereturm,
  formik,
  loading,
}) {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <>
      <div className="vh-100 d-flex justify-content-center ">
        <div className="form-access my-auto position-relative">
          <div className="position-absolute w-100 top-5">
            {loading && <LinearProgress className={"w-100"} />}
          </div>
          <form onSubmit={formik.handleSubmit}  style={{border:0,boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
            <span>تایید کد</span>
            {formik.status && !loading ? (
              <div className="mb-10 alert alert-custom alert-light-danger ">
                <div className="alert-text font-weight-bold text-center text-danger">
                  لطفا اطلاعات را به درستی وارد کنید
                </div>
              </div>
            ) : (
              <div className=" w-100 mb-10 alert alert-custom alert-light-info ">
                <div className="alert-text text-center">
                  اطلاعات زیر را وارد کنید
                </div>
              </div>
            )}
            <div className="form-group">
              <input
                type="number"
                className={`form-control ${classes.numInput}`}
                placeholder="کد تایید"
                {...formik.getFieldProps("confirmation_token")}
              />
              {formik.touched.confirmation_token &&
              formik.errors.confirmation_token ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.confirmation_token}
                  </p>
                </div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              ادامه
            </button>
            <button onClick={handlereturm} className="btn btn-outline-primary">
              بازگشت
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
