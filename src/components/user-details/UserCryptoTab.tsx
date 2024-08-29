import React from "react";
import { UserData } from "../user-data/UserData";
import coin from "../../assets/coin.png";
import wallet from "../../assets/wallet.png";
import network from "../../assets/network.png";
import Details from "./Details";

interface UserCryptoTabProps {
  user: UserData;
}

const UserCryptoTab: React.FC<UserCryptoTabProps> = ({ user }) => {
  return (
    <div>
      <h2>Crypto Details</h2>

      <Details
        imageSrc={coin}
        altText="coin-image"
        label="Coin: "
        value={user.crypto.coin}
      />
      <Details
        imageSrc={wallet}
        altText="wallet-image"
        label="Wallet: "
        value={user.crypto.wallet}
      />
      <Details
        imageSrc={network}
        altText="network-image"
        label="Network: "
        value={user.crypto.network}
      />
    </div>
  );
};

export default UserCryptoTab;
