import React, { useState, useEffect } from "react";
import UserAddressTab from "./UserAddressTab";
import UserBankTab from "./UserBankTab";
import UserCompanyTab from "./UserCompanyTab";
import UserCryptoTab from "./UserCryptoTab";
import { UserData } from "../user-data/UserData";
import "./UserDetails.scss";
import { useParams, Link } from "react-router-dom";
import UserDetailsTab from "./UserDetailsTab";
import Menu from "../Menu/Menu";
import loader from "../../assets/loading.png";
import "../user-data/loader.scss";

const fetchUser = async (id: number): Promise<UserData> => {
  const url = `https://dummyjson.com/users/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network Issues");
  }

  const data = await res.json();
  return data;
};

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("details");

  useEffect(() => {
    if (id) {
      fetchUser(Number(id)).then(setUser).catch(console.error);
    }
  }, [id]);

  if (!user)
    return (
      <div className="loader-container">
        <div className="loader">
          <img src={loader} alt="Loading..." />
          <span>Loading...</span>
        </div>
      </div>
    );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "details":
        return <UserDetailsTab user={user} />;
      case "address":
        return <UserAddressTab user={user} />;
      case "bank":
        return <UserBankTab user={user} />;
      case "company":
        return <UserCompanyTab user={user} />;
      case "crypto":
        return <UserCryptoTab user={user} />;
      default:
        return null;
    }
  };

  return (
    <div className="user-details-wrap">
      <Menu />
      <div className="container">
        <div className="user-details">
          <div className="user-card">
            <div className="user-image">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <h2>{user.role}</h2>
            </div>
            <div className="user-info">
              <div className="tabs">
                <a
                  className={activeTab === "details" ? "active" : ""}
                  onClick={() => setActiveTab("details")}
                >
                  Details
                </a>
                <a
                  className={activeTab === "address" ? "active" : ""}
                  onClick={() => setActiveTab("address")}
                >
                  Address
                </a>
                <a
                  className={activeTab === "company" ? "active" : ""}
                  onClick={() => setActiveTab("company")}
                >
                  Company
                </a>
                <a
                  className={activeTab === "bank" ? "active" : ""}
                  onClick={() => setActiveTab("bank")}
                >
                  Bank
                </a>
                <a
                  className={activeTab === "crypto" ? "active" : ""}
                  onClick={() => setActiveTab("crypto")}
                >
                  Crypto
                </a>
              </div>
              <div className="tab-content">{renderActiveTab()}</div>
            </div>
          </div>
          <div className="cta-btn">
            <Link to="/">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
