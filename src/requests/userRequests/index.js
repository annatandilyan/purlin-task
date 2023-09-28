import {SERVER_URL} from "../../consts/index";

export const addNewUser = async (data) => {
    const response = await fetch(`${SERVER_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await response.json()
    return result.id
}
export const getLoggedInUser = async ({login, password}) => {
    const res = await fetch(`${SERVER_URL}/users?login_like=${login}&password_like=${password}`)
    const data = await res.json()
    return data[0].id
}