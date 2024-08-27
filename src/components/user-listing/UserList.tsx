import React, { useEffect, useState } from 'react';
import './UserList.scss';

export type UserData = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: number;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    ip: string;
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinate: {
            lat: number;
            lng: number;
        };
        country: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: {
        department: string;
        name: string;
        title: string;
        address: {
            address: string;
            city: string;
            state: string;
            stateCode: string;
            postalCode: string;
            coordinate: {
                lat: number;
                lng: number;
            };
            country: string;
        };
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    };
    role: string;
};

const fetchUsers = async (): Promise<UserData[]> => {
    const url = 'https://dummyjson.com/users';
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
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        fetchUsers()
        .then(setUsers)
        .catch(console.error);
    }, []);

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type='text'
                placeholder='Please search here...'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width="50" />
                        <p>Name: {user.firstName} {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Age: {user.age}</p>
                        <p>Address: {user.address.city}, {user.address.state}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
