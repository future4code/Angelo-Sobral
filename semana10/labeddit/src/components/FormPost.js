import React from "react"
import axios from "axios";
import { baseURL } from "../utils/urls";
import { useForm } from "../hooks/useForm";

const FormPost = ({getPosts}) => {
    const [form, onChange, resetForm] = useForm({text: '', title:''})

    const token = window.localStorage.getItem("token");

    const headers = {
        headers: { Authorization: token },
      };

    const createPost = async (e) => {
        e.preventDefault()
        try {
          await axios.post(`${baseURL}/posts`, form, headers)
          resetForm()
          alert('Post criado com sucesso!')
          getPosts()
        }
        catch (err) {
            alert('Algo inesperado aconteceu, por favor, tente novamente mais tarde!')
            console.log(err)
        }
      }

      return (
        <form onSubmit={createPost}>
          <input name='title' onChange={onChange} value={form.title} placeholder="Título do post" />
          <textarea name='text' onChange={onChange} value={form.text} placeholder="Escreva seu post" />
          <button>Post</button>
        </form>
      )
}

export default FormPost