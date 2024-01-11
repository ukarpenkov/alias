import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, Input, ModalCardBase, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon16Cards2, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20ChevronRight2, Icon20FireCircleFillRed, Icon20ThumbsUpOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications, Icon56UsersOutline } from '@vkontakte/icons';


export const WordsEdit = () => {
  return (
    <View activePanel="wordsEdit">
      <Panel id='wordsEdit'>
        <PanelHeader
        >Очки раунда</PanelHeader>
        <div className='command-card'>
          <Input
            id="example2"
            style={{ 'width': '100%' }}
            type="text"
            defaultValue="Кошка"
          />
          <Button size="l" appearance="accent" before={<Icon20ThumbsUpOutline />} />
        </div>
        <div className='command-card'>
          <Input
            id="example2"
            style={{ 'width': '100%' }}
            type="text"
            defaultValue="Мышка"
          />
          <Button size="l" appearance="accent" before={<Icon20ThumbsUpOutline />} />
        </div>


        <Tabbar>
          <TabbarItem
            text="Продолжить"
          >
            <Icon20ChevronRight2 />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}