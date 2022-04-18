import React, { useState } from 'react';
import Login from './components/cardLogin';
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from './../../../redux/auth/login/index';
import { useHistory } from "react-router-dom";
import { setLocalStorageLogin } from './components/localstorage';
import auth from '../../../redux/auth/login/auth';


export default function Index() {

  const history = useHistory();
  const [loading, setLoading] = useState(false);


  const initialValues = {
    userName: "",
    password: "",
  };

  const LoginSchema = Yup.object().shape({
    userName:
      Yup.string()
        .required('فیلد مورد نظر را پر نمایید'),
    password:
      Yup.string()
        .required('فیلد مورد نظر را پر نمایید'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {

      setSubmitting(true)
      setLoading(true);

      login(values.userName, values.password)
        .then((res) => {

          if (!Object.keys(res.data.response.data).length) {
            setStatus(true)
            return;
          }

          let data = {
            authenticated: true,
            value: res.data.response.data,
            timestamp: 1000 * 60 * 60 * 12,//12 hours
          }

          setLocalStorageLogin(
            "persist:root",
            data,
            () => {
              auth.login(
                () => history.push("/dashboard")
              )
            })
          setStatus(false)
        })
        .catch(() => {
          alert("در ارتباط با سرور مشکلی پیش آمده");
        })
        .finally(() => {
          setSubmitting(false);
          setLoading(false);
        });

    },

  })

  return (
    <>
      <Login
        loading={loading}
        formik={formik}
      />
    </>
  );
}
