import ApiProvider from "utils/ApiProvider"

/**
 *  function for retreiving a paginated list of photos
 */
export const getPhotos = async (params = { limit: 12, page: 1}) => {
    try {
        const response = await ApiProvider.get('photos', { params })
        return response.data
    } catch (error) {
        throw error
    }
}
export const createPhoto = async (photo) => {
    try {
        const response = await ApiProvider.post('photo', photo)
        return response.data
    } catch (error) {
        throw error
    }
}
export const updatePhoto = async (photoId, photo) => {
    try {
        const response = await ApiProvider.put(`photo/${photoId}`, photo)
        return response.data
    } catch (error) {
        throw error
    }
}
export const deletePhoto = async (photoId) => {
    try {
        const response = await ApiProvider.delete(`photo/${photoId}`)
        return response.data
    } catch (error) {
        throw error
    }
}