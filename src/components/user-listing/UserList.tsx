import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserList.scss";
import { UserData } from "../user-data/UserData";
import Menu from "../Menu/Menu";
import call from "../../assets/call.png";
import email from "../../assets/email.png";
import loader from "../../assets/loading.png";
import "../user-data/loader.scss";

const fetchUsers = async (): Promise<UserData[]> => {
  const url = "https://dummyjson.com/users";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network Issues");
  }

  const data = await res.json();
  return data.users;
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase())
  );

  if (!filteredUsers)
    return (
      <div className="loader-container">
        <div className="loader">
          <img src={loader} alt="Loading..." />
          <span>Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="user-data-listing">
      <Menu />
      <section className="user-data-wrap">
        <div className="container">
          <div className="user-data">
            <div>
              <input
                type="text"
                placeholder="Please search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ul className="user-listing">
                {filteredUsers.map((user) => (
                  <li key={user.id}>
                    <div className="listing-wrap">
                      <h2>
                        {user.firstName} {user.lastName}
                      </h2>

                      <div className="phone-call">
                        <div className="call-img">
                          <img src={call} alt="call-img" />
                        </div>
                        <a href={`tel:${user.phone}`}>{user.phone}</a>
                      </div>

                      <div className="email-call">
                        <div className="email-img">
                          <img src={email} alt="email-img" />
                        </div>
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </div>
                    </div>
                    <div className="learn-more">
                      <div className="user-img">
                        <img
                          src={user.image}
                          alt={`${user.firstName} ${user.lastName}`}
                        />
                      </div>
                      <div className="cta-btn">
                        <Link to={`/${user.id}`}>Learn More</Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserList;
