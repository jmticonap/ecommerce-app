import { Navigate, Outlet } from 'react-router-dom'
import { getUserSesion } from '../utils'

const ProtectedRoutes = () => {
    const sesion = getUserSesion()
    if(sesion.token != ''){
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtectedRoutes