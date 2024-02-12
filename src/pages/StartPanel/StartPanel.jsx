import {
  Button, PanelHeader, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon20AddCircleFill, Icon20ArrowRightOutline, } from '@vkontakte/icons';
import './StartPanel.css'
import { useDispatch } from 'react-redux'
import { CommandsList } from '../../components/CommandsList/CommandsList';
import { addCommand } from '../../store/slice';

export const StartPanel = ({ changePanel, result }) => {

  const dispatch = useDispatch()
  return (

    <>
      <PanelHeader
      >Команды</PanelHeader>

      <CommandsList result={result} />
      <Button
        onClick={() => {
          dispatch(addCommand({ id: Date.now(), name: 'Команда без названия', score: 0 }))
        }}
        style={{ 'width': '100%' }} size='l' className='add-command-btn'>
        <span>Добавить команду&nbsp; </span> <Icon20AddCircleFill />
      </Button>
      <Tabbar>
        <TabbarItem
          onClick={() => changePanel('settings')}
          text="Далее"
        >
          <Icon20ArrowRightOutline />
        </TabbarItem>
      </Tabbar>
    </>

  )
}