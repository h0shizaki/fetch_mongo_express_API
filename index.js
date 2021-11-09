const API_URL = 'http://localhost:3000/'

function getData(){
    fetch(API_URL+'')
    .then(res => res.json())
    .then(data =>{
        console.log(data[0])

    });

}
getData()