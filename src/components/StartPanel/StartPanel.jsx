import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, Counter, Group, Header, Image, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, Tabbar, TabbarItem, Tabs, TabsItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon20AddCircleFill, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';


export const StartPanel = () => {
  return (
    <View activePanel="badge">
      <Panel id="badge">
        <PanelHeader
        >Команды</PanelHeader>
        <Tabbar>
          <TabbarItem
            text="Добавить команду"
          >
            <Icon20AddCircleFill />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}