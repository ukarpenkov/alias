import {
  Button, Input, Panel, PanelHeader, Tabbar, TabbarItem, View,
} from '@vkontakte/vkui';
import { Icon20ChevronRight2, Icon20ThumbsUp, Icon20ThumbsUpOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux'
import { addNetxRound, changeGuessedWordsFunc, changeNotGuessedWordsFunc, setActiveCommand } from '../../store/slice';

export const WordsEdit = ({ changePanel }) => {
  const commands = useSelector(state => state.game.commands)
  let currentCommandIndex = commands.findIndex(item => item.isActive === true)
  let currentCommand = commands[currentCommandIndex]
  let guessedWords = currentCommand.round[currentCommand.round.length - 1].guessedWords
  let notGuessedWords = currentCommand.round[currentCommand.round.length - 1].notGuessedWords
  const dispatch = useDispatch()

  console.log('comp', commands)
  const changeGuessedWords = (word) => {
    dispatch(changeGuessedWordsFunc({
      word: word
    }))
    console.log('bad', commands)
  }
  const changeNotGuessedWords = (word) => {
    dispatch(changeNotGuessedWordsFunc({
      word: word
    }))
    console.log('good', commands)
  }

  const setNextCommand = () => {
    dispatch(addNetxRound())
    dispatch(setActiveCommand())
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