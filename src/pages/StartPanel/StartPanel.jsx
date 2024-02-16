import {
  Alert,
  Button, PanelHeader, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon20AddCircleFill, Icon20ArrowRightOutline, } from '@vkontakte/icons';
import './StartPanel.css'
import { useDispatch, useSelector } from 'react-redux'
import { CommandsList } from '../../components/CommandsList/CommandsList';
import { addCommand } from '../../store/slice';
import { useState } from 'react';

export const StartPanel = ({ changePanel, result }) => {


  const commands = useSelector(state => state.game.commands)
  const [commandsCount, setCommandsCount] = useState(commands.length)

  const dispatch = useDispatch()
  const addNewCommnadWithWords = () => {

    dispatch(addCommand({
      id: Date.now(), name: 'Команда без названия', score: 0, round: 1,
      words: ['1', '2']
    }))
    setCommandsCount(commandsCount + 1)

  }
  console.log(commandsCount)
  return (

    <>
      <PanelHeader
      >Команды</PanelHeader>

      <CommandsList result={result} setCommandsCount={setCommandsCount} commandsCount={commandsCount} />
      {commandsCount <= 4 ? <Button
        onClick={() => addNewCommnadWithWords()}
        style={{ 'width': '100%' }} size='l' className='add-command-btn'>
        <span>Добавить команду&nbsp; </span> <Icon20AddCircleFill />
      </Button> : <Button

        style={{ 'width': '100%', backgroundColor: 'red' }} size='l' className='add-command-btn'>
        <span>Невозможно добавить более 5 команд&nbsp; </span> <Icon20AddCircleFill />
      </Button>}

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