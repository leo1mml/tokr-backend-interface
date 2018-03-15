

export const createDateFromStringBR = (string) => {
    if(!string){
        return
    }
    let dateComponents = string.split('/')
    let day = dateComponents[0]
    let month = dateComponents[1] - 1
    let year = dateComponents[2]
    let date = new Date(year, month, day).toISOString()
    return date
}

export const createStringFromDateBR = (date) => {
    if(!date){
        return
    }
    var dateAux = new Date(date)
    let day = dateAux.getDate()
    let year = dateAux.getFullYear()
    let month = dateAux.getMonth() + 1
    if(day.toString().length === 1){
        day = '0' + day
    }
    if(month.toString().length === 1){
        month = '0' + month
    }
    var str = `${day}/${month}/${year}`
    return str
}