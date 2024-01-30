import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, CellButton, Checkbox, ContentCard, Counter, FormItem, FormLayout, FormLayoutGroup, Group, Header, Image, Input, Link, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, SegmentedControl, Select, Slider, Tabbar, TabbarItem, Tabs, TabsItem, Textarea, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeRoundTime, chengeWordsCount, setTime } from '../../store/slice';
import { isDisabled } from '@testing-library/user-event/dist/utils';


export const GameSettings = () => {
  const settings = useSelector(state => state.game.settings)
  console.log(settings)
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
    <View activePanel="new-user">
      <Panel id="new-user">
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
          >
            <Icon20ArrowRightOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  );
};

