import React from 'react'
import { AdminTable } from '../../Components/Admins/AdminTable'
import { Link } from 'react-router-dom'

export const AdminListPage = () => {
    return (

        <>
        <h1 className='text-6xl text-primary pb-3 text-center mx-auto'>Admins</h1>
            <AdminTable />
            <br />
            <br />
            <br />
            <Link to='/createadmin' style={{ "float": "right" }} className='btn btn-accent btn-sm rounded-btn'>Add New Admin</Link>
            <Link className="btn btn-outline btn-lg" to='/admindashboard'>Go back</Link>
        </>

    )
}
