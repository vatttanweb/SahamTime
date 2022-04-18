import axiosCustom from "../../../components/common/components/apiConfig";

export function forgetPasswordAction(item) {
    let config = {
      url: "login"
    }
  
  
    let data = {
      method_type: "forgot_password_link",
      data: {
        ...item
      }
    }
  
  
    return axiosCustom(config, data)
  }
  