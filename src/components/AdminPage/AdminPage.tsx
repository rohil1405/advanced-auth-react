import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import './AdminPage.scss';

const AdminPage = () => {
    return (
        <div className="admin-page-wrap">
            <div className="container">
                <div className="admin-page">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default AdminPage;