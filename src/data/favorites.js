import ApiProvider from "utils/ApiProvider";

export const addFavorite = async (photoId = undefined) => {
    if(!photoId) throw '`photoId` was not defined' 
    try{
        const response = await ApiProvider.post(`photo/${photoId}/favorite`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const removeFavorite = async (photoId = undefined) => {
    if(!photoId) throw '`photoId` was not defined' 
    try{
        const response = await ApiProvider.delete(`photo/${photoId}/favorite`)
        return response.data
    } catch (error) {
        throw error
    }
}

// function addFavorite() {
//     ApiProvider.delete(`/favorite/${photo.id}`)
//     .then((response) => {
//         console.log(response.data)
//     });
//   }