import { useState } from "react"

const Player = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'Dylan'
        }
    })

    const handleClick = () => {
        setGame({
            id: 1,
            player: {
                name: 'DKatina'
            }
        })
    }
    return (
        <>
            <p>My name is {game.player.name} and my ID is {game.id}</p>
            <button onClick={handleClick}>Who Am I Really?</button>
        </>
    )
}
export default Player