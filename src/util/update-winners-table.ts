import RaceImg from "../components/img/race-img";
import { store } from "../store/store";
import WinnerString from "../view/main/winners/winner-string/winner-string";

export const updateWinnersTable = () => {
  const winnersTable = document.querySelector(".winners-table")!;
  if (store.winners && store.winners.length > 0) {
    for (let i = 0; i < store.winners.length; i++) {
      const winnerString = new WinnerString().getHtmlElement()! as HTMLElement;
      const raceName = store.winners[i]?.raceName;
      const raceColor =
        store.winners[i]!.raceImg!.parentElement!.getAttribute("color");
      const raceImg = new RaceImg(raceColor!, i).getHtmlElement()!;
      const time =
        store.winners[i]?.time !== undefined
          ? String(store.winners[i].time)
          : "";
      winnerString.append(raceName!, raceImg as unknown as Node, time);
      if (winnerString && winnersTable) winnersTable.append(winnerString);
    }
  }
};
