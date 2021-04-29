import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToPost } from "../routes/cordinator";
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale";

const Posts = ({ posts, loading }) => {
  const history = useHistory();

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <CardPost key={post.id} onClick={() => goToPost(history, post.id)}>
            <p>Usuário: {post.username}</p>
            <p>Título: {post.title}</p>
            <p>Texto: {post.text}</p>
            Publicado: {post.createdAt && format(parseISO(new Date(post && post.createdAt).toISOString().slice(0,10)), 'd MMM yyyy', {
            locale: ptBR,
            })}
          </CardPost>
        );
      })}
    </>
  );
};

export default Posts;

const CardPost = styled.div`
  margin: 0 auto;
  width: 600px;
  overflow-y: auto;
  margin-bottom: 10px;
  cursor: pointer;
  background: #f7f7f7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
`;
