import React from "react";
import "./ContractAddress.css";
import copyButton from "../../assets/images/copy-button.svg";
const ContractAddress = () => {
  const address = "0x225f48f62C135e984187c64737143854F8C01baB";
  return (
    <div className="contract-container">
      <div className="contract-details">
        <div className="contract-input">
          <h5>Contract Address:</h5>
          <input type="text" value={address} />
        </div>
        <div className="contract-button">
          <button>
            <img src={copyButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractAddress;
