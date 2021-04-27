import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from "../../utils/urls";
import styled from 'styled-components'

const PostPage = () => {
    const [posts, setPosts] = useState([])

    const token = window.localStorage.getItem("token");

    const headers = {
      headers: { Authorization: token },
    };

    useEffect(() => {
        axios.get(`${baseURL}/posts`, headers)
        .then(res => setPosts(res.data.posts))
        .catch(err => console.log(err));
      }, []);

    const orderedPosts = []
    posts.length > 0 && posts.forEach(user => {
        if (user.username === 'angelovso') {
            orderedPosts.push(user)
        }
    })

    return (
        <div>
            <h1>Post Page</h1>
            {posts.sort((a,b) => b.createdAt - a.createdAt).map(user => {
                    return (
                    <CardPost>
                      <p>Postado por: {user.username}</p>
                      <p>Título: {user.title}</p>
                      <p>Texto: {user.text}</p>
                    </CardPost>
                    )
                })
            }
        </div>
    )
}

export default PostPage

const CardPost = styled.div`
border: 2px solid black;
margin: 5px;
`