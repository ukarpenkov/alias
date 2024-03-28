import {
  Button, ButtonGroup, Counter, Group, ModalCardBase, PanelHeader, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon20CancelCircleFillRed, Icon20CheckCircleOn, Icon20Clock } from '@vkontakte/icons';
import { Timer } from '../Timer/Timer';
import './WordCard.css'
import { addGuessedWord, addNotGuessedWord } from '../../store/slice';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


export const WordCard = ({ changePanel }) => {
  const seconds = useSelector(state => state.game.settings.roundTime)
  const [over, setOver] = useState(false);
  const [[s], setTime] = useState([seconds]);
  const dispatch = useDispatch()
  const commands = useSelector(state => state.game.commands)
  const setGuessedWord = () => {
    dispatch(addGuessedWord({}))
  }
  const setNotGuessedWord = () => {
    dispatch(addNotGuessedWord({}))
    console.log(commands)
  }
  let currentCommandIndex = commands.findIndex(item => item.isActive === true)
  let currentWord = commands[currentCommandIndex].words[0]
  let guessedWordsCount = commands[currentCommandIndex]
    .round[(commands[currentCommandIndex].round.length) - 1]
    .guessedWords.length
  let notGuessedWordsCount = commands[currentCommandIndex]
    .round[(commands[currentCommandIndex].round.length) - 1]
    .notGuessedWords.length
  const timeIsUpBtn = () => {
    return <Button size="l" mode="primary" stretched style={{
      width: '300px',
      height: '50px',
      backgroundColor: 'yellow'
    }}
      onClick={() => changePanel('words-edit')}>
      <Icon20Clock width={20} height={20} />
      &nbsp;Результаты
    </Button>
  }
  const tick = () => {
    if (s === 0) {
      setOver(true);
    } else {
      setTime([s - 1]);
    }
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <>
      <PanelHeader>Раунд {commands[currentCommandIndex]
        .round[commands[currentCommandIndex].round.length - 1].number}</PanelHeader>
      <div className='wordcard-container'>
        <Group>
          <ModalCardBase
            dismissButtonMode='undefined'
            style={{ width: 320 }}
            header={currentWord}
            actions={
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button size="l" mode="primary" stretched
                  onClick={() => setNotGuessedWord()}>
                  <Icon20CancelCircleFillRed width={20} height={20} />
                  пропуск
                </Button>
                <Button size="l" mode="primary" stretched
                  onClick={() => setGuessedWord()}>
                  <Icon20CheckCircleOn width={20} height={20} color='green' />
                  отгадано
                </Button>
              </ButtonGroup>
            }
          />
        </Group>
        <div className='current-result-wrapper '>
          <div className='current-result'>
            <Button size="m" after={<Counter>{guessedWordsCount}</Counter>}>
              Отгадано
            </Button>
            <Button size="m" after={<Counter color='white' mode='primary'>{notGuessedWordsCount}</Counter>} style={{ backgroundColor: 'red' }}>
              Пропущено
            </Button>
          </div >
        </div>
      </div>
      <div className='wordcard-container'>
        <h1>
          {!over ? <Timer s={[s]} /> : timeIsUpBtn()}
        </h1>
      </div>
    </>
  )
}