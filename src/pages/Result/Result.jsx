import {
  Button, Panel, PanelHeader, Placeholder, Tabbar, TabbarItem,
  View,

} from '@vkontakte/vkui';
import { Icon16Replay, Icon20CrownCircleFillVkDating, Icon24SadFaceOutline } from '@vkontakte/icons';


export const Result = ({ changePanel }) => {
  return (
    <View activePanel="result">
      <Panel id='result'>
        <PanelHeader
        >Результат</PanelHeader>
        <div className='gameInfo'>
          <Placeholder
            icon={<Icon20CrownCircleFillVkDating />}
            header={`Победитель`}
            action={<Button size="m">Команда {1} с результатом в {80} очков
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
            onClick={() => changePanel('main')}
          >
            <Icon16Replay />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}