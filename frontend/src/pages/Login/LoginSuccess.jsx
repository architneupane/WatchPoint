import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function LoginSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token")

    if(token) {
        sessionStorage.setItem('token', token)
        toast.success("Login Successfully")
        navigate('/')
    }
  }, [])

  return (
    <div>Logging you in........</div>
  )}

export default LoginSuccess