import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../utils/urls'

const FeedPage = () => {
    const [posts, setPosts] = useState([])

    const token = window.localStorage.getItem('token')

    useEffect(() => {
        token && getPosts()
    }, [token])
    
    const headers = {
        headers: { Authorization: token }
    }

    const getPosts = async () => {
        try {
            const res = await axios.get(`${baseURL}/posts`, headers)
            setPosts(res.data.posts)
        }
        catch (err) {
            console.log(err)
        }
        
    }

    return (
        <div>
            {
            token ?
            (posts.length > 0 ? 
            <>
            <h1>Feed Page</h1>
            <p>{posts.length && posts[0].title}</p>
            <p>{posts.length && posts[0].text}</p>
            </>
            :
            <p>Carregando...</p>
            )
            :
            <p>Você precisa está logado para acessar esta página. Faça seu login clicando <a href='/'>aqui</a></p>
            }
        </div>
    )
}

export default FeedPage