
import AxiosCustom from "./../../../components/common/components/apiConfig";

export async function login(national_id, password) {
  
  let config = {
    url: "login",
  };

  let data = {
    table: "login",
    method_type: "login",
    token: null,
    member_id: null,
    data: {
      user: national_id,
      pass: password,
    },
  };
  

    return await AxiosCustom(config, data);

}

