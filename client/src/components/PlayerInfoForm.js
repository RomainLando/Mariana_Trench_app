import React, {useState, useEffect} from 'react'

export default function PlayerInfoForm({addPlayer}) {

  const [name, setName] = useState("");
  const [height, setHeight] = useState("");

  const handlePlayerNameChange = (ev) => setName(ev.target.value);
  const handlePlayerHeightChange = (ev) => setHeight(ev.target.value);

  const handleSubmit = ev => {
    ev.preventDefault();
    addPlayer({
      name: name,
      height: height
    });
    setName("");
    setHeight("");
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <h4>Ready to explore?</h4>
        <div className="player">
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={handlePlayerNameChange}
          />
        </div>
        <div className="player">
          <label htmlFor="height">How tall are you?</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="centimetres [cm]"
            value={height}
            required
            onChange={handlePlayerHeightChange}
          />
        </div>
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
}
