import AxiosCustom from "../../../components/common/components/apiConfig"

export function getCaptch() {
    let config = {
      url: "login"
    }
  
    let data = {
      table: "clubmember",
      method_type: "get_captcha",
      token: null,
      member_id: null,
      data: {}
    }
  
    return AxiosCustom(config, data)
  }

  export function captchValidation(captcha_id, captcha_value) {
    let config = {
      url: "login"
    }
  
    let data = {
      table: "clubmember",
      method_type: "get_captcha_validation",
      token: null,
      member_id: null,
      data: {
        captcha_id,
        captcha_value
      }
    }
  
    return AxiosCustom(config, data)
  }