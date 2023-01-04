import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import HeaderPoke from './shared/HeaderPoke'

const ProtectedRoutes = () => {

    const Trainer = useSelector(state => state.trainer)

    if(Trainer){
        return(
        <>
        <HeaderPoke />
        <Outlet />
        </>
        )
    }else{
        return <Navigate to='/' />
    }
}

export default ProtectedRoutes