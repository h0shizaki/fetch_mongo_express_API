const API_URL = 'http://localhost:3000/'

const submit = document.querySelector('#submit');

submit.addEventListener('click' , ()=>{
    const memId = document.querySelector('#id').value ;
    const memFname = document.querySelector('#fname').value ;
    const memLname = document.querySelector('#lname').value ;
    const memLevel = document.querySelector('#level').value ;

    const data = JSON.stringify({
        'id' : memId,
        'first_name' : memFname,
        'last_name' : memLname,
        'level' : memLevel
    })

    console.log(data);
    postData(data)
})

async function postData(data){
    await fetch(API_URL+'add', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: data
    })
    .then(result=>console.log(result))
    window.location.href = 'index.html'
}