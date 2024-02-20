import {
  Alert,
  Button, PanelHeader, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon12ErrorCircleFill, Icon16AddCircleFillBlue, Icon16ErrorCircle, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon20Clear, Icon20ErrorCircleFillYellow, Icon24DismissSubstract, Icon24ErrorCircleFillGray, } from '@vkontakte/icons';
import './StartPanel.css'
import { useDispatch, useSelector } from 'react-redux'
import { CommandsList } from '../../components/CommandsList/CommandsList';
import { addCommand, addWords } from '../../store/slice';
import { useState } from 'react';

export const StartPanel = ({ changePanel, result }) => {


  const commands = useSelector(state => state.game.commands)
  const words = useSelector(state => state.game.words)
  const [commandsCount, setCommandsCount] = useState(commands.length)
  console.log(commands)
  const dispatch = useDispatch()

  const setWordsToCommands = (data) => {
    let array = data; //массив, можно использовать массив объектов
    let size = data.length / (commandsCount + 1); //размер подмассива
    let subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      subarray[i] = array.slice((i * size), (i * size) + size);
    }
    dispatch(addWords({
      words: subarray
    }))

  }
  const addNewCommnadWithWords = () => {
    dispatch(addCommand({
      id: Date.now(), name: 'Команда без названия', score: 0, round: 1,
      words: []
    }))
    setCommandsCount(commandsCount + 1)
    setWordsToCommands(words)

    console.log(commands)
  }




  return (

    <>
      <PanelHeader
      >Команды</PanelHeader>

      <CommandsList result={result} setCommandsCount={setCommandsCount} commandsCount={commandsCount} setWordsToCommands={setWordsToCommands} />
      {commandsCount <= 4 ? <Button
        onClick={() => addNewCommnadWithWords()}
        style={{ 'width': '100%', marginTop: '10px' }} size='l' className='add-command-btn'>
        <span>Добавить команду&nbsp; </span> <Icon20AddCircleFill />
      </Button> : <Button
        style={{ 'width': '100%', backgroundColor: 'red', marginTop: '10px' }} size='l' className='add-command-btn'>
        <span>Невозможно добавить более 5 команд&nbsp; </span> <Icon20ErrorCircleFillYellow />
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