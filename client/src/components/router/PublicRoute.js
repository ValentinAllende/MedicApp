import { Navigate, Outlet } from "react-router-dom";
import{PRIVATEA} from '../../config/routes/paths';
import {useAuthContext} from '../../context/authContext' ;

export default function PublicRoute(){
    const {isAuth} = useAuthContext();

    if(isAuth){
        return <Navigate to={PRIVATEA} />
    }
    return(
        <div>
            <Outlet />
        </div>
    )
}
