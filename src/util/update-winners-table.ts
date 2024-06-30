import Container from "../components/container/container";
import RaceImg from "../components/img/race-img";
import { store } from "../store/store";
import WinnerString from "../view/main/winners/winner-string/winner-string";

export const updateWinnersTable = () => {
  const winnersTable = document.querySelector(".winners-table")!;
  if (store.winners && store.winners.length > 0) {
    for (let i = 0; i < store.winners.length; i++) {
      const winnerID = String(i + 1);
      if (!document.getElementById(winnerID)) {
        const winnerString =
          new WinnerString().getHtmlElement()! as HTMLElement;
        winnerString.id = winnerID;
        const raceName = store.winners[i]?.raceName;
        const containerName = new Container().getHtmlElement()!;
        containerName.innerHTML = `${raceName}`;
        containerName.classList.add("name-race");
        const containerId = new Container().getHtmlElement()!;
        containerId.classList.add("id-race");
        containerId.innerHTML = `${winnerID}`;
        const raceColor =
          store.winners[i]!.raceImg!.parentElement!.getAttribute("color");
        const raceImg = new RaceImg(raceColor!, i).getHtmlElement()!;
        raceImg.classList.add("winner");
        const time =
          store.winners[i]?.time !== undefined
            ? String(store.winners[i].time)
            : "";
        const containerTime = new Container().getHtmlElement()!;
        containerTime.classList.add("time-race");
        containerTime.innerHTML = `${time}s`;
        winnerString.append(
          containerId,
          containerName,
          raceImg as unknown as Node,
          containerTime
        );
        if (winnerString && winnersTable) winnersTable.append(winnerString);
      }
    }
  }
};
