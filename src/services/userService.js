import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword});
};

const getAllUsers = (inputId) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}

const editUserService = (user) => {
    return axios.put('/api/edit-user', user)
}

// const getAllcodeService = (inputData) => {
//     return axios.get(`/api/allcode?type=${inputData}`)
// }

export { 
    handleLoginApi, getAllUsers, 
    createNewUserService, deleteUserService, 
    editUserService
    // getAllcodeService 
}; 