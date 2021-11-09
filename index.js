const API_URL = 'http://localhost:3000/'

function getData(){
    fetch(API_URL+'')
    .then(res => res.json())
    .then(data =>{
        const members = data;
        let trData=''

        members.forEach( member=>{
            trData += '<tr>';
            trData += `<td>${member['id']}</td>`
            trData += `<td>${member['first_name']}</td>`
            trData += `<td>${member['last_name']}</td>`
            trData += `<td>${member['level']}</td>`
            trData += `<td><a class ='btn btn-warning' href='editMem.html?id=${member['id']}'>Edit</a></td>`
            trData += `<td><button class='btn btn-danger' onclick='delData(${member['id']})'>Delete</button></td>`
        })

        document.querySelector('#myTable').innerHTML = trData;

    });

}
getData()

async function delData(id){
    console.log(id)
    let confirmDel = confirm('Want to delete? Are you sure?')

    if(confirmDel){
        await fetch(API_URL+'delete' , {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({'id': id})
        } )
    
    getData()

    }
}