import { CellState } from "../cellStates";
import { PlayerTeam } from "../playerTeams";
import GameScreen from "./GameScreen";
import WinningTeamMeter from "./WinningTeamMeter";

export default function GamePageMainContent({ playerTeam }: { playerTeam: PlayerTeam }) {
    // TODO: Replace these consts with an API call to get the real data
    // (or however it will work).
    const cellStates = [
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.HARD_OFF_GREEN, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.GREEN, CellState.CLEAR, CellState.OFF_PURPLE, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.HARD_OFF_PURPLE, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.PURPLE, CellState.CLEAR, CellState.CLEAR, CellState.OFF_GREEN, CellState.CLEAR, CellState.HARD_GREEN, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.HARD_PURPLE, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
        CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR, CellState.CLEAR,
    ];
    const focusedCellData = {state: CellState.CLEAR, changedByPlayer: "Testmaster217", cascaded: false};

    return <main>
        <WinningTeamMeter cellStates={cellStates}/>
        <GameScreen cellStates={cellStates}
        focusedCellState={focusedCellData.state}
        changedByPlayer={focusedCellData.changedByPlayer}
        cascaded={focusedCellData.cascaded}
        playerTeam={playerTeam}/>
    </main>
}