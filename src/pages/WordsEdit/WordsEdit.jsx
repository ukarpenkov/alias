import {
  Button, Input, Panel, PanelHeader, Tabbar, TabbarItem, View,
} from '@vkontakte/vkui';
import { Icon20ChevronRight2, Icon20ThumbsUp, Icon20ThumbsUpOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux'
import { addNetxRound, changeGuessedWordsFunc, changeNotGuessedWordsFunc, setActiveCommand, setWinner } from '../../store/slice';

export const WordsEdit = ({ changePanel }) => {
  const commands = useSelector(state => state.game.commands)
  const goal = useSelector(state => state.game.settings.wordsToWin)
  let currentCommandIndex = commands.findIndex(item => item.isActive === true)
  let currentCommand = commands[currentCommandIndex]
  let guessedWords = currentCommand.round[currentCommand.round.length - 1].guessedWords
  let notGuessedWords = currentCommand.round[currentCommand.round.length - 1].notGuessedWords
  const dispatch = useDispatch()
  const changeGuessedWords = (word) => {
    dispatch(changeGuessedWordsFunc({
      word: word
    }))
  }
  const changeNotGuessedWords = (word) => {
    dispatch(changeNotGuessedWordsFunc({
      word: word
    }))
  }
  let winner = ''
  let maxPoints = 0
  const checkWinWordsCount = () => {
    let result = []
    let sumResult = [...commands]
    sumResult.forEach(a => {
      result.push(a.round.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.guessedWords.length
      }, 0))

    })
    let maxIndex = result.indexOf(Math.max.apply(null, result))
    let maxElement = result[maxIndex]
    const duplicates = result.filter((score) => score >= maxElement);
    if (result[maxIndex] >= goal && duplicates.length <= 1) {
      winner = commands[maxIndex].name
      maxPoints = result[maxIndex]
      return true
    }
    return false
  }

  const setNextCommand = () => {
    dispatch(addNetxRound())
    dispatch(setActiveCommand())
    let isLastCommand = currentCommand === commands[commands.length - 1]
    checkWinWordsCount()
    if (isLastCommand && checkWinWordsCount()) {
      dispatch(setWinner([winner, maxPoints]))
      changePanel('result')
      return
    }
    changePanel('commands-rating')
  }



  return (
    <View activePanel="wordsEdit">
      <Panel id='wordsEdit'>
        <h1
        >Очки раунда</h1>
        {
          guessedWords.map(word => {
            return <div className='command-card' key={word + 1}>
              <Input
                disabled
                style={{ 'width': '100%' }}
                type="text"
                defaultValue={word}
              />
              <Button size="l" appearance="accent"
                onClick={() => changeGuessedWords(word)}
                before={
                  <Icon20ThumbsUp />} />
            </div>
          })
        }
        {
          notGuessedWords.map(word => {
            return <div className='command-card' key={word}>
              <Input
                disabled
                style={{ 'width': '100%' }}
                type="text"
                defaultValue={word}
              />
              <Button size="l" appearance="accent"
                onClick={() => changeNotGuessedWords(word)}
                before={<Icon20ThumbsUpOutline />} />
            </div>
          })
        }
        <Tabbar>
          <TabbarItem
            text="Продолжить"
            onClick={() => setNextCommand()}
          >
            <Icon20ChevronRight2 />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}