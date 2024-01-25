import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, CellButton, Checkbox, ContentCard, Counter, FormItem, FormLayout, FormLayoutGroup, Group, Header, Image, Input, Link, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, SegmentedControl, Select, Slider, Tabbar, TabbarItem, Tabs, TabsItem, Textarea, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setTime } from '../../store/slice';


export const GameSettings = () => {
  const settings = useSelector(state => state.game.settings)
  console.log(settings)
  const dispatch = useDispatch()
  //

  const [valueBasic, setValueBasic] = useState(settings.roundTime);

  const changeWordsCount = (a) => {
    dispatch(setTime(a))
    setValueBasic(settings.roundTime)
    console.log(settings.roundTime)
  }


  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <PanelHeader>Настройки</PanelHeader>
        <Group>
          <FormLayout >
            <FormItem top={<h1 id="words">Количество слов</h1>} >
              <Slider value={String(valueBasic)} step={10} aria-labelledby="words" onChange={setValueBasic}
              // onTouchEnd={() => { dispatch(setTime(valueBasic)) }}
              />
            </FormItem>
            <FormItem>
              <Input
                type="number"
                value={String(valueBasic)}
                onChange={(e) => {
                  console.log(e.target.value)
                }}
              />
            </FormItem>
            <FormItem top={<h1 id="time">Время раунда, сек.</h1>}>
              <Slider step={10} value={String(settings.roundTime)} aria-labelledby="time" onChange={() => {
                console.log(settings)
              }} />
            </FormItem>
            <FormItem>
              <Input
                type="number"
                value={String(settings.roundTime)}
                onChange={() => {
                  console.log(settings)
                }}
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

