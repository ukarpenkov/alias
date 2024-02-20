import {
  FormItem, FormLayout, Group, Input, PanelHeader, Slider, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon20ArrowRightOutline } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeRoundTime, chengeWordsCount } from '../../store/slice';


export const GameSettings = ({ changePanel }) => {
  const settings = useSelector(state => state.game.settings)
  const clgState = useSelector(state => state.game)
  console.log(clgState)
  const dispatch = useDispatch()


  const [wordsCount, setWordsCount] = useState(settings.wordsToWin)
  const [roundTime, setRoundTime] = useState(settings.roundTime)

  const changeWordsCountHandler = (e) => {
    dispatch(chengeWordsCount(Number(e.target.value)))
    setWordsCount(Number(e.target.value))
    debugger
    console.log(settings.wordsToWin)
  }

  useEffect(() => {
    dispatch(chengeWordsCount(Number(wordsCount)))
  }, [wordsCount])
  useEffect(() => {
    dispatch(changeRoundTime(Number(roundTime)))
  }, [roundTime])

  return (

    <>
      <PanelHeader>Настройки</PanelHeader>
      <Group>
        <FormLayout >
          <FormItem top={<h1 id="words">Количество слов</h1>} >
            <Slider value={Number(wordsCount)} step={1} min={1} aria-labelledby="words" onChange={setWordsCount}
            />
          </FormItem>
          <FormItem>
            <Input
              type="number"
              value={String(wordsCount)}
              onChange={(e) => setWordsCount(e.target.value)
              }
              disabled={true}
            />
          </FormItem>
          <FormItem top={<h1 id="time">Время раунда, сек.</h1>}>
            <Slider step={1} min={1} max={100} value={Number(roundTime)} aria-labelledby="time" onChange={setRoundTime} />
          </FormItem>
          <FormItem>
            <Input
              type="number"
              value={String(roundTime)}
              onChange={(e) => setRoundTime(e.target.value)}
              disabled={true}
            />
          </FormItem>
        </FormLayout>
      </Group>
      <Tabbar>
        <TabbarItem
          text="Далее"
          onClick={() => changePanel('commands-rating')}
        >
          <Icon20ArrowRightOutline />
        </TabbarItem>
      </Tabbar>
    </>
  );
};

