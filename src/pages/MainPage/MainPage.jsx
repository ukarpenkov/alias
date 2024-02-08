import {
  Button,

} from '@vkontakte/vkui';
import { Icon20ErrorCircleFillYellow, Icon20FireCircleFillRed } from '@vkontakte/icons';
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