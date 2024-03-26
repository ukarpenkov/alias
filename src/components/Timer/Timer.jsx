import React from 'react';
import { useSelector } from 'react-redux'
import {
  Button,
} from '@vkontakte/vkui';
import { Icon20Clock } from '@vkontakte/icons';

export const Timer = ({ changePanel }) => {
  const seconds = useSelector(state => state.game.settings.roundTime)
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]);

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

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>
        {!over ? `${s.toString().padStart(2, '0')}` : timeIsUpBtn()}
      </p>
    </div>

  )
}