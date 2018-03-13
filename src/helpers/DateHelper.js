

export const createDateFromStringBR = (string) => {
    let dateComponents = string.split('/')
    let day = dateComponents[0]
    let month = dateComponents[1]
    let year = dateComponents[2]

    return new Date(year, month, day)
}

export const createStringFromDateBR = (date) => {
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()
    return `${day}/${month + 1}/${year}`
}