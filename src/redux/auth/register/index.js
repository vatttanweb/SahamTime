import AxiosCustom from "./../../../components/common/components/apiConfig";

export function registerLevel1(national_id, phone, email, introducing_member_national_id, is_individual) {
    let config = {
      url: "insert_request"
    }
  
    let otherData = {
      "first_name": null,
      "last_name": null,
      "permission_level": null,
      "automation_id": null,
      "gender": null,
      "introducing_member_id": null,
      "introducing_member_automation_id": null,
      "category": null,
      "user": null,
      "pass_salt": null,
      "pass_hash": null,
      "bourse_code": null,
      "energy_bourse_code": null,
      "kala_bourse_code": null,
      "ati_bourse_code": null,
      "available_bonus": null,
      "reserved_bonus": null,
      "registration_date": null,
      "profile_picture": null,
      "automation_club_id": null,
      "introducing_member_automation_club_id": null,
      "is_active": null,
      "birth_date": null,
      "permitted_methods" :null,
    }
  
    let data = {
      table: "clubmember",
      method_type: "register",
      data: {
        national_id,
        phone,
        email,
        introducing_member_national_id: introducing_member_national_id ? introducing_member_national_id : null,
        is_individual,
        ...otherData
      },
      token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
      member_id: "_0zehXYBdxxYGfkX5_wd",
  
    }

    return AxiosCustom(config, data)
  }

  export function registerLevel2(res) {
    let config = {
      url: "update_request"
    }
  
  
    let data = {
      table: "clubmember",
      method_type: "confirm_registration",
      data: {
        national_id:res.national_id,
        confirmation_token:res.confirmation_token,
      },
      
        token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
        member_id: "_0zehXYBdxxYGfkX5_wd",
      
    }
  
    return AxiosCustom(config, data)
    // return axios.post(REGISTER_URL, { email, fullname, username, password });
  }
  
  export function registerLevel3(newData) {
    let config = {
      url: "update_request"
    }
  
    let otherData = {
      "profile_picture": null,
      "birth_date": null,
      "permission_level": null,
      "automation_id": null,
      "is_individual": null,
      "introducing_member_id": null,
      "introducing_member_national_id": null,
      "introducing_member_automation_id": null,
      "category": null,
      "bourse_code": null,
      "energy_bourse_code": null,
      "kala_bourse_code": null,
      "ati_bourse_code": null,
      "available_bonus": null,
      "reserved_bonus": null,
      "registration_date": null,
      "automation_club_id": null,
      "introducing_member_automation_club_id": null,
      "is_active": null,
      "account-code": null,
      "permitted_methods" :null,
    }
  
  
    let data = {
      table: "clubmember",
      method_type: "finalize_registration",
      data: {
        ...otherData,
        ...newData ,
      },
      token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
      member_id: "_0zehXYBdxxYGfkX5_wd",
    }
  
  
    return AxiosCustom(config, data)
    // return axios.post(REGISTER_URL, { email, fullname, username, password });
  }