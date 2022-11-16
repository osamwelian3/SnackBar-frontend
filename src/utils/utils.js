import axios from "axios";

export function setCookie(key, value, expires, path, max_age=null) {
    if (max_age === null){
        window.document.cookie = `${key}=${value} ; expires=${expires}; path=${path}; samesite=Lax; Secure`;
    } else {
        window.document.cookie = `${key}=${value} ; max_age=${expires}; path=${path}; samesite=Lax; Secure`;
    }
}

export const getCookie = (name) => {
    let cookieValue = "";
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log('fcalled')
    return cookieValue;
}

export function setCsrfToken(){
    if (0===0){
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
        
        console.log(this.getCookie('csrftoken'))
        fetchData();
        if (this.state.csrftoken !== this.getCookie('csrftoken')){
            this.setState({csrftoken: this.getCookie('csrftoken')})
        }
    }
}
