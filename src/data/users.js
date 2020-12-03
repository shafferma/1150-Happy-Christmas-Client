import ApiProvider from "utils/ApiProvider"

/**
 *  function for retreiving a paginated list of users
 */
export const getUsers = async (params = { limit: 12, page: 1}) => {
    try {
        console.info({params})
        const response = await ApiProvider.get('users', { params })
        return response.data
    } catch (error) {
        throw error
    }
}
export const updateUser = async (userId, user) => {
    try {
        const response = await ApiProvider.put(`user/${userId}`, user)
        return response.data
    } catch (error) {
        throw error
    }
}
export const deleteUser = async (username) => {
    try {
        const response = await ApiProvider.delete(`user/${username}`)
        return response.data
    } catch (error) {
        throw error
    }
}