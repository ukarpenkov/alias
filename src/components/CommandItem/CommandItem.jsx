import {
  Button, Input,
} from '@vkontakte/vkui';

import { Icon16Cancel, } from '@vkontakte/icons';


export const CommandItem = ({ name, id, removeCommand, editCommand, result }) => {
  console.log('first', result, result === 'false')

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
        disabled={(result === 'false') ? false : true}
        onClick={() => {
          removeCommand(id)
        }}
        appearance="accent" before={(result === 'false') ? <Icon16Cancel /> : 'HI'} />
    </div>
  )
}