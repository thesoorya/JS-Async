// const pro = new Promise((resolve, reject) => {
//     fetch("https://dummyjson.com/products/1")
//         .then((response) => {
//             if (!response.ok) {
//                 reject("Error fetching data");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             resolve(data);
//         })
//         .catch((error) => {
//             reject(error);
//         });
// });

// pro.then((data) => {
//     console.log(data);
// })
//     .catch((error) => {
//         console.log(error);

//     })

// promises with setTimeout

// function delayedTask(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Hello everyone')
//         }, 3000)
//     })
// }

// delayedTask().then((response) => {
//     console.log(response)
// })

// chained promises

// function chainedMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('first message after 2 seconds')
//         }, 2000);
//     })
// }

// chainedMessage().then((data1) => {
//     console.log(data1);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('second message after 3 seconds');
//         }, 3000);
//     })
// })
//     .then((data2) => {
//         console.log(data2)
//     })

// send message

// function sendMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('first message after 1s');
//             resolve('data from first message');
//         }, 1000);
//     });
// }

// sendMessage()
//     .then((data) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('second message after 2s');
//                 resolve(data);
//             }, 2000);
//         });
//     })
//     .then((data) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(data);
//                 console.log('third message after 2 more seconds');
//                 resolve('All messages logged');
//             }, 2000);
//         });
//     })
//     .then((finalMessage) => {
//         console.log(finalMessage);
//     });

// auth

// function regUser(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('reg. in process')
//             resolve(username)
//         }, 1000);
//     });
// }
// function sendEmail(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('sending email to', username)
//             resolve(username)
//         }, 2000);
//     });
// }

// const user = 'soorya'

// regUser(user)
//     .then((username) => {
//         console.log('reg. success', username)
//         return sendEmail(username)
//     })
//     .then((username) => {
//         console.log('email sent to, ', username)
//     })