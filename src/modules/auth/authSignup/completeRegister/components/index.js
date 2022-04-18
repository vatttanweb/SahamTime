import React from "react";
import { LinearProgress } from '@mui/material';

export default function index({formik ,loading,handlereturm}) {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center ">
        <div className="form-access my-auto position-relative">
          <div className="position-absolute w-100 top-5">
            {loading && <LinearProgress className={"w-100"} />}
          </div>
          <form onSubmit={formik.handleSubmit}  style={{border:0,boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
            <span>تکمیل اطلاعات</span>
           
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
                className={`form-control`}
                placeholder="نام"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.firstName}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="text"
                className={`form-control`}
                placeholder="نام خانوادگی"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.lastName}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control`}
                placeholder="رمز عبور"
                {...formik.getFieldProps("pass")}
              />
              {formik.touched.pass && formik.errors.pass ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.pass}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control`}
                placeholder="تکرار رمز عبور"
                {...formik.getFieldProps("confirmPass")}
              />
              {formik.touched.confirmPass && formik.errors.confirmPass ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">
                    {formik.errors.confirmPass}
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
