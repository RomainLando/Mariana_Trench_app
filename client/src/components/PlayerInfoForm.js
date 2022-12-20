import React from 'react'



// this is to house the form for players to provide name and height!

// Form onSubmit={handleSubmit} needs to be created and at parent. Link to backend
// Likewise for input handleNameChange onChange={handleNameChange}

export default function PlayerInfoForm() {
    return (
        <div>
            <form>
                <h4>Ready to explore?</h4>
                <div className="player">
                    <label htmlFor="name">What is your name?</label>
                    <input
                        type="text"
                        id="name"
                        name="name"

                        // value={name}
                        required
                    // onChange={handlePlayerNameChange}
                    />
                </div>
                <div className="player">
                    <label htmlFor="height">How tall are you?</label>
                    <input
                        type = "number"
                        id = "height"
                        name = "height"
                        placeholder = 'meters [m]'
                        // value={height}
                        required
                    // onChange={handlePlayerHeightChange}
                    />


                </div>

                <div>
                    <button className="submit">
                    <input type="submit" name="submit" value="Submit" />
                    </button>
                </div>
            </form>

        </div>
    )
}
