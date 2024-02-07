import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, Input, ModalCardBase, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon16Cards2, Icon16Replay, Icon16SadFaceOutline, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20CheckCircleOutline, Icon20CrownCircleFillVkDating, Icon20ErrorCircleFillYellow, Icon20FireCircleFillRed, Icon24Add, Icon24SadFaceOutline, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications, Icon56UsersOutline } from '@vkontakte/icons';
import './MainPage.css'

export const MainPage = ({ changePanel }) => {
  return (


    <div className='mainpage-wrapper'>
      <div className='game-logo'>
        <div className='game-logo-text'>Alias</div>
      </div>
      <div className='mainpage-btns'>
        <Button size="l" mode="primary" stretched style={{
          width: '300px',
          height: '50px',
          backgroundColor: 'yellow'
        }}
          onClick={() => changePanel('commands')}>
          <Icon20FireCircleFillRed width={20} height={20} color='green' />
          &nbsp;НАЧАТЬ ИГРУ
        </Button>
        <Button size="l" mode="primary" stretched style={{
          width: '300px',
          height: '50px',
          backgroundColor: 'yellow'
        }}
          onClick={() => changePanel('rules')}
        >
          <Icon20ErrorCircleFillYellow width={20} height={20} color='green' />
          &nbsp;ПРАВИЛА
        </Button>
      </div>
    </div>


  )
}