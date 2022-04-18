import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { registerLevel2 } from "../../../../redux/auth/register";
import * as Yup from "yup";
import OtpUi from "./components";
import {
  handleNotificationAlertTrySelect,
  handleNotificationAlertCatch,
} from "../../../../components/common/method/handleNotificationAlert";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";



export default function Index() {

  const { push } = useHistory();
  const dispatch = useDispatch();


  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    confirmation_token: "",
  };

  const RegistrationSchema = Yup.object().shape({
    confirmation_token: Yup.string()
      .min(6, "حداقل 6 کارکتر")
      .max(6, "حداکثر 6 کارکتر")
      .required("لطفا کد تایید را وارد کنید"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      setLoading(true);

      let res = {
        confirmation_token: values.confirmation_token,
        national_id: state.nationalCode,
      };
      registerLevel2(res)
        .then((res) => {
          let isOk = handleNotificationAlertTrySelect(res, dispatch);
          if (isOk) {
            push({
              pathname: "/authSignup/completeRegister",
              state: {
                national_id: state.nationalCode,
                phone: state.mobile,
                email: state.email,
              },
            });
          }
        })
        .catch(() => {
          handleNotificationAlertCatch(dispatch);
        })
        .finally(() => {
          setLoading(true);
        });
    },
  });
  const handlereturm = () => {
    push({
      pathname: "/authSignup/signup",
    });
  };

  return (
    <>
      <OtpUi
        state={state}
        formik={formik}
        handlereturm={handlereturm}
        // handleClickAgainOtp={handleClickAgainOtp}
        loading={loading}
      />
    </>
  );
}
