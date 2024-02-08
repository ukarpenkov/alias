import {
  Button, PanelHeader, Placeholder, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon16Cards2, Icon20FireCircleFillRed } from '@vkontakte/icons';
import { CommandsList } from '../CommandsList/CommandsList';
export const ComandsRating = ({ changePanel, result }) => {
  return (
    <>
      <PanelHeader
      >Рейтинг</PanelHeader>
      <CommandsList result={result} />
      <div className='roundInfo'>
        <Placeholder
          icon={<Icon16Cards2 />}
          header={`Раунд ${1}`}
          action={<Button size="m">Команда {1}</Button>}
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