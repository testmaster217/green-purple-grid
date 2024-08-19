export default function FocusedCellIndicator({
    changedByPlayer,
    cascaded
}: {
    changedByPlayer: string,
    cascaded: boolean
}) {
    return <div id="FocusedCell">
        <span id="FocusedCellBalloon">
            {changedByPlayer}
            {cascaded && <span id="cascadedNote">Cascaded</span>}
        </span>
    </div>
}