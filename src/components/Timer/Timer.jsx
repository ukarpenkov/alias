import React from 'react';
import { useSelector } from 'react-redux'
import {
  Button,
} from '@vkontakte/vkui';
import { Icon20Clock } from '@vkontakte/icons';

export const Timer = ({ s }) => {

  console.log(s.toString().padStart(2, '0'))
  return (
    <div>
      <p>
        {s.toString().padStart(2, '0')}
      </p>
    </div>

  )
}