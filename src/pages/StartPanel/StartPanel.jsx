import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, ContentCard, Counter, Group, Header, Image, Input, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, Tabbar, TabbarItem, Tabs, TabsItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';
import './StartPanel.css'

export const StartPanel = () => {
  return (
    <View activePanel="badge">
      <Panel id="badge">
        <PanelHeader
        >Команды</PanelHeader>
        <div className='command-card'>
          <Input
            id="example2"
            style={{ 'width': '100%' }}
            type="text"
            defaultValue="Команда"
          />
          <Button size="l" appearance="accent" before={<Icon16Cancel />} />
        </div>
        <div className='command-card'>
          <Input
            id="example2"
            style={{ 'width': '100%' }}
            type="text"
            defaultValue="Команда"
          />
          <Button size="l" appearance="accent" before={<Icon16Cancel />} />
        </div>
        <Button style={{ 'width': '100%' }} size='l' className='add-command-btn'>
          <span>Добавить команду&nbsp; </span> <Icon20AddCircleFill />
        </Button>
        <Tabbar>
          <TabbarItem
            text="Далее"
          >
            <Icon20ArrowRightOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}