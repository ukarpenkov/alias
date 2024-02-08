import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, Input, ModalCardBase, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon16Cards2, Icon16Replay, Icon16SadFaceOutline, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20CrownCircleFillVkDating, Icon20FireCircleFillRed, Icon24Add, Icon24SadFaceOutline, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications, Icon56UsersOutline } from '@vkontakte/icons';


export const Result = ({ changePanel }) => {
  return (
    <>
      <PanelHeader
      >Результат</PanelHeader>
      <div className='gameInfo'>
        <Placeholder
          icon={<Icon20CrownCircleFillVkDating />}
          header={`Победитель`}
          action={<Button size="m">Команда {1} с результатом в {80} очков
          </Button>}
        >
        </Placeholder>
        <Placeholder
          icon={<Icon24SadFaceOutline />}

          action={<Button size="m">У команды {1} {80} очков
          </Button>}
        >
        </Placeholder>
      </div>
      <Tabbar>
        <TabbarItem
          text="Меню"
          onClick={() => changePanel('main')}
        >
          <Icon16Replay />
        </TabbarItem>
      </Tabbar>
    </>

  )
}