const API_URL = 'http://localhost:3000/' ;

const string_url = window.location.href ;
const url = new URL(string_url);
const id = url.searchParams.get('id');

const inputId = document.querySelector('#id')
const inputFname = document.querySelector('#fname')
const inputLname = document.querySelector('#lname')
const inputLevel = document.querySelector('#level')

loadData(id)

async function loadData(id){
    console.log(id)
    await fetch(API_URL+id, {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        bodys: JSON.stringify({'id' : id})
    })
    .then(result =>result.json())
    .then(data=>{
        inputId.value = id
        inputFname.value = data['first_name']
        inputLname.value = data['last_name']
        inputLevel.value = data['level']
    })
}

const submit = document.querySelector('#submit')

submit.addEventListener('click', ()=>{
    const memId = inputId.value;
    const memFname = inputFname.value;
    const memLname = inputLname.value;
    const memLevel = inputLevel.value;

    const data = JSON.stringify({
        'id': memId,
        'first_name' : memFname,
        'last_name' : memLname,
        'level': memLevel
    })

    console.log(data)
    putData(data);
})

async function putData(data){
    await fetch(API_URL+'edit/' , {
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        body: data
    })
    .then(res=>console.log(res))

    window.location.href = 'index.html'
}