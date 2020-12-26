import React from "react";
export default function UserCard(props) {
  const { data } = props;
  return (
    <div className="Card">
      <div className="CardBody">
        <div className="CardImage">
          <img
            src={data.avatar_url}
            alt={data.name}
            className="img-responsive"
          />
        </div>
        <div className="CardIntro">
          <h1>{data.name}</h1>
          <p>{data.company}</p>
          <p>{data.bio}</p>
        </div>
      </div>
    </div>
  );
}
