import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/urls";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale";

const PostPage = () => {
  const [post, setPost] = useState({});
  const [form, onChange, resetForm] = useForm({text: ''})

  const params = useParams();

  const token = window.localStorage.getItem("token");

  const headers = {
    headers: { Authorization: token },
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/posts/${params.id}`, headers)
      .then((res) => setPost(res.data.post))
      .catch((err) => console.log(err));
  }, []);

  const creatComment = async (e) => {
    e.preventDefault()
    try {
        await axios.post(`${baseURL}/posts/${params.id}/comment`, form, headers)
        resetForm()
        alert('Comentário gerado com sucesso!')
    }
    catch(err) {
        alert('Nossos servidores estão passando por manutenção, tente novamente mias tarde!')
        console.log(err)
    }
  }

  return (
    <div>
      <h1>Post Page</h1>
      <CardPost>
        <p>Postado por: {post.username}</p>
        <p>Título: {post.title}</p>
        <p>Texto: {post.text}</p>
        <p>Comentários: {post.commentsCount}</p>
      </CardPost>
      <form onSubmit={creatComment}>
          <p>Deixe um comentário:</p>
          <textarea name='text' onChange={onChange} value={form.text} placeholder="Escreva seu comentário..." />
          <button>Comentar</button>
      </form>
      <div>
          <p>Comentários:</p>
          {post.comments.length && post.comments.map(post => {
              return (
               <>
               <p>Postado por: {post.username}</p>
               <p>Postado por: {post.text}</p>
               </>)
          })}
      </div>

    </div>
  );
};

export default PostPage;

const CardPost = styled.div`
  border: 2px solid black;
  margin: 5px;
`
