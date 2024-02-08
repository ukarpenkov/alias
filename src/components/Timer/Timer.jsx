import React, { } from 'react';
import { useSelector } from 'react-redux'


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