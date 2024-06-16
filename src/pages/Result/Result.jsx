import { Panel, Placeholder, Tabbar, TabbarItem, View } from "@vkontakte/vkui";
import { Icon16Replay, Icon20CrownCircleFillVkDating } from "@vkontakte/icons";
import { useSelector } from "react-redux";

export const Result = ({ changePanel }) => {
  const winner = useSelector((state) => state.game.winner);
  const resetState = () => {
    changePanel("main");
    window.location.reload();
  };
  return (
    <View activePanel="result">
      <Panel id="result">
        <h1>Результат</h1>
        <div className="gameInfo">
          <Placeholder
            icon={<Icon20CrownCircleFillVkDating />}
            header={`Победитель`}
            action={
              <h2 size="m">
                Команда "{winner[0]}" с результатом в {winner[1]} очков
              </h2>
            }
          ></Placeholder>
        </div>
        <Tabbar>
          <TabbarItem text="Меню" onClick={() => resetState()}>
            <Icon16Replay />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  );
};
