import {SERVER_URL} from "../../consts";

export const getHouses = async () => {
    const res = await fetch(`${SERVER_URL}/houses`)
    const data = await res.json()
    return data
}