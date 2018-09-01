import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const CardArry = robots.map(user => {
    return (
      <Card id={user.id} name={user.name} email={user.email} key={user.id} />
    );
  });
  return <div>{CardArry}</div>;
};

export default CardList;
