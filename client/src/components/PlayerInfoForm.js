
import React, {useState, useEffect} from 'react'
import './PlayerInfoForm.css'

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
    <form id="info_form" onSubmit={handleSubmit}>
        <h4 id="formheader">Ready to Explore?</h4>
        <br></br>
        <p id="formheader">Enter your info below to begin your submarine journey!</p>
        <br></br>
        <ul class="form-wrapper">
                    <li class="form-row">
          <label htmlFor="name">What is your name Captain?</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={handlePlayerNameChange}
          />
        </li>
        <li class="form-row">
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
        </li>
        <li class="form-row">
        <button type="submit">Let's Dive!</button>
        </li>
        </ul>
      </form>
    </div>
  );
<<<<<<< HEAD
=======

>>>>>>> 08268b088c5f92a80ff7695c352a8595115de453
}
