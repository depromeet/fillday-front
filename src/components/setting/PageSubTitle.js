import React from 'react';

const style = {
    height: "19px",
    fontFamily: "NanumBarunGothicOTF",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000000",
    padding: "20px 0"
}
const PageSubTitle = ({ title }) => (
    <div style={style}>{title}</div>
);

export default PageSubTitle;