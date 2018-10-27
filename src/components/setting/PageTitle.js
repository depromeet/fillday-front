import React from 'react';

const style = {
    height: "35px",
    fontFamily: "NanumBarunGothicOTF",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000000",
    padding: "25px 1px",
    borderBottom: "1px solid #d4d4d4",
    marginTop: "105px"
}

const PageTitle = ({ title }) => (
    <div style={style}>{title}</div>
);

export default PageTitle;