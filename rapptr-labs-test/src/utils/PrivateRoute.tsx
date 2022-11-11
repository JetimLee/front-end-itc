import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useTypedSelector'

export const PrivateRoutes = () => {
  const authenticated = useAppSelector((state) => state.loggedIn)

  return authenticated ? <Outlet /> : <Navigate to={'/login'} />
}
