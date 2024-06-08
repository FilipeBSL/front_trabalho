import fetch from 'node-fetch'
import axios from 'axios'


async function buscaUser() {
    const response = await fetch('http://localhost:3001/user',{
        method: "GET",
        headers: {"Content-Type":"application-json"} 
    })
    const dados = await response.json()
    console.log(dados)
}

async function mostraUser() {
    const response = await fetch('http://localhost:3001/user',{
        method: "POST",
        headers: {"Content-Type":"application-json"} 
    })
    const dados = await response.json()
    console.log(dados)
}
/* METODOS DELETE E ALTERAR PRECISAM DE UM ID
async function deleteUser() {
    const response = await fetch(`http://localhost:3001/user`,{
        method: "DELETE",
        headers: {"Content-Type":"application-json"} 
    })
    const dados = await response.json()
    console.log(dados)
}

async function alterarUser() {
    const response = await fetch(`http://localhost:3001/user`,{
        method: "PUT",
        headers: {"Content-Type":"application-json"} 
    })
    const dados = await response.json()
    console.log(dados)
}
*/

buscaUser()

mostraUser()
/*
deleteUser()
alterarUser()
*/