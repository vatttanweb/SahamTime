import React, { useState } from "react";
import CompleteRegisterUi from "./components";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  handleNotificationAlertTrySelect,
  handleNotificationAlertCatch,
} from "../../../../components/common/method/handleNotificationAlert";
import { useHistory, useLocation } from "react-router-dom";
import { registerLevel3 } from "./../../../../redux/auth/register";
import { useDispatch } from "react-redux";
import {
  regex_custom_pass,
  regex_just_persain,
} from "../../../../components/common/method/regex";

const isNull = (item) => {
  if (item !== "null") return item;
  return "";
};

const initialValues = {
  firstName: "",
  lastName: "",
  pass: "",
  confirmPass: "",
  user: "",
  gender: "",
};

export default function Index() {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const completeSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(regex_just_persain, "فقط حروف فارسی")
      .required("لطفا نام خود را وارد کنید"),
    lastName: Yup.string()
      .matches(regex_just_persain, "فقط حروف فارسی")
      .required("لطفا نام خانوادگی خود را وارد کنید"),

    pass: Yup.string()
      .matches(
        regex_custom_pass,
        "پسورد باید ۸ کاراکتر  شامل حروف کوچک و بزرگ انگلیسی و اعداد باشد"
      )
      .required("لطفا رمز عبور خود را وارد کنید"),
    confirmPass: Yup.string()
      .required("لطفا تکرار رمز عبور خود را وارد کنید")
      .when("pass", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("pass")],
          "رمز عبور و تکرار رمز عبور مطابقت نداشت"
        ),
      }),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: completeSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      setLoading(true);

      let preData = {
        first_name: isNull(values.firstName),
        last_name: isNull(values.lastName),
        national_id: isNull(state.national_id),
        user: isNull(state.national_id),
        phone: isNull(state.phone),
        email: isNull(state.email),
        gender: isNull(values.gender),
        pass_salt: isNull(values.pass),
        pass_hash: isNull(values.confirmPass),
        birth_date: null,
      };

      registerLevel3(preData)
        .then((res) => {
          let isOk = handleNotificationAlertTrySelect(res, dispatch);
          if (isOk) {
            push({
              pathname: "/authSignup/finish",
            });
          }
        })
 
        .catch(() => {
          handleNotificationAlertCatch(dispatch);
        })
        
        .finally(() => {
          setSubmitting(false);
          setLoading(false);
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
      <CompleteRegisterUi
        formik={formik}
        loading={loading}
        handlereturm={handlereturm}
      />
    </>
  );
}
