import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, Input, ModalCardBase, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon16Cards2, Icon16Replay, Icon16SadFaceOutline, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20CheckCircleOutline, Icon20CrownCircleFillVkDating, Icon20ErrorCircleFillYellow, Icon20FireCircleFillRed, Icon24Add, Icon24Back, Icon24SadFaceOutline, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications, Icon56UsersOutline } from '@vkontakte/icons';


export const Rules = () => {
  return (
    <View activePanel="rules">
      <Panel id="rules">
        <PanelHeader
        >Правила</PanelHeader>

        <div>
          <ul>
            <li>Команды по очереди объясняют слова. Игрок который объясняет слова, сменяется в каждом раунде команды</li>
            <li>Сделанные ошибки и "перепрыгнутые" слова, не уменьшают победные очки</li>
            <li>Никакая часть искомого слова, написанного на карточке, не может быть  объясняют при его объяснении</li>
            <li>Нельзя использовать однокоренные слова</li>
            <li>Нельзя использовать переводы искомого слова на другие языки при объяснении</li>
            <li>Нельзя при объяснении описывать созвучные слова или называть буквы из слова. Например, если искомое слова "ПЕНЬ", нельзя говорить "это как ЛЕНЬ, но первая буква П"</li>
            <li>Побеждает та команда, которая первой достигнет нужного количества очков</li>
          </ul>
        </div>

        <Tabbar>
          <TabbarItem
            text="Меню"
          >
            <Icon24Back />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View >
  )
}