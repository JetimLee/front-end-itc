import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
  console.log('private route was hit')
  const useAuth = () => {
    const user = localStorage.getItem('user')
    if (user) {
      return true
    }
    return false
  }
  const auth = useAuth()

  return auth ? <Outlet /> : <Navigate to={'/login'} />
}
