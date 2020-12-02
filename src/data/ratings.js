import ApiProvider from "utils/ApiProvider";

export const addRating = async (photoId = undefined) => {
    if(!photoId) throw '`photoId` was not defined' 
    try{
        const response = await ApiProvider.post(`photo/${photoId}/rating`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const removeRating = async (photoId = undefined) => {
    if(!photoId) throw '`photoId` was not defined' 
    try{
        const response = await ApiProvider.delete(`photo/${photoId}/rating`)
        return response.data
    } catch (error) {
        throw error
    }
}
