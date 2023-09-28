import {SERVER_URL} from "../../consts";

export const getHomes = async () => {
    const res = await fetch(`${SERVER_URL}/homes`)
    const data = await res.json()
    return data
}