import {SERVER_URL} from "../../consts";

export const getHouses = async () => {
    const res = await fetch(`${SERVER_URL}/houses`)
    const data = await res.json()
    return data
}
export const createNewHouse = async (data) => {
    const response = await fetch(`${SERVER_URL}/houses`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json()
    return result
}
export const editHouse = async (data, id) => {
    const response = await fetch(`${SERVER_URL}/houses/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}

export const deleteHouse = async (id) => {
    await fetch(`${SERVER_URL}/houses/${id}`, {
        method: 'DELETE',
    });
    return id
}