import {
  Button, Input, Panel, PanelHeader, Tabbar, TabbarItem, View,

} from '@vkontakte/vkui';
import { Icon20ChevronRight2, Icon20ThumbsDownOutline, Icon20ThumbsUp, Icon20ThumbsUpOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { changeGuessedWordsFunc } from '../../store/slice';

export const WordsEdit = ({ changePanel }) => {
  const commands = useSelector(state => state.game.commands)
  let currentCommandIndex = commands.findIndex(item => item.isActive === true)
  let currentCommand = commands[currentCommandIndex]
  let guessedWords = currentCommand.round[currentCommand.round.length - 1].guessedWords
  let notGuessedWords = currentCommand.round[currentCommand.round.length - 1].notGuessedWords
  const dispatch = useDispatch()

  console.log(commands)
  const changeGuessedWords = (word) => {

    dispatch(changeGuessedWordsFunc({
      word: word
    }))
    console.log(commands)
  }
  // let words = guessedWords.concat(notGuessedWords)
  return (
    <View activePanel="wordsEdit">
      <Panel id='wordsEdit'>
        <PanelHeader
        >Очки раунда</PanelHeader>
        {
          guessedWords.map(word => {
            return <div className='command-card'>
              <Input
                disabled
                style={{ 'width': '100%' }}
                type="text"
                defaultValue={word}
              />
              <Button size="l" appearance="accent"
                onClick={() => changeGuessedWords(word)}
                before={
                  guessedWords.indexOf(word) !== -1 ?
                    <Icon20ThumbsUp /> : <Icon20ThumbsDownOutline />} />
            </div>
          })
        }
        {
          notGuessedWords.map(word => {
            return <div className='command-card'>
              <Input
                disabled
                style={{ 'width': '100%' }}
                type="text"
                defaultValue={word}
              />
              <Button size="l" appearance="accent" before={<Icon20ThumbsUpOutline />} />
            </div>
          })
        }


        <Tabbar>
          <TabbarItem
            text="Продолжить"
            onClick={() => changePanel('commands-rating')}
          >
            <Icon20ChevronRight2 />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}