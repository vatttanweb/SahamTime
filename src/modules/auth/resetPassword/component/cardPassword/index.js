import React from 'react';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@mui/material'

export default function Reset({
    loading,
    formik,
    history
}) {
    return (
        <>
            <div className="vh-100 d-flex justify-content-center">
                <div className="form-access my-auto position-relative">
                    <div className='position-absolute w-100 top-5'>
                        {
                            loading && (<LinearProgress className={'w-100'} />)
                        }
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        style={{border:0,boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}
                    >
                        <span>رمز عبور را فراموش کرده اید ؟</span>
                        {
                            (!formik.status?.success && !formik.status?.error) && (
                                <p className='w-100 text-center'>کدملی را وارد کنید تا پسوردتان بازیابی شود</p>
                            )
                        }

                        {formik.status?.error && (
                            <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                                <div className="alert-text text-right text-danger font-weight-bold">
                                    {formik.status.error}
                                </div>
                            </div>
                        )}

                        {formik.status?.success && (
                            <div className="mb-10 alert alert-custom alert-light-success alert-dismissible">
                                <div className="alert-text text-right text-success font-weight-bold">
                                    {formik.status.success}
                                </div>
                            </div>
                        )}
                        <div className="form-group fv-plugins-icon-container">
                            <input
                                type="text"
                                className="form-control bg-light"
                                placeholder="کد ملی"
                                {...formik.getFieldProps("national_id")}
                            />
                            {formik.touched.national_id && formik.errors.national_id ? (
                                <div className="fv-plugins-message-container">
                                    <div className="fv-help-block">{formik.errors.national_id}</div>
                                </div>
                            ) : null}
                        </div>
                        {/* begin: needs_sms */}
                        <div className="form-group">
                            <label className="checkbox d-flex align-items-center" >
                                <input
                                    type="checkbox"
                                    name="needs_sms"
                                    className="m-1"
                                    {...formik.getFieldProps("needs_sms")}
                                />
                                <p
                                    className="mr-1 mt-0 mb-0"
                                    rel="noopener noreferrer"
                                >
                                    ارسال از طریق پیامک
                                </p>
                                <span />
                            </label>
                        </div>
                        {/* end: needs_sms */}
                        <div className='d-flex justify-conter-around align-center mt-1'>
                            <button
                                type="submit"
                                className="btn btn-primary m-1"
                            >
                                {
                                    formik.values.needs_sms && ('ارسال پیامک')
                                }
                                {
                                    !formik.values.needs_sms && ('ارسال ایمیل')
                                }
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger m-1"
                                onClick={() => history.push('/logloginin')}
                            >
                                لغو
                            </button>
                        </div>
                        <h2 className='w-100 text-left'>
                            <Link to="/login"> ورود</Link>
                        </h2>
                    </form>
                </div>
            </div>
        </>
    );
}
