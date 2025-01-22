import React from "react";
import { Collapse } from "antd";
import "./FAQ.css";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { items } from "../../utils/FaqData";
const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-details">
        <div className="faq-main-text">
          <h3>#Frequently Asked Questions</h3>
        </div>
        <div className="collapse-container">
          <Collapse
            items={items}
            bordered={false}
            expandIconPosition={"end"}
            defaultActiveKey={["0"]}
            accordion
            expandIcon={({ isActive }) =>
              isActive ? (
                <AiOutlineUp className="collapse-icon" />
              ) : (
                <AiOutlineDown className="collapse-icon" />
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
