import {
  Button, Input,
  Tooltip,
} from '@vkontakte/vkui';

import { Icon16Cancel, } from '@vkontakte/icons';



export const CommandItem = ({ name, id, score, removeCommand, editCommand, result, commandsCount }) => {


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
      {commandsCount <= 2 ?
        <Button size="l"
          disabled={(result === 'false') ? false : true}
          appearance="accent" before={(result === 'false') ? <Icon16Cancel /> : score} />
        :
        <Button size="l"
          disabled={(result === 'false') ? false : true}
          onClick={() => {
            removeCommand(id)
          }}
          appearance="accent" before={(result === 'false') ? <Icon16Cancel /> : score} />

      }


    </div>
  )
}