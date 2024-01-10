import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, Input, ModalCardBase, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon16Cards2, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20FireCircleFillRed, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications, Icon56UsersOutline } from '@vkontakte/icons';
export const ComandsRating = () => {
  return (
    <Panel>
      <PanelHeader
      >Рейтинг</PanelHeader>
      <div className='command-card'>
        <Input
          id="example2"
          style={{ 'width': '100%' }}
          type="text"
          defaultValue="Команда"
        />
        <Button size="l" appearance="accent" before={10} />
      </div>
      <div className='command-card'>
        <Input
          id="example2"
          style={{ 'width': '100%' }}
          type="text"
          defaultValue="Команда"
        />
        <Button size="l" appearance="accent" before={10} />
      </div>

      <div className='roundInfo'>
        <Placeholder
          icon={<Icon16Cards2 />}
          header={`Раунд ${1}`}
          action={<Button size="m">Команда {1}</Button>}
        >
          Готовимся к игре
        </Placeholder>
      </div>
      <Tabbar>
        <TabbarItem
          text="Начать игру"
        >
          <Icon20FireCircleFillRed />
        </TabbarItem>
      </Tabbar>
    </Panel>
  )
}