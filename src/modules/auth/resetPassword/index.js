
import RestPassword from './component/cardPassword';
import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { forgetPasswordAction } from '../../../redux/auth/resetPassword';



export default function Reset() {

  const history = useHistory();
  const [loading, setLoading] = useState(false);


  const initialValues = {
    national_id: "",
    password: "",
    cPassword: "",
  };

  const ForgotPasswordSchema = Yup.object().shape({
    national_id:
      Yup.string()
        .required('فیلد مورد نظر را پر نمایید'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      let data = {
        national_id: values.national_id,
        needs_sms: values.needs_sms ? "TRUE" : "FALSE"
      }
      setLoading(true)
      forgetPasswordAction(data)
        .then((res) => {
          if (res.data.response.is_successful) {
            setStatus({
              success: `درخواست به ${handleAlertSuccess(res)} ارسال شد`
            })
            setLoading(false)
            setSubmitting(true);
          }
          else {
            setSubmitting(false);
            if (res.data.response.error_description === "INVALID member_id") {
              setStatus(
                `درخواستی ${values.national_id} یافت نشد`
              );
            } else {
              setStatus(
                { error: "شماره تلفن یا ایمیل ثبت نشده است، لطفا با پشتیبانی تماس بگیرید." }
              );
            }
          }

        })
        .catch(() => {
          setSubmitting(false);
          setLoading(false)
          setStatus('خطا در ارتباط با سرور');
        });
    },
  });

  const handleAlertSuccess = (res) => {
    if (!res.data.response.data.sms_resp) {
      return "ایمیل"
    }

    let target =
      res.data.response.data.data.email_response.sent && res.data.response.data?.sms_resp.is_successful ? "ایمیل و اس ام اس" :
        res.data.response.data.data.email_response.sent && !res.data.response.data?.sms_resp.is_successful ? "ایمیل" :
          !res.data.response.data.data.email_response.sent && res.data.response.data?.sms_resp.is_successful ? "اس ام اس" : "(نا مشخص)"

    return target
  }


  return (
    <>
      <RestPassword
        history={history}
        loading={loading}
        formik={formik}
      />
    </>
  );
}


