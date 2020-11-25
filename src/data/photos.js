import ApiProvider from "utils/ApiProvider"

/**
 *  function for retreiving a paginated list of photos
 */
export const getPhotos = async (params = { limit: 12, page: 1}) => {
    try {
        console.info({params})
        const response = await ApiProvider.get('photos', { params })
        return response.data
    } catch (error) {
        throw error
    }
}
export const createPhoto = async (photo) => {
    try {
        const response = ApiProvider.post('photo', {photo})
        return response.data
    } catch (error) {
        throw error
    }
}
export const updatePhoto = async (photoId, photo) => {
    try {
        const response = ApiProvider.put(`photo/${photoId}`, photo)
        return response.data
    } catch (error) {
        throw error
    }
}
export const deletePhotos = async (photoId) => {
    try {
        const response = ApiProvider.delete(`photo/${photoId}`)
        return response.data
    } catch (error) {
        throw error
    }
}