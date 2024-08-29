import React from "react";
import Details from "./Details";
import { UserData } from "../user-data/UserData";
import address from "../../assets/address.png";
import city from "../../assets/city.png";
import state from "../../assets/state.png";
import usa from "../../assets/usa.png";
import country from "../../assets/country.png";
import coordinates from "../../assets/Coordinates.png";

interface UserAddressTabProps {
  user: UserData;
}

const UserAddressTab: React.FC<UserAddressTabProps> = ({ user }) => {
  return (
    <div>
      <h2>Address Details</h2>

      <Details
        imageSrc={address}
        altText="address-image"
        label="Address: "
        value={user.address.address}
      />
      <Details
        imageSrc={city}
        altText="city-image"
        label="City: "
        value={`${user.address.city}, ${user.address.postalCode}`}
      />
      <Details
        imageSrc={state}
        altText="state-image"
        label="State: "
        value={`${user.address.state}, ${user.address.stateCode}`}
      />
      <Details
        imageSrc={country}
        altText="country-image"
        label="Country: "
        value={user.address.country}
        optionalSrc={usa}
      />
      <Details
        imageSrc={coordinates}
        altText="coordinates-image"
        label="Coordinates: "
        value={`${user.address.coordinates.lat}, ${user.address.coordinates.lng}`}
      />
    </div>
  );
};

export default UserAddressTab;
