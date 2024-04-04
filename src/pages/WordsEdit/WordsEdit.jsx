import {
  Button, Input, Panel, PanelHeader, Tabbar, TabbarItem, View,
} from '@vkontakte/vkui';
import { Icon20ChevronRight2, Icon20ThumbsUp, Icon20ThumbsUpOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux'
import { addNetxRound, changeGuessedWordsFunc, changeNotGuessedWordsFunc, setActiveCommand } from '../../store/slice';

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

  const checkWinWordsCount = () => {
    let sumResult = [...commands]
    sumResult.forEach(a => {
      let result = a.round.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.guessedWords.length
      }, 0)
      if (result >= goal) {
        console.log('goal ЕСТЬ')
        return true
      }
    })
    return false
  }

  const setNextCommand = () => {
    dispatch(addNetxRound())
    dispatch(setActiveCommand())
    let isLastCommand = currentCommand === commands[commands.length - 1]
    if (isLastCommand && checkWinWordsCount()) {
      console.log('ПОБКДВ!!!!!!!!!!!!!!!!!!!')
    }
    checkWinWordsCount()
    changePanel('commands-rating')
  }



  return (
    <View activePanel="wordsEdit">
      <Panel id='wordsEdit'>
        <PanelHeader
        >Очки раунда</PanelHeader>
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