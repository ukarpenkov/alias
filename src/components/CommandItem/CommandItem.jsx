import {
  Button, Input,
} from '@vkontakte/vkui';

import { Icon16Cancel, } from '@vkontakte/icons';

import { useSelector } from 'react-redux'
import { actions, addCommand } from '../../store/slice';
import { useDispatch } from 'react-redux'

export const CommandItem = ({ name, id, removeCommand, editCommand }) => {
  return (
    <div className='command-card'>
      <Input
        style={{ 'width': '100%' }}
        type="text"
        onFocus={(e) => {
          e.target.value = ''
        }}
        onChange={(e) => {

          let newName = e.target.value
          editCommand({ name: newName, id })

        }}
        defaultValue={name}
      />
      <Button size="l"
        onClick={() => {
          removeCommand(id)
        }}
        appearance="accent" before={<Icon16Cancel />} />
    </div>
  )
}