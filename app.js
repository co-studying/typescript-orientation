// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// DOM
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

function startApp () {
    axios.get(url)
        .then(function (resp) {
            var user = resp.data;
            // TODO: 이름, 이메일, 주소 표시하기
        })
        .catch(function (err) {
            console.log(err);
        })
}

startApp();