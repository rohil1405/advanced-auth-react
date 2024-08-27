import React, { useEffect, useState } from "react";
import "./UserList.scss";
import { UserData } from "../user-data/UserData";

const fetchUsers = async (): Promise<UserData[]> => {
  const url = "https://dummyjson.com/users";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network Issues");
  }

  const data = await res.json();
  console.log(data);
  console.log(data.users);
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

  return (
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
            <ul className='user-listing'>
              {filteredUsers.map((user) => (
                <li key={user.id}>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <h2>
                    {user.firstName} {user.lastName}
                  </h2>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>Age: {user.age}</p>
                  <p>
                    Address: {user.address.city}, {user.address.state}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
