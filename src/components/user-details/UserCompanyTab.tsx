import React from "react";
import Details from "./Details";
import { UserData } from "../user-data/UserData";
import company from "../../assets/company.png";
import department from "../../assets/department.png";
import address from "../../assets/address.png";
import usa from "../../assets/usa.png";
import country from "../../assets/country.png";
import coordinates from "../../assets/Coordinates.png";
import role from "../../assets/companyname.png";
import ip from "../../assets/ip.png";
import mac from "../../assets/mac.png";

interface UserCompanyTabProps {
  user: UserData;
}

const UserCompanyTab: React.FC<UserCompanyTabProps> = ({ user }) => {
  return (
    <div>
      <h2>Company Details</h2>

      <Details
        imageSrc={company}
        altText="company-image"
        label="Company Name: "
        value={user.company.name}
      />
      <Details
        imageSrc={department}
        altText="department-image"
        label="Department: "
        value={user.company.department}
      />
      <Details
        imageSrc={role}
        altText="role-image"
        label="Role: "
        value={user.company.title}
      />
      <Details
        imageSrc={ip}
        altText="role-image"
        label="IP Address: "
        value={user.ip}
      />
      <Details
        imageSrc={mac}
        altText="mac-image"
        label="MAC Address: "
        value={user.macAddress}
      />
      <Details
        imageSrc={address}
        altText="address-image"
        label="Address: "
        value={`${user.company.address.address}, ${user.company.address.city}, ${user.company.address.postalCode}, ${user.address.city}, ${user.address.postalCode}`}
      />
      <Details
        imageSrc={country}
        altText="country-image"
        label="Country: "
        value={user.company.address.country}
        optionalSrc={usa}
      />
      <Details
        imageSrc={coordinates}
        altText="coordinates-image"
        label="Coordinates: "
        value={`${user.company.address.coordinates.lat}, ${user.company.address.coordinates.lng}`}
      />
    </div>
  );
};

export default UserCompanyTab;
