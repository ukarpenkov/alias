import { Button, Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
  Icon20AddCircleFill,
  Icon20ArrowRightOutline,
  Icon20ErrorCircleFillYellow,
  Icon24Back,
} from "@vkontakte/icons";
import "./StartPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { CommandsList } from "../../components/CommandsList/CommandsList";
import { addCommand, addWords, setActiveCommand } from "../../store/slice";
import { useState } from "react";

export const StartPanel = ({ changePanel, result }) => {
  const commands = useSelector((state) => state.game.commands);
  const words = useSelector((state) => state.game.words);
  const [commandsCount, setCommandsCount] = useState(commands.length);
  const dispatch = useDispatch();

  const setWordsToCommands = () => {
    let array = words;
    let size = words.length / Number(commandsCount + 1);
    let subarray = [];
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      subarray[i] = array.slice(i * size, i * size + size);
    }
    dispatch(
      addWords({
        words: subarray,
      })
    );
  };

  const addNewCommnadWithWords = () => {
    dispatch(
      addCommand({
        id: Date.now().toString(),
        name: "Команда без названия",
        score: 0,
        round: [{ number: 1, guessedWords: [], notGuessedWords: [] }],
        words: [],
        isActive: false,
      })
    );
    setCommandsCount(commandsCount + 1);
    setWordsToCommands();
  };

  const setActiveCommandWithRoute = () => {
    dispatch(setActiveCommand());
    changePanel("settings");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: "3%",
        }}
      >
        <div onClick={() => changePanel("main")} style={{ cursor: "pointer" }}>
          <Icon24Back />
        </div>
        <h1>Команды</h1>
      </div>
      <CommandsList
        result={result}
        setCommandsCount={setCommandsCount}
        commandsCount={commandsCount}
      />
      {commandsCount <= 4 ? (
        <Button
          onClick={() => addNewCommnadWithWords()}
          style={{ width: "100%", marginTop: "10px" }}
          size="l"
          className="add-command-btn"
        >
          <span>Добавить команду&nbsp; </span>{" "}
          <Icon20AddCircleFill color="rebeccapurple" />
        </Button>
      ) : (
        <Button
          style={{ width: "100%", backgroundColor: "red", marginTop: "10px" }}
          size="l"
          className="add-command-btn"
        >
          <span>Невозможно добавить более 5 команд&nbsp; </span>{" "}
          <Icon20ErrorCircleFillYellow />
        </Button>
      )}

      <Tabbar>
        <TabbarItem
          className="tabbar-alias"
          onClick={() => setActiveCommandWithRoute()}
          text="Далее"
        >
          <Icon20ArrowRightOutline />
        </TabbarItem>
      </Tabbar>
    </>
  );
};
