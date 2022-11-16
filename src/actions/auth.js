import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL, MESSAGE_SUCCESS, MESSAGE_FAIL } from "./types";
import Cookies from "js-cookie";
import { setCookie, setCsrfToken } from "../utils/utils";
import { loadUserProfile } from "./profile";
import $ from 'jquery';
import { error, info, defaultModules } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

export const checkAuthentication = () => async dispatch => {
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

    if(navigator.onLine){
        try{
            const res = await axiosInstance({url: `/accounts/get_auth_status/`, method: 'GET'});

            if (res.data.success){
                dispatch({
                    type: AUTHENTICATED_SUCCESS,
                    payload: {
                        authState: true,
                        username: res.data.username
                    }
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL,
                    payload: false
                });
            }
        } catch (err){
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            });
        }
    }
};

export const register = (username, email, password, password2) => async dispatch => {
    const reg = async () =>{
        const axiosInstance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true, // without this djang csrftoken header will fail
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        });

        const body = JSON.stringify({username, email, password, password2});

        if(navigator.onLine){
            try{
                const res = await axiosInstance({url:`/accounts/register/`, method: 'POST', data: body});

                if (res.data.error){
                    dispatch({
                        type: REGISTER_FAIL,
                        payload: res.data
                    });
                    return false;
                } else {
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: {'success': 'Account created successfuly. Log in to continue.'}
                    });
                    localStorage.setItem('accountCreated', true);
                    return true;
                }
            } catch (err){
                dispatch({
                    type: REGISTER_FAIL
                });
                $(".loader").fadeOut();
                $("#preloader").delay(200).fadeOut("slow");
                error({
                    title: "Log in fail",
                    text:
                      "Unable to create an account for some reason. Please check your internet connection and try again.",
                    
                });
            }
        } else {
            $(".loader").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
        }
    }


    console.log("CSRF Token: "+ Cookies.get('csrftoken'));
    console.log(Cookies.get('csrftoken') === undefined)
    if ((Cookies.get('csrftoken') === undefined) || (Cookies.get('csrftoken') === "") || (Cookies.get('csrftoken') === 'undefined')){
        let iterations = 0;
        let cookies = Cookies.get('csrftoken');
        let timerId = setInterval(() => {
            iterations++;
            const apiInstance = axios.create({
                baseURL: `${process.env.REACT_APP_API_URL}`,
                withCredentials: true,
                headers : {
                    'Accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.9,sw-TZ;q=0.8,sw;q=0.7',
                    'Cache-Control': 'max-age=0',
                    'Upgrade-Insecure-Requests': '1',
                },
            });
            const fetchData = async () => {
                try{
                    apiInstance({url: `/accounts/get_csrf`, method: 'GET'})
                    .then(({data}) => {
                        console.log("T: " + data.csrftoken)
                        try{
                            setCookie('csrftoken', data.csrftoken, new Date(new Date().setFullYear(new Date().getFullYear()+1)), '/')
                            // Cookies.set('csrftoken', data.csrftoken, {expires: new Date(new Date().setFullYear(new Date().getFullYear()+1))})
                        } catch(err){
                            setCookie('csrftoken', data.csrftoken, new Date().setFullYear(new Date().getFullYear()+1), '/', 'max_age')
                        }
                    })
                    // fetch(`${process.env.REACT_APP_API_URL}/accounts/get_csrf`)
                } catch (err){
    
                }
            };
            
            if(navigator.onLine){
                fetchData();
            }

            cookies = Cookies.get('csrftoken');
            console.log(iterations);
            if (cookies !== undefined){
                clearInterval(timerId);
                return reg();
            }
        }, 6000);
    } else {
        return reg();
    }
    console.log("CSRF Token: "+ Cookies.get('csrftoken'))
    
};

