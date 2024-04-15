import {
  Button, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem,
  View,

} from '@vkontakte/vkui';
import { Icon16Replay, Icon20CrownCircleFillVkDating, Icon24SadFaceOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../store/slice';


export const Result = ({ changePanel }) => {
  const winner = useSelector(state => state.game.winner)
  const resetState = () => {
    changePanel('main')
    window.location.reload()
  }
  return (
    <View activePanel="result">
      <Panel id='result'>
        <PanelHeader
        >Результат</PanelHeader>
        <div className='gameInfo'>
          <Placeholder
            icon={<Icon20CrownCircleFillVkDating />}
            header={`Победитель`}
            action={<Button size="m">Команда {winner[0]} с результатом в {winner[1]} очков
            </Button>}
          >
          </Placeholder>
          <Placeholder
            icon={<Icon24SadFaceOutline />}

            action={<Button size="m">У команды {1} {80} очков
            </Button>}
          >
          </Placeholder>
        </div>
        <Tabbar>
          <TabbarItem
            text="Меню"
            onClick={() => resetState()}
          >
            <Icon16Replay />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}