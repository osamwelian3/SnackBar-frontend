import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {} from '../node_modules/bootstrap/dist/css/bootstrap.css';
import {} from '../node_modules/bootstrap/dist/js/bootstrap.js';
import {} from './../node_modules/font-awesome/css/font-awesome.min.css';
import {} from './../node_modules/elegant-icons/style.css';
import {} from '../node_modules/jquery-nice-select/css/nice-select.css';
import {} from '../node_modules/jquery-ui/themes/base/all.css';
import {} from '../node_modules/owl.carousel2/dist/assets/owl.carousel.min.css';
import {} from '../node_modules/slicknav/dist/slicknav.min.css';
import './assets/css/style.css';
import $ from 'jquery';

import { error, info, defaultModules } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

window.onbeforeunload = function (e) {
  window.onunload = function () {
    localStorage.removeItem('true');
    localStorage.removeItem('false');
  }
  return undefined;
};

window.addEventListener('offline', function(){
  localStorage.removeItem('true');
  localStorage.setItem('false', 'Internet connection lost.');
  $('.notify').addClass('text-danger');
  $('.notify').removeClass('text-info');
  $('.notify').text(localStorage.getItem('false'))
  error({
    title: "Connection Lost",
    text:
      "You're currently offline. Turn on your internet to continue enjoying your experience on our site.",
    
  });
});

window.addEventListener('online', function(){
  localStorage.removeItem('false');
  localStorage.setItem('true', 'Internet Connection restored.');
  $('.notify').removeClass('text-danger');
  $('.notify').addClass('text-info');
  $('.notify').text(localStorage.getItem('true'))
  info({
    title: "Connection Restored",
    text:
      "Your internet connection has been restored",
    
  });
  setTimeout(() => {
    localStorage.removeItem('true');
    $('.notify').text('');
  }, 4000);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
