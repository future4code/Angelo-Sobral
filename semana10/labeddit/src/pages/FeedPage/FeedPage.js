import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { goToPost } from "../../routes/cordinator";
import { baseURL } from "../../utils/urls";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [form, onChange] = useForm({text: '', title:''})

  const token = window.localStorage.getItem("token");

  const headers = {
    headers: { Authorization: token },
  };

  useEffect(() => {
    token && axios.get(`${baseURL}/posts`, headers)
    .then(res => setPosts(res.data.posts))
    .catch(err => console.log(err));
  }, [token]);

  const createPost = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${baseURL}/posts`, form, headers)
      goToPost()
      alert('Post criado com sucesso!')
    }
    catch (err) {
        alert('Algo inesperado aconteceu, por favor, tente novamente mais tarde!')
        console.log(err)
    }
  }

  return (
    <div>
      {token ? (
        posts.length > 0 ? (
          <>
            <h1>Feed Page</h1>

            <form onSubmit={createPost}>
              <input name='title' onChange={onChange} value={form.title} placeholder="Título do post" />
              <textarea name='text' onChange={onChange} value={form.text} placeholder="Escreva seu post" />
              <button>Post</button>
            </form>

            <p>Título: {posts.length && posts[0].title}</p>
            <p>Texto: {posts.length && posts[0].text}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )
      ) : (
        <p>
          Você precisa está logado para acessar esta página. Faça seu login
          clicando <a href="/">aqui.</a>
        </p>
      )}
    </div>
  );
};

export default FeedPage;
