import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, Input, ModalCardBase, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon16Cards2, Icon16Replay, Icon16SadFaceOutline, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20CheckCircleOutline, Icon20CrownCircleFillVkDating, Icon20ErrorCircleFillYellow, Icon20FireCircleFillRed, Icon24Add, Icon24SadFaceOutline, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications, Icon56UsersOutline } from '@vkontakte/icons';


export const Rules = () => {
  return (
    <View activePanel="rules">
      <Panel id="rules">

        <Tabbar>
          <TabbarItem
            text="Меню"
          >
            <Icon16Replay />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View >
  )
}