import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.scss";
import { UserData } from "../user-data/UserData";
import username from "../../assets/username.png";
import password from "../../assets/password.png";
import phone from "../../assets/call.png";
import email from "../../assets/email.png";
import age from "../../assets/age.png";
import gender from "../../assets/gender.png";
import company from "../../assets/company.png";
import address from "../../assets/address.png";
import coordinate from "../../assets/Coordinates.png";
import cardNumber from "../../assets/cardNumber.png";
import coin from "../../assets/coin.png";
import wallet from "../../assets/wallet.png";

const fetchUser = async (id: number): Promise<UserData> => {
  const url = `https://dummyjson.com/users/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network Issues");
  }

  const data = await res.json();
  return data;
};

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("details");

  useEffect(() => {
    fetchUser(Number(id)).then(setUser).catch(console.error);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="tab-content">
            <div className="details">
              <img src={email} alt="email-image" />
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <div className="details">
              <img src={phone} alt="phone-image" />
              <a href={`tel:${user.phone}`}>{user.phone}</a>
            </div>
            <div className="details">
              <img src={gender} alt="gender-image" />
              <p>{user.gender}</p>
            </div>
            <div className="details">
              <img src={age} alt="age-image" />
              <p>{user.age}</p>
            </div>
            <div className="details">
              <img src={company} alt="company-image" />
              <p>{user.company.name}</p>
            </div>
            <p>
              <strong>Role:</strong> {user.company.title}
            </p>
            <div className="details">
              <img src={username} alt="username-image" />
              <p>{user.username}</p>
            </div>
            <div className="details">
              <img src={password} alt="password-image" />
              <p>{user.password}</p>
            </div>
          </div>
        );
      case "address":
        return (
          <div className="tab-content">
            <div className="details">
              <img src={address} alt="address-image" />
              <p>
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}, {user.address.country},{" "}
                {user.address.postalCode}
              </p>
            </div>
            <div className="details">
              <img src={coordinate} alt="coordinate-image" />
              <p>
                Lat: {user.address.coordinates.lat}, Lng:{" "}
                {user.address.coordinates.lng}
              </p>
            </div>
          </div>
        );
      case "bank":
        return (
          <div className="tab-content">
            <h2>Bank Details</h2>
            <div className="details">
              <img src={cardNumber} alt="cardNumber-image" />
              <p>{user.bank.cardNumber}</p>
            </div>
            <p>
              <strong>Card Type:</strong> {user.bank.cardType}
            </p>
            <p>
              <strong>Card Expire:</strong> {user.bank.cardExpire}
            </p>
            <p>
              <strong>Currency:</strong> {user.bank.currency}
            </p>
            <p>
              <strong>IBAN:</strong> {user.bank.iban}
            </p>
          </div>
        );
      case "crypto":
        return (
          <div className="tab-content">
            <h2>Crypto Details</h2>
            <div className="details">
              <img src={coin} alt="coin-image" />
              <p>{user.crypto.coin}</p>
            </div>
            <p>
              <strong>Wallet:</strong> {user.crypto.wallet}
            </p>
            <p>
              <strong>Network:</strong> {user.crypto.network}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="user-details">
      <div className="container">
        <div className="user-card">
          <div className="user-image">
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
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
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
