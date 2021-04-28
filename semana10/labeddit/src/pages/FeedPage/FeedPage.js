import axios from "axios";
import React, { useEffect, useState } from "react";
import FormPost from "../../components/FormPost";
import Pagination from "../../components/Pagination";
import Posts from "../../components/Posts";
import { baseURL } from "../../utils/urls";

const FeedPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] =useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const token = window.localStorage.getItem("token");

  const headers = {
    headers: { Authorization: token },
  };

  useEffect(() => {
    token && getPosts()
  }, [token]);

  const getPosts = () => {
    setLoading(true)
    axios.get(`${baseURL}/posts`, headers)
    .then(res => {
      setPosts(res.data.posts)
      setLoading(false)
    })
    .catch(err => console.log(err));
  }

  const indexLastPost =  currentPage * postsPerPage
  const indexFirstPost = indexLastPost - postsPerPage
  const currentPosts = posts.sort((a,b) => b.createdAt - a.createdAt).slice(indexFirstPost, indexLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      {token ? (
          <>
            <h1>Feed Page</h1>

            <FormPost getPosts={getPosts}/>

            <Posts posts={currentPosts} loading={loading} />
            
            <Pagination
            posts={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            />
            
          </>
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