export const login = (username, password) => async dispatch => {
    const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    });

    const body = JSON.stringify({username, password});

    if(navigator.onLine){
        try{
            const res = await axiosInstance({url: `/accounts/login/`, method: 'POST', data: body});

            if (res.data.success){
                // Cookies.remove('csrftoken')
                // Cookies.set('csrftoken', res.data.csrftoken)
                // Cookies.set('sessionkey', res.data.sessionid)
                try{
                    setCookie('csrftoken', res.data.csrftoken, new Date(new Date().setFullYear(new Date().getFullYear()+1)), '/')
                    setCookie('sessionkey', res.data.sessionid, new Date(new Date().setSeconds(new Date().getSeconds()+(60*60*24*7*2))), '/')
                } catch(err){
                    setCookie('csrftoken', res.data.csrftoken, new Date().setFullYear(new Date().getFullYear()+1), '/', 'max_age')
                    setCookie('sessionkey', res.data.sessionid, new Date().setSeconds(new Date().getSeconds()+(60*60*24*7*2)), '/', 'max_age')
                }

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.username
                });

                // TODO: load user from profile
                const load = async () => {
                    await dispatch(loadUserProfile())
                }
                load();
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: res.data
                });
            }
        } catch (err){
            dispatch({
                type: LOGIN_FAIL
            });
            $(".loader").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
            error({
                title: "Log in fail",
                text:
                  "Unable to log in to your account. Please check your internet connection and try again.",
                
            });
        }
    } else {
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    }
};

export const socialLogin = (credential) => async dispatch => {
    const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    });

    const body = JSON.stringify(credential);

    if(navigator.onLine){
        try{
            let res = await axiosInstance({url: `/social/authenticate/`, method: 'POST', data: body});

            if (res.data.success){
                // Cookies.remove('csrftoken')
                // Cookies.set('csrftoken', res.data.csrftoken)
                // Cookies.set('sessionkey', res.data.sessionid)
                if (res.data.sessionid === null){
                    res = await axiosInstance({url: `/social/authenticate/`, method: 'POST', data: body});
                }
                try{
                    setCookie('csrftoken', res.data.csrftoken, new Date(new Date().setFullYear(new Date().getFullYear()+1)), '/')
                    setCookie('sessionkey', res.data.sessionid, new Date(new Date().setSeconds(new Date().getSeconds()+(60*60*24*7*2))), '/')
                } catch(err){
                    setCookie('csrftoken', res.data.csrftoken, new Date().setFullYear(new Date().getFullYear()+1), '/', 'max_age')
                    setCookie('sessionkey', res.data.sessionid, new Date().setSeconds(new Date().getSeconds()+(60*60*24*7*2)), '/', 'max_age')
                }

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.username
                });

                // TODO: load user from profile
                const load = async () => {
                    await dispatch(loadUserProfile())
                }
                load();
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: res.data
                });
            }
        } catch (err){
            dispatch({
                type: LOGIN_FAIL
            });
            $(".loader").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
            error({
                title: "Log in fail",
                text:
                  "Unable to log in to your account. Please check your internet connection and try again.",
                
            });
        }
    } else {
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    }
};

export const logout = () => async dispatch => {
    $('#root > #preloader').remove();
    $('#root').append(`
      <div id="preloader">
        <div class="loader"></div>
      </div>
    `);
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

    if(navigator.onLine){
        try{
            const res = await axiosInstance({url: `/accounts/logout/`, method: 'GET'});

            if (res.data.success){
                // Cookies.remove('csrftoken')
                Cookies.remove('sessionkey')
                dispatch({
                    type: LOGOUT_SUCCESS
                });
                $(".loader").fadeOut();
                $("#preloader").delay(200).fadeOut("slow");
            } else {
                dispatch({
                    type: LOGOUT_FAIL
                });
                $(".loader").fadeOut();
                $("#preloader").delay(200).fadeOut("slow");
            }
        } catch (err){
            dispatch({
                type: LOGOUT_FAIL
            });
            $(".loader").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
        }
    } else {
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
        error({
            title: "Connection Lost",
            text:
              "Unable to log you out. Please connect to the internet and try again.",
            
        });
    }
};

export const updateError = (error) => async dispatch => {
    try{
        dispatch({
            type: MESSAGE_FAIL,
            payload: error
        })
    } catch (err) {
        dispatch({
            type: MESSAGE_FAIL
        })
    }
}

export const updateSuccess = (success) => async dispatch => {
    try{
        dispatch({
            type: MESSAGE_SUCCESS,
            payload: success
        })
    } catch (err) {
        dispatch({
            type: MESSAGE_FAIL
        })
    }
}
