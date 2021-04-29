import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/urls";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Chat from "../../assets/images/chat.svg";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { goToLogin } from "../../routes/cordinator";

const PostPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    !token && goToLogin(history)
  }, [history])

  const [post, setPost] = useState({});
  const [form, onChange, resetForm] = useForm({ text: "" });
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const token = window.localStorage.getItem("token");

  const headers = {
    headers: { Authorization: token },
  };

  const getPostDetail = (id) => {
    setLoading(true);
    axios
      .get(`${baseURL}/posts/${id}`, headers)
      .then((res) => {
        setLoading(false);
        setPost(res.data.post);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPostDetail(params.id);
  }, []);

  const creatComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/posts/${params.id}/comment`, form, headers);
      resetForm();
      getPostDetail(params.id);
      alert("Comentário gerado com sucesso!");
    } catch (err) {
      alert(
        "Nossos servidores estão passando por manutenção, tente novamente mias tarde!"
      );
      console.log(err);
    }
  };

  const upVote = async (id) => {
    const body = {
      direction: 1,
    };
    try {
      await axios.put(`${baseURL}/posts/${id}/vote`, body, headers);
      getPostDetail(params.id);
    } catch (err) {
      console.log(err);
    }
  };

  const downVote = async (id) => {
    const body = {
      direction: -1,
    };
    try {
      await axios.put(`${baseURL}/posts/${id}/vote`, body, headers);
      getPostDetail(params.id);
    } catch (err) {
      console.log(err);
    }
  };

  const upVoteComment = async (id, commentId) => {
    const body = {
      direction: 1,
    };
    try {
      await axios.put(`${baseURL}/posts/${id}/comment/${commentId}/vote`, body, headers);
      getPostDetail(params.id);
    } catch (err) {
      console.log(err);
    }
  };

  const downVoteComment = async (id, commentId) => {
    const body = {
      direction: -1,
    };
    try {
      await axios.put(`${baseURL}/posts/${id}/comment/${commentId}/vote`, body, headers);
      getPostDetail(params.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Post Page</h1>
      <CardPost>
        {!loading ? (
          <>
            <p>
              Votos do post:
              <Span onClick={() => upVote(params.id)}> + </Span>{" "}
              {post.votesCount}
              <Span onClick={() => downVote(params.id)}> - </Span>
            </p>
            <p>Postado por: {post.username}</p>
            <p>Título: {post.title}</p>
            <p>Texto: {post.text}</p>
            <p>
              Publicado:{" "}
              {post.createdAt &&
                format(
                  parseISO(
                    new Date(post && post.createdAt).toISOString().slice(0, 10)), "d MMM yyyy", {
                    locale: ptBR,
                  }
                )}
            </p>
            <p>
              {post.commentsCount} <ImgComment src={Chat} />{" "}
              {post.comments && post.comments.length > 1
                ? "Comentários"
                : "Comentário"}
            </p>
          </>
        ) : (
          <h2>Carregando...</h2>
        )}
      </CardPost>
      <form onSubmit={creatComment}>
        <p>Deixe um comentário:</p>
        <textarea
          name="text"
          onChange={onChange}
          value={form.text}
          placeholder="Escreva seu comentário..."
        />
        <button>Comentar</button>
      </form>
      <div>
        <p>Comentários:</p>
        {post.comments &&
          post.comments.length &&
          post.comments.sort((a,b) => b.createdAt - a.createdAt).map((post) => {
            return (
              <>
                <p>
                  <Avatar src="https://www.redditstatic.com/avatars/avatar_default_08_FF4500.png" />{" "}
                  {post.username}
                  <span>{" "} {format(
                  parseISO(
                    new Date(post && post.createdAt).toISOString().slice(0, 10)), "d MMM yyyy", {
                    locale: ptBR,
                  }
                )}</span>
                </p>
                
                <p>Comentário: {post.text}</p>
                <p>Votos do comentário: 
                 <Span onClick={() => upVoteComment(params.id, post.id)}> + </Span>{" "}
                 {post.votesCount}
                 <Span onClick={() => downVoteComment(params.id, post.id)}> - </Span>{" "}
                </p>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default PostPage;

const CardPost = styled.div`
  border: 2px solid black;
  margin: 5px;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ImgComment = styled.img`
  width: 22px;
  margin: 0 5px;
`;

const Span = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
  font-size: 20px;
  cursor: pointer;

  &:first-child {
    background-color: green;
  }
`;
