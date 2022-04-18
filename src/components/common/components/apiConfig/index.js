import axios from "axios";


const AxiosCustom = (_config, _data) => {

    let userLocal = localStorage.getItem('persist:root') ? JSON.parse(localStorage.getItem('persist:root')).value : null

    let { token, member_id } = userLocal ? userLocal
        : { token: null, member_id: null }

    let config = {
        baseURL: getUrl(),
        method: "POST",
        headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" },
        ..._config,
        data: {
            api_key: "d025488f-8ec6-4434-afbe-b6a5343815a7",
            token: token,
            member_id: member_id,
            ..._data
        }
    }
    return axios(config);
};


export function getUrl() {

    let protocol = window.location.protocol
    let hostName = window.location.hostname

    if (!protocol || !hostName || hostName === 'localhost') {
        return "http://192.168.231.65:7001/GradDB/V1/"
    }

    return `${protocol}//${hostName}/GradDB/V1/`

}

export default AxiosCustom;

