import actionTypes from './actionTypes';
import { getAllcodeService } from '../../services/userService';

export const fetchGenderStart = () => {
    return async (dispatch) => {
        try{
            let res = await getAllcodeService('GENDER');
            if(res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }
        }catch (e) {
            dispatch(fetchGenderFaild())
            console.log(e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaild = () => ({
    type: actionTypes.FETCH_GENDER_FAILD
})