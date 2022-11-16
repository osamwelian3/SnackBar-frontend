import axios from "axios";
import { LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL } from "./types";
import Cookies from "js-cookie";



export const loadUserProfile = () => async dispatch => {
    const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-SessionID': Cookies.get('sessionkey'),
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    });

    try{
        const res = await axiosInstance({url: `/profile/view_profile/`, method: 'GET'});

        if (res.data.data){
            dispatch({
                type: LOAD_PROFILE_SUCCESS,
                payload: res.data.data
            });
        } else if (res.data.detail) {
            dispatch({
                type: LOAD_PROFILE_FAIL,
                payload: res.data.detail
            });
        }
    } catch (err){
        console.log('LOAD_PROFILE_FAIL: ' + err)
        dispatch({
            type: LOAD_PROFILE_FAIL
        });
    }
};

export const updateUserProfile = (first_name, last_name, other_name, email, phone, city) => async dispatch => {
    const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-SessionID': Cookies.get('sessionkey'),
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    });

    const body = JSON.stringify({first_name, last_name, other_name, email, phone, city});

    try{
        const res = await axiosInstance({url: `/profile/update_profile/`, method: 'POST', data: body});

        if (res.data.success){
            dispatch({
                type: UPDATE_PROFILE_SUCCESS
            });
            dispatch(loadUserProfile())
        } else if (res.data.detail) {
            dispatch({
                type: UPDATE_PROFILE_FAIL,
                payload: res.data.detail
            });
        }
    } catch (err){
        dispatch({
            type: UPDATE_PROFILE_FAIL
        });
    }
};

