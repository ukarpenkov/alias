import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, CellButton, Checkbox, ContentCard, Counter, FormItem, FormLayout, FormLayoutGroup, Group, Header, Image, Input, Link, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, SegmentedControl, Select, Slider, Tabbar, TabbarItem, Tabs, TabsItem, Textarea, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeRoundTime, chengeWordsCount, setTime } from '../../store/slice';
import { isDisabled } from '@testing-library/user-event/dist/utils';


export const Timer = () => {
  const seconds = useSelector(state => state.game.settings.roundTime)
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]);

  const tick = () => {


    if (s === 0) {
      setOver(true);
    } else {
      setTime([s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>
        {!over ? `${s.toString().padStart(2, '0')}` : 'Время вышло!'}
      </p>
    </div>

  )
}