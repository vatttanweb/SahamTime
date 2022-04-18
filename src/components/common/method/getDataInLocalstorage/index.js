
export const getDataInLocalstorage = (key) => {

    if (!JSON.parse(localStorage.getItem('persist:root')).value) {
        return null
    }

    let { value } = JSON.parse(localStorage.getItem('persist:root'))
    let userPars = value

    return userPars[key]
}



