import {
  Button,
  ButtonGroup,
  Counter,
  Div,
  Group,
  ModalCardBase,
  PanelHeader,
  Tabbar,
  TabbarItem,
} from "@vkontakte/vkui";
import {
  Icon20CancelCircleFillRed,
  Icon20CheckCircleFillGreen,
  Icon20CheckCircleOn,
  Icon20Clear,
  Icon20Clock,
  Icon24Back,
  Icon28SwitchOutline,
} from "@vkontakte/icons";
import { Timer } from "../Timer/Timer";
import "./WordCard.css";
import { addGuessedWord, addNotGuessedWord } from "../../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ResetGames } from "../ResetGames/ResetGames";

export const WordCard = ({ changePanel }) => {
  const seconds = useSelector((state) => state.game.settings.roundTime);
  const [over, setOver] = useState(false);
  const [[s], setTime] = useState([seconds]);
  const dispatch = useDispatch();
  const commands = useSelector((state) => state.game.commands);
  const setGuessedWord = () => {
    dispatch(addGuessedWord({}));
  };
  const setNotGuessedWord = () => {
    dispatch(addNotGuessedWord({}));
  };
  let currentCommandIndex = commands.findIndex(
    (item) => item.isActive === true
  );
  let currentWord = commands[currentCommandIndex].words[0];
  let guessedWordsCount =
    commands[currentCommandIndex].round[
      commands[currentCommandIndex].round.length - 1
    ].guessedWords.length;
  let notGuessedWordsCount =
    commands[currentCommandIndex].round[
      commands[currentCommandIndex].round.length - 1
    ].notGuessedWords.length;
  const timeIsUpBtn = () => {
    return (
      <Button
        size="l"
        mode="primary"
        stretched
        style={{
          width: "300px",
          height: "50px",
          backgroundColor: "yellow",
          color: "#1c1a1a",
        }}
        onClick={() => changePanel("words-edit")}
      >
        <Icon20Clock width={20} height={20} color="rebeccapurple" />
        &nbsp;Результаты
      </Button>
    );
  };
  const tick = () => {
    if (s === 0) {
      setOver(true);
    } else {
      setTime([s - 1]);
    }
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, [s]);
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
        <h1>
          Раунд{" "}
          {
            commands[currentCommandIndex].round[
              commands[currentCommandIndex].round.length - 1
            ].number
          }
        </h1>
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
      </div>
      <div className="wordcard-container">
        <Group>
          <ModalCardBase
            dismissButtonMode="undefined"
            style={{ width: 320 }}
            header={currentWord}
            actions={
              !over ? (
                <ButtonGroup mode="horizontal" gap="s" stretched>
                  <Button
                    size="l"
                    mode="primary"
                    stretched
                    onClick={() => setNotGuessedWord()}
                  >
                    <Icon20CancelCircleFillRed width={30} height={30} />
                  </Button>
                  <Button
                    size="l"
                    mode="primary"
                    stretched
                    onClick={() => setGuessedWord()}
                  >
                    <Icon20CheckCircleFillGreen width={30} height={30} />
                  </Button>
                </ButtonGroup>
              ) : null
            }
          />
        </Group>
        <div className="current-result-wrapper ">
          <div
            className="current-result"
            style={{ display: "grid", justifyItems: "center" }}
          >
            <h3 size="m" style={{ color: "green" }}>
              Отгадано: {guessedWordsCount}
            </h3>
            <h3 size="m" style={{ color: "red" }}>
              Пропущено: {notGuessedWordsCount}
            </h3>
          </div>
        </div>
      </div>
      <div className="wordcard-container">
        <h1>{!over ? <Timer s={[s]} /> : timeIsUpBtn()}</h1>
      </div>
    </>
  );
};
