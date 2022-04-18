import React, { useEffect, useState } from "react";
import SignupCard from "./components/signupCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerLevel1 } from "../../../../redux/auth/register";
import { useHistory } from "react-router-dom";
import { regx_phone } from "../../../../components/common/method/regex";
import { getCaptch, captchValidation } from "../../../../redux/auth/chaptcha";
import { useDispatch } from "react-redux";
import {
  handleNotificationAlertTrySelect,
  handleNotificationAlertCatch,
} from "../../../../components/common/method/handleNotificationAlert";
import { actionTypes as actionTypesNotif } from "../../../../redux/notificationAlert";
import { Backdrop, Fade, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModalContent from "./components/modalContent";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default function Index() {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [srcCaptcha, setsrcCaptcha] = useState({ src: "", id: "" });

  const initialValues = {
    nationalCode: "",
    mobile: "",
    captcha: "",
    email: "",
    terms: false,
  };

  useEffect(() => {
    getCaptchMehtod();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getCaptchMehtod = () => {
    getCaptch()
      .then((res) => {
        if (res.data?.response?.is_successful) {
          return setsrcCaptcha({
            src: `data:image/gif;base64,${res.data.response.data.img}`,
            id: res.data.response.data._id,
          });
        }
        dispatch({
          type: actionTypesNotif.error,
          textAlert: "در دریافت کد امنیتی مشکلی به وجود آمده است",
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypesNotif.error,
          textAlert: "در دریافت کد امنیتی مشکلی به وجود آمده است",
        });
      });
  };

  const RegistrationSchema = Yup.object().shape({
    nationalCode: Yup.string()
      .min(10, "کدملی را به درستی وارد نمایید")
      .max(11, "کدملی را به درستی وارد نمایید")
      .required("لطفا کد ملی خود را وارد کنید"),
    mobile: Yup.string()
      .matches(regx_phone, "شماره تلفن را به درستی وارد نمایید")
      .required("لطفا شماره تماس خود را وارد کنید"),
    email: Yup.string()
      .email("ایمیل را به درستی وارد نمایید")
      .min(3, "حداقل 3 کاراکتر")
      .max(50, "حداکثر 50 کاراکتر"),
    terms: Yup.boolean().oneOf([true], "پذیرش قوانین اجباری میباشد"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      // setStatus(false)
      setLoading(true);
      captchValidation(srcCaptcha.id, values.captcha).then((res) => {
        if (res.data?.response?.data.check) {
          apiCallRegister();
        } else {
          getCaptchMehtod();
          values.captcha = "";
          dispatch({
            type: actionTypesNotif.warning,
            textAlert: "کد امنیتی را اشتباه وارد کرده اید.",
          });
          setLoading(false);
        }
      });
      const apiCallRegister = () => {
        setSubmitting(true);
        let preData = {
          nationalCode: values.nationalCode,
          identifierCode: null,
          mobile: values.mobile,
          email: values.email ? values.email : null,
          isIndividual: "TRUE",
        };
        registerLevel1(
          preData.nationalCode,
          preData.mobile,
          preData.email,
          preData.identifierCode,
          preData.isIndividual
        )
          .then((res) => {
            let isOk = handleNotificationAlertTrySelect(res, dispatch);
            if (isOk) {
              push({
                pathname: "/authSignup/otp",
                state: {
                  nationalCode: values.nationalCode,
                  mobile: values.mobile,
                  email: values.email === "" ? null : values.email,
                },
              });
            }
          })

          .catch(() => {
            handleNotificationAlertCatch(dispatch);
            getCaptchMehtod();
          })
          .finally(() => {
            setSubmitting(false);
            setLoading(false);
          });
      };
    },
  });

  return (
    <>
      <SignupCard
        formik={formik}
        loading={loading}
        srcCaptcha={srcCaptcha}
        getCaptchMehtod={getCaptchMehtod}
        handleOpen={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <ModalContent handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </>
  );
}
