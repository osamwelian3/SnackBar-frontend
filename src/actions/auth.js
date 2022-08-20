import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import Cookies from "js-cookie";

export const register = (username, email, password, password2) => async dispatch => {
    console.log('trying in register')
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({username, email, password, password2});

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register/`, body, config);

        if (res.data.error){
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            });
        }
    } catch (err){
        dispatch({
            type: REGISTER_FAIL
        });
    }
};
