import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {roles} from "../env.js";


export function AdminPage() {
    const {role} = useSelector((state) => state.auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (role !== roles.ADMIN)
            navigate("/")
    })

    return (
        <div className='w-[1110px] mx-auto'>
            <p>ADMINKA</p>
        </div>
    )
}