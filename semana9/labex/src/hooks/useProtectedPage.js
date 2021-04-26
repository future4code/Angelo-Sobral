import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("tokenLabeX")

        !token && history.push('/login')
    }, [history])
}