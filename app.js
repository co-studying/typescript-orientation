// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// DOM
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 * @property {string} zipcode
 */ 

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */ 
function fetchUser () {
    return axios.get(url);
}

function startApp () {
    fetchUser()
        .then(function (resp) {
            var user = resp.data;
            // TODO: 이름, 이메일, 주소 표시하기
            username.innerText = user.name;
            email.innerText = user.email;
            address.innerText = user.address.street;
        })
        .catch(function (err) {
            console.log(err);
        })
}

startApp();