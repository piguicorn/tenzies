export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <li onClick={props.holdDice}>
            <button className="dice__btn" style={styles}>{props.value}</button>
        </li>
    )
}