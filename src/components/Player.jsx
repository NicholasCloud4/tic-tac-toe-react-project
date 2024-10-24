import { useState } from 'react'

function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let playerName = <span className='player-name'>{name}</span>
    if (isEditing === true) {
        playerName = <input type="text" defaultValue={name} required />
    }


    return (
        <li>
            <span className="player">
                {playerName}
                <span className='player-symbol'>{symbol}</span>

            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}

export default Player