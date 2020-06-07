import React from 'react'
import Base from '../core/Base'
import { isAutheticated } from '../auth/helper/index'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {

    const { user : 
    { name, email, role }} = isAutheticated()

    const adminLeftSide = () => {

        return (
            <div className = "card">
                <h4 className = "card-header bg-dark text-white">Admin Navigation</h4> 
                <ul className = "list-group">
                    <li className = "list-group-item">
                        <Link  to = "/admin/create/category" className = "nav-link text-info">Create Category</Link>
                    </li>
                    <li className = "list-group-item">
                        <Link  to = "/admin/categories" className = "nav-link text-info">Manage Category</Link>
                    </li>
                    <li className = "list-group-item">
                        <Link  to = "/admin/create/product" className = "nav-link text-info">Create Product</Link>
                    </li>
                    <li className = "list-group-item">
                        <Link  to = "/admin/products" className = "nav-link text-info">Manage Products</Link>
                    </li>
                    <li className = "list-group-item">
                        <Link  to = "/admin/orders" className = "nav-link text-info">Manage Orders</Link>
                    </li>

                </ul>
            </div>

        )
    }
    
    const adminRightSide = () => {
            return (
                <div className = "card mb-4">
                <h4 className = "card-header ">Admin Info</h4> 
                <ul className = "list-group">
                    <li className = "list-group-item">
                        <span className = "badge badge-success mr-2">Name : </span> {name}
                    </li>
                    <li className = "list-group-item">
                        <span className = "badge badge-success mr-2">Email : </span> {email}
                    </li>
                </ul>
            </div>
            )
    }

    return (
        <Base title = " Welcome to Admin Section" description = "Manage your products and orders" className = "container">
            <div className = "row">
               <div className = "col-3">
                    {adminLeftSide()}
               </div>
               <div className = "col-9">
                    {adminRightSide()}
               </div>

            </div>
        </Base>
    )
}

export default AdminDashboard