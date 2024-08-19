import { CellState } from "../cellStates";
import { PlayerTeam } from "../playerTeams";

export default function PlaceCellButtons({
    focusedCellState,
    playerTeam
}: {
    focusedCellState: CellState,
    playerTeam: PlayerTeam
}) {
    // Can return one or two buttons, make an array to store them.
    const buttons: React.ReactElement[] = [];

    // Is the cell hard? If so, can't place on it.
    if (focusedCellState == CellState.HARD_GREEN ||
        focusedCellState == CellState.HARD_PURPLE ||
        focusedCellState == CellState.HARD_OFF_GREEN ||
        focusedCellState == CellState.HARD_OFF_PURPLE) {
        buttons.push(<div className="InvalidPlaceCellButtonBig">Can't place on hard cells.</div>);
    }
    // Is the cell a color other than the player's? If so, both buttons say "Place".
    else if (
        (
            playerTeam == PlayerTeam.GREEN &&
            !(
                focusedCellState == CellState.GREEN ||
                focusedCellState == CellState.OFF_GREEN
            )
        ) || (
            playerTeam == PlayerTeam.PURPLE &&
            !(
                focusedCellState == CellState.PURPLE ||
                focusedCellState == CellState.OFF_PURPLE
            )
        )
    ) {
        buttons.push(<button type="button" className="PlaceOnCellButton">Place On Cell</button>);
        buttons.push(<button type="button" className="PlaceOffCellButton">Place Off Cell</button>);
    }
    // The cell is the player's color, so is it an on cell? If so, that button says "Remove".
    else if (
        (playerTeam == PlayerTeam.GREEN && focusedCellState == CellState.GREEN) ||
        (playerTeam == PlayerTeam.PURPLE && focusedCellState == CellState.PURPLE)
    ) {
        buttons.push(<button type="button" className="PlaceOnCellButton">Remove On Cell</button>);
        buttons.push(<button type="button" className="PlaceOffCellButton">Place Off Cell</button>);
    }
    // The cell is the player's color and is an off cell, so _that_ button says "Remove".
    else if (
        (playerTeam == PlayerTeam.GREEN && focusedCellState == CellState.OFF_GREEN) ||
        (playerTeam == PlayerTeam.PURPLE && focusedCellState == CellState.OFF_PURPLE)
    ) {
        buttons.push(<button type="button" className="PlaceOnCellButton">Place On Cell</button>);
        buttons.push(<button type="button" className="PlaceOffCellButton">Remove Off Cell</button>);
    }

    // Return the buttons in a fragment.
    return <>{buttons}</>
}