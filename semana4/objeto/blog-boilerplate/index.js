// const arrayPost = [] não vi necessidade de usar array da forma que fiz

function addPost() {

let titlePost = document.getElementById('titulo-post').value
let authorPost = document.getElementById('autor-post').value
let contentPost = document.getElementById('conteudo-post').value
let localPost = document.getElementById('container-de-posts')

const post = {
    title: titlePost,
    author: authorPost,
    comment: contentPost
}

// arrayPost.push(post)

localPost.innerHTML += `<div class="comment-post-top"> Título: ${post.title} </div>`
localPost.innerHTML += `<div> Autor: ${post.author} </div>`
localPost.innerHTML += `<div class="comment-post-bottom"> Comentário: ${post.comment} </div>`

document.getElementById('titulo-post').value = ''
document.getElementById('autor-post').value = ''
document.getElementById('conteudo-post').value = ''
}


