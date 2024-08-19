import GamePageMainContent from "./GamePageComponents/GanePageMainContent";
import { PlayerTeam } from "./playerTeams";

export default function GamePage() {
  // TODO: Replace this const with an API call to get the real data.
  const playerTeam = PlayerTeam.GREEN;

  return <>
    <GamePageMainContent playerTeam={playerTeam}/>
  </>
}