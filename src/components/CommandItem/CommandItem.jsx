import {
  Button, Input,
} from '@vkontakte/vkui';

import { Icon16Cancel, } from '@vkontakte/icons';
import './CommandItem.css'
import { useEffect } from 'react';
import { useDispatch, } from 'react-redux'

export const CommandItem = ({ name, id, score, removeCommand, editCommand, result, commandsCount, currentScore }) => {

  return (
    <div className='command-card'>
      <Input
        style={{ 'width': '100%' }}
        type="text"
        disabled={(result === 'false') ? false : true}
        onFocus={(e) => {
          e.target.value = ''
        }}
        onChange={(e) => {
          let newName = e.target.value
          editCommand({ name: newName, id: id })
        }}
        defaultValue={name}
      />
      {commandsCount <= 2 ?
        <Button size="l"
          disabled={(result === 'false') ? false : true}
          appearance="accent" className='score-info' before={(result === 'false') ? <Icon16Cancel /> : `${currentScore}`} />
        :
        <Button size="l" className='score-info'
          disabled={(result === 'false') ? false : true}
          onClick={() => {
            removeCommand(id)
          }}
          appearance="accent" before={(result === 'false') ? <Icon16Cancel /> : `${currentScore}`} />
      }
    </div>
  )
}