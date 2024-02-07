import {
  Button, Panel, PanelHeader, Tabbar, TabbarItem, View,

} from '@vkontakte/vkui';
import { Icon20AddCircleFill, Icon20ArrowRightOutline, } from '@vkontakte/icons';
import './StartPanel.css'
import { useDispatch } from 'react-redux'
import { CommandItem } from '../../components/CommandItem/CommandItem';
import { CommandsList } from '../../components/CommandsList/CommandsList';
import { addCommand } from '../../store/slice';

export const StartPanel = ({ changePanel }) => {
  console.log(changePanel)
  const dispatch = useDispatch()
  return (

    <>
      <PanelHeader
      >Команды</PanelHeader>

      <CommandsList />
      <Button
        onClick={() => {
          dispatch(addCommand({ id: Date.now(), name: 'Команда без названия' }))
        }}
        style={{ 'width': '100%' }} size='l' className='add-command-btn'>
        <span>Добавить команду&nbsp; </span> <Icon20AddCircleFill />
      </Button>
      <Tabbar>
        <TabbarItem
          onClick={() => changePanel('main')}
          text="Далее"
        >
          <Icon20ArrowRightOutline />
        </TabbarItem>
      </Tabbar>
    </>

  )
}