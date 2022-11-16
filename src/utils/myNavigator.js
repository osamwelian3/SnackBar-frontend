// const checkOnlineStatus = async () => {
//     try {
//       const online = await fetch("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css");
//       return online.status >= 200 && online.status < 300; // either true or false
//     } catch (err) {
//       return false; // definitely offline
//     }
//   };

// export const myNavigator = {
//     onLine: () => {
//         let r;
//         setInterval(async () => {
//             const result = await checkOnlineStatus();
//             r = result;
//         }, 3000);
//         return r;
//     }
// }

// const onlineEvent = new CustomEvent("custom:online", {
//     bubbles: true,
//     cancelable: true,
//     composed: true,
//     detail: {
//       offline: 'online',
//     },
// })
// setInterval(() => {
//     const status = myNavigator.onLine()

//     if(status === true){
//         window.dispatchEvent(onlineEvent);
//     }
// }, 3000);

// const offlineEvent = new CustomEvent("custom:offline", {
//     bubbles: true,
//     cancelable: true,
//     composed: true,
//     detail: {
//       offline: 'offline',
//     },
// })
// setInterval(() => {
//     const status = myNavigator.onLine()

//     if(status === false){
//         window.dispatchEvent(offlineEvent);
//     }
// }, 3000);

// function ajax(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
//     xhr.onload = () => {
//         if(xhr.status === 200 && xhr.status < 300){
//             // online
//             console.log('online');
//         } else { // not online or getting some error
//             console.log('offline on status code')
//         }
//     }
//     xhr.onerror = () => { // incorrect url, 404 or some other error
//         console.log('still offline');
//     }
//     xhr.send();
// }

// setInterval(() => {
//     ajax();
// }, 100);


