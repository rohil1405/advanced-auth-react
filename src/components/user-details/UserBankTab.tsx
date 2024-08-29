import React from "react";
import Details from "./Details";
import { UserData } from "../user-data/UserData";
import cardNumber from "../../assets/cardNumber.png";
import cardExpire from "../../assets/card-expire.png";
import ssn from "../../assets/ssn.png";
import ein from "../../assets/ein.png";
import currency from "../../assets/currency.png";
import iban from "../../assets/iban.png";
import cardType from "../../assets/cardType.png";

interface UserBankTabProps {
  user: UserData;
}

const UserBankTab: React.FC<UserBankTabProps> = ({ user }) => {
  return (
    <div>
      <h2>Bank Details</h2>

      <Details
        imageSrc={cardNumber}
        altText="cardNumber-image"
        label="Card Number: "
        value={user.bank.cardNumber}
      />
      <Details
        imageSrc={cardExpire}
        altText="cardExpire-image"
        label="Card Expire: "
        value={user.bank.cardExpire}
      />
      <Details
        imageSrc={cardType}
        altText="cardType-image"
        label="Card Type: "
        value={user.bank.cardType}
      />
      <Details
        imageSrc={currency}
        altText="currency-image"
        label="Currency: "
        value={user.bank.currency}
      />
      <Details
        imageSrc={iban}
        altText="iban-image"
        label="IBAN: "
        value={user.bank.iban}
      />
      <Details
        imageSrc={ein}
        altText="ein-image"
        label="EIN: "
        value={user.ein}
      />
      <Details
        imageSrc={ssn}
        altText="ssn-image"
        label="SSN: "
        value={user.ssn}
      />
    </div>
  );
};

export default UserBankTab;
