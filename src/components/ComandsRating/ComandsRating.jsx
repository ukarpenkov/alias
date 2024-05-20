import {
  Button,
  PanelHeader,
  Placeholder,
  Tabbar,
  TabbarItem,
} from "@vkontakte/vkui";
import {
  Icon16Cards2,
  Icon20FireCircleFillRed,
  Icon24Back,
} from "@vkontakte/icons";
import { CommandsList } from "../CommandsList/CommandsList";
import { useSelector } from "react-redux";
import { ResetGames } from "../ResetGames/ResetGames";

export const ComandsRating = ({ changePanel, result }) => {
  const commands = useSelector((state) => state.game.commands);
  let currentCommandIndex = commands.findIndex(
    (item) => item.isActive === true
  );

  let activeCommandIndex = commands.findIndex(
    (commnad) => commnad.isActive === true
  );
  let currentCommand = commands[activeCommandIndex].name;
  const resetState = () => {
    changePanel("main");
    window.location.reload();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          "justify-content": "space-between",
          "align-items": "center",
        }}
      >
        <h1 style={{ cursor: "default" }}>Рейтинг</h1>
        {result === "false" ? (
          <div onClick={() => changePanel("settings")}>
            <Icon24Back />
          </div>
        ) : (
          <div
            onClick={() => resetState()}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            <ResetGames />
          </div>
        )}
      </div>
      <CommandsList result={result} />
      <div className="roundInfo">
        <Placeholder
          icon={<Icon16Cards2 />}
          header={`Раунд ${
            commands[currentCommandIndex].round[
              commands[currentCommandIndex].round.length - 1
            ].number
          }`}
          action={<h2 size="m">{currentCommand}</h2>}
        >
          Готовимся к игре
        </Placeholder>
      </div>
      <Tabbar>
        <TabbarItem text="Начать игру" onClick={() => changePanel("word-card")}>
          <Icon20FireCircleFillRed />
        </TabbarItem>
      </Tabbar>
    </>
  );
};
