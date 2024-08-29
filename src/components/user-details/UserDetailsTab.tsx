import React from "react";
import Details from "./Details";
import { UserData } from "../user-data/UserData";
import email from "../../assets/email.png";
import phone from "../../assets/call.png";
import gender from "../../assets/gender.png";
import age from "../../assets/age.png";
import birthdate from "../../assets/birthdate.png";
import blood from "../../assets/blood.png";
import university from "../../assets/university.png";
import eye from "../../assets/eye.png";
import hair from "../../assets/hair.png";
import username from "../../assets/username.png";
import password from "../../assets/password.png";
import bmi from "../../assets/bmi.png";

interface UserDetailsTabProps {
  user: UserData;
}

const UserDetailsTab: React.FC<UserDetailsTabProps> = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>

      <Details
        imageSrc={email}
        altText="email-image"
        label="Email: "
        value={user.email}
      />
      <Details
        imageSrc={phone}
        altText="phone-image"
        label="Phone: "
        value={user.phone}
      />
      <Details
        imageSrc={gender}
        altText="gender-image"
        label="Gender: "
        value={user.gender}
      />
      <Details
        imageSrc={age}
        altText="age-image"
        label="Age: "
        value={String(user.age)}
      />
      <Details
        imageSrc={birthdate}
        altText="birthdate-image"
        label="Birthdate: "
        value={user.birthDate}
      />
      <Details
        imageSrc={bmi}
        altText="BMI-image"
        label="BMI: "
        value={`${user.height}, ${user.weight}`}
      />
      <Details
        imageSrc={blood}
        altText="blood-group-image"
        label="BloodGroup: "
        value={user.bloodGroup}
      />
      <Details
        imageSrc={university}
        altText="university-image"
        label="University: "
        value={user.university}
      />
      <Details
        imageSrc={eye}
        altText="eye-image"
        label="EyeColor: "
        value={user.eyeColor}
      />
      <Details
        imageSrc={hair}
        altText="hair-image"
        label="Hair: "
        value={`${user.hair.type}, ${user.hair.color}`}
      />
      <Details
        imageSrc={username}
        altText="username-image"
        label="Username: "
        value={user.username}
      />
      <Details
        imageSrc={password}
        altText="password-image"
        label="Password: "
        value={user.password}
      />
    </div>
  );
};

export default UserDetailsTab;
