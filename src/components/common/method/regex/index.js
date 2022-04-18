
export const regx_phone =/^(0|0098|\+98|98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/ //eslint-disable-line  no-useless-escape
export const regx_password =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;//eslint-disable-line  no-useless-escape
export const regex_custom_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z\u06F0-\u06F9\s0-9\-_.+*&%!$@#^])(.{8,})$/g;
export const regex_just_persain = /^[\u0600-\u06FF,\u0590-\u05FF\s]*$/g;
export const regex_email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ //eslint-disable-line 