import { CellState } from "../cellStates";
import { PlayerTeam } from "../playerTeams";
import FocusedCellIndicator from "./FocusedCellIndicator";
import GameGrid from "./GameGrid";
import ZoomButtons from "./GameGridZoomButtons";
import PlaceCellButtons from "./PlaceCellButtons";

export default function GameScreen({
    cellStates,
    focusedCellState,
    changedByPlayer,
    cascaded,
    playerTeam
}: {
    cellStates: CellState[],
    focusedCellState: CellState,
    changedByPlayer: string,
    cascaded: boolean,
    playerTeam: PlayerTeam
}) {
    return <div>
        <GameGrid cellStates={cellStates}/>
        <FocusedCellIndicator changedByPlayer={changedByPlayer} cascaded={cascaded}/>
        <ZoomButtons/>
        <PlaceCellButtons focusedCellState={focusedCellState} playerTeam={playerTeam}/>
    </div>
}