import React from "react";
import { LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./index.module.scss";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  captchImg: {
    height: 41.5,
    position: "absolute",
    top: 29,
    right: 46,
    [theme.breakpoints.down("1200")]: {
      height: 35,
      top: 30,
      right: 35,
    },
  },
  spanNormal:{
    fontWeight:"normal !important",
    fontSize:"14px !important",
    marginLeft:15,
    marginTop:'0px !important'
  }
}));

export default function Index({
  formik,
  loading,
  srcCaptcha,
  getCaptchMehtod,
  handleOpen,
}) {
  const classes = useStyles();
  return (
    <>
      <div className="vh-100 d-flex justify-content-center ">
        <div className="form-access my-auto position-relative">
          <div className="position-absolute w-100 top-5">
            {loading && <LinearProgress className={"w-100"} />}
          </div>
          <form onSubmit={formik.handleSubmit}  style={{border:0,boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
            <span>ثبت نام</span>
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
                type="text"
                className="form-control bg-light"
                placeholder="کدملی"
                {...formik.getFieldProps("nationalCode")}
              />
              {formik.touched.nationalCode && formik.errors.nationalCode ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.nationalCode}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control bg-light"
                placeholder="شماره موبایل"
                {...formik.getFieldProps("mobile")}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.mobile}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control bg-light"
                placeholder="ایمیل"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.email}
                  </p>
                </div>
              ) : null}
            </div>

            <div className={`${styles["relative-position"]} form-group`}>
              <div className={styles["d-inline"]}>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="کد امنیتی"
                  {...formik.getFieldProps("captcha")}
                />
              </div>
              <div className={`${styles["captchImg"]}`}>
                {srcCaptcha.src && (
                  <img
                    className={`${styles["src-captcha"]}`}
                    width="100%"
                    height="100%"
                    src={srcCaptcha.src}
                    alt=""
                  />
                )}
              </div>
              <div className={styles["refresh-icon"]}>
                <IconButton
                  aria-label="toggle password visibility"
                  onMouseDown={(event) => event.preventDefault()}
                  className={classes.passwordIcon}
                  onClick={() => getCaptchMehtod()}
                >
                  <RefreshIcon />
                </IconButton>
              </div>

              {formik.touched.captcha && formik.errors.captcha ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.captcha}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="custom-control custom-checkbox text-right font-weight-normal d-flex align-items-center">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
                name="terms"
                {...formik.getFieldProps("terms")}
              />
              
              <label
                className={`${styles["checkbox"]} custom-control-label`}
                htmlFor="form-checkbox"
              >
                <span className={classes.spanNormal}>با <a onClick={handleOpen}>قوانین و مقررات</a> موافقم</span>
              </label>
            </div>
            {formik.touched.terms && formik.errors.terms ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.terms}
                  </p>
                </div>
              ) : null}
            <button type="submit" className="btn btn-primary">
              ادامه
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
