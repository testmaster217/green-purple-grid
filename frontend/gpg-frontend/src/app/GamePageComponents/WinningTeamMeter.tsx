import { CellState } from "../cellStates";

export default function WinningTeamMeter({ cellStates }: { cellStates: CellState[] }) {
    // Calculate the number of cells that each team has to get the data for the meter and its labels.
    let numGreenCells = 0, numPurpleCells = 0;
    cellStates.forEach((cellState) => {
        switch (cellState) {
            case CellState.GREEN:
            case CellState.OFF_GREEN:
            case CellState.HARD_GREEN:
            case CellState.HARD_OFF_GREEN:
                numGreenCells++;
                break;
            case CellState.PURPLE:
            case CellState.OFF_PURPLE:
            case CellState.HARD_PURPLE:
            case CellState.HARD_OFF_PURPLE:
                numPurpleCells++;
                break;
        }
    });

    // Calculate the text of the "[color] is winning!" label.
    let winningTeamLabelText = <></>;
    if (numGreenCells > numPurpleCells) {
        winningTeamLabelText = <><span className="WinningTeamLabelGreen">Green</span> is winning!</>;
    } else if (numGreenCells < numPurpleCells) {
        winningTeamLabelText = <><span className="WinningTeamLabelPurple">Purple</span> is winning!</>;
    } else {
        winningTeamLabelText = <><span className="WinningTeamLabelTie">Neither team</span> is winning!</>;
    }

    return <section>
        {/* TODO: Can use #WinningTeamLabel.span to style the inner span. */}
        <label id="WinningTeamLabel" htmlFor="GridPercentControlledMeter">
            {winningTeamLabelText}
        </label>
        {/* TODO:
        The percents should be replaced with computed values.
        The meter is number of green cells divided by number of green and purple cells.
        The green label is this too.
        The purple label is number of purple cells divided by number of green and purple cells.
        Don't forget that there are multiple states that each color can be in.
        */}
        <meter id="GridPercentControlledMeter"></meter>
        <label id="GreenPercentLabel" htmlFor="GridPercentControlledMeter">Green: {(numGreenCells/cellStates.length) * 100}%</label>
        <label id="PurplePercentLabel" htmlFor="GridPercentControlledMeter">Purple: {(numPurpleCells/cellStates.length) * 100}%</label>
    </section>
}