import React, { Component } from 'react';
import axios from 'axios';

class CSRFToken extends Component {
    state = { 
        csrftoken: ''
     } 

    getCookie = (name) => {
        let cookieValue = null;
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

    componentDidMount = () => {
        const fetchData = async () => {
            try{
                axios.get(`${process.env.REACT_APP_API_URL}/accounts/get_csrf`)
            } catch (err){

            }
        };
        
        console.log(this.getCookie('csrftoken'))
        fetchData();
        this.setState({csrftoken: this.getCookie('csrftoken')})
    }

    render() { 
        console.log(this.getCookie('csrftoken'))
        console.log(this.state.csrftoken)
        return (<input type="hidden" name="csrfmiddlewaretoken" value={this.state.csrftoken} />);
    }
}
 
export default CSRFToken;
