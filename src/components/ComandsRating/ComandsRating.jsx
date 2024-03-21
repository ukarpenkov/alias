import {
  Button, PanelHeader, Placeholder, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon16Cards2, Icon20FireCircleFillRed } from '@vkontakte/icons';
import { CommandsList } from '../CommandsList/CommandsList';
import { useSelector } from 'react-redux'

export const ComandsRating = ({ changePanel, result }) => {
  const commands = useSelector(state => state.game.commands)
  let activeCommandIndex = commands.findIndex(commnad => commnad.isActive === true)
  let currentCommand = commands[activeCommandIndex].name
  console.log(commands)
  return (
    <>
      <PanelHeader
      >Рейтинг</PanelHeader>
      <CommandsList result={result} />
      <div className='roundInfo'>
        <Placeholder
          icon={<Icon16Cards2 />}
          header={`Раунд ${1}`}
          action={<Button size="m">{currentCommand}</Button>}
        >
          Готовимся к игре
        </Placeholder>
      </div>
      <Tabbar>
        <TabbarItem
          text="Начать игру"
          onClick={() => changePanel('word-card')}
        >
          <Icon20FireCircleFillRed />
        </TabbarItem>
      </Tabbar>
    </>
  )
}