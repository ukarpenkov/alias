import {
  Button, PanelHeader, Placeholder, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon16Cards2, Icon20FireCircleFillRed } from '@vkontakte/icons';
import { CommandsList } from '../CommandsList/CommandsList';
import { useSelector } from 'react-redux'

export const ComandsRating = ({ changePanel, result }) => {
  const round = useSelector(state => state.game.settings.currentRound)
  const clgState = useSelector(state => state.game)
  console.log(clgState)

  const commandsList = useSelector(state => [...state.game.commands].map(item => item.name))

  return (
    <>
      <PanelHeader
      >Рейтинг</PanelHeader>
      <CommandsList result={result} />
      <div className='roundInfo'>
        <Placeholder
          icon={<Icon16Cards2 />}
          header={`Раунд ${1}`}
          action={<Button size="m">Команда {round}</Button>}
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