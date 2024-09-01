import { CellState } from "../cellStates";
import "../styles.css";

export default function GameGrid({ cellStates }: { cellStates: CellState[] }) {
    const gridCells: React.ReactElement[] = [];
    let currentCellClasses = "";
    cellStates.forEach((cellState, index) => {
        currentCellClasses = "GridCell ";
        switch (cellState) {
            case CellState.CLEAR:
                currentCellClasses += "GridCell_Clear";
                break;
            case CellState.GREEN:
                currentCellClasses += "GridCell_Green";
                break;
            case CellState.PURPLE:
                currentCellClasses += "GridCell_Purple";
                break;
            case CellState.OFF_GREEN:
                currentCellClasses += "GridCell_OffGreen";
                break;
            case CellState.OFF_PURPLE:
                currentCellClasses += "GridCell_OffPurple";
                break;
            case CellState.HARD_GREEN:
                currentCellClasses += "GridCell_HardGreen";
                break;
            case CellState.HARD_PURPLE:
                currentCellClasses += "GridCell_HardPurple";
                break;
            case CellState.HARD_OFF_GREEN:
                currentCellClasses += "GridCell_HardOffGreen";
                break;
            case CellState.HARD_OFF_PURPLE:
                currentCellClasses += "GridCell_HardOffPurple";
                break;
        }

        gridCells.push(<div key={index} className={currentCellClasses}></div>);
    });
    
    return <div id="CellGrid">
        {gridCells}
    </div>
}