import React from "react";

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title">Pokemon name: {props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          Awesome: {props.awesome ? "An awesome Pokemon" : "not awesome"}
        </h6>

        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "very" : "nah, lovable"}
          <br />({props.abilities.length}) abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}
