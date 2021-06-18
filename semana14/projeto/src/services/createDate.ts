export const createDate = () => {
    const date = new Date().toISOString().slice(0,10)
    return date as string
}

export const convertLocaleDate = (date:any):string => {
    return date.toISOString().slice(0,10).split("-").reverse().join("/") as string
}