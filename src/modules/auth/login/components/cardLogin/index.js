import React from 'react';
import { Link } from 'react-router-dom';
import { LinearProgress } from "@mui/material"

export default function login({ formik, loading }) {

  return (
    <>

      <div className="vh-100 d-flex justify-content-center ">
        <div className="form-access my-auto position-relative">
          <div className='position-absolute w-100 top-5'>
            {
              loading && (<LinearProgress className={'w-100'} />)
            }
          </div>
          <form
          style={{border:0,boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}
            onSubmit={formik.handleSubmit}
          >
            <span>ورود</span>
            {(formik.status && !loading) ? (
              <div className="mb-10 alert alert-custom alert-light-danger ">
                <div className="alert-text font-weight-bold text-center text-danger">
                  نام کاربری یا رمز عبور اشتباه می باشد
                </div>
              </div>
            ) : (
              <div className=" w-100 mb-10 alert alert-custom alert-light-info ">
                <div className="alert-text text-center">
                  کد ملی و رمز عبور خود را وارد کنید
                </div>
              </div>
            )}
            <div className="form-group">
              <input
                type="text"
                className="form-control bg-light"
                placeholder="شناسه یا کدملی"
                {...formik.getFieldProps("userName")}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">{formik.errors.userName}</p>
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control bg-light"
                placeholder="رمز عبور"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="fv-plugins-message-container w-100">
                  <p className="fv-help-block text-danger text-right mt-2 text-error-formik">{formik.errors.password}</p>
                </div>
              ) : null}
            </div>
            <div className="text-right">
              <Link to="/reset">فراموشی رمز عبور؟</Link>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                مرا به خاطر بسپار
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              ورود به حساب کاربری
            </button>
          </form>
          <h2>
            حساب کاربری ندارید؟ <Link to="/authSignup/signup">عضویت</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
