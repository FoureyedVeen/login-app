import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  // protected route and auth token verification
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate('/')
    }
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home