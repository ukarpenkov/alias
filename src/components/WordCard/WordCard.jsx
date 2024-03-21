import {
  Button, ButtonGroup, Counter, Group, ModalCardBase, PanelHeader, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon20ArrowRightOutline, Icon20CancelCircleFillRed, Icon20CheckCircleOn } from '@vkontakte/icons';
import { Timer } from '../Timer/Timer';
import './WordCard.css'
import { addGuessedWord, addNotGuessedWord } from '../../store/slice';
import { useDispatch, useSelector } from 'react-redux'


export const WordCard = ({ changePanel }) => {
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
        <h1> <Timer /></h1>
      </div>
      <Tabbar>
        <TabbarItem
          text="Далее"
          onClick={() => changePanel('words-edit')}
        >
          <Icon20ArrowRightOutline />
        </TabbarItem>
      </Tabbar>
    </>
  )
}