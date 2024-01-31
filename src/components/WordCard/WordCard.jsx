import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Group, Image, ModalCardBase, Panel, PanelHeader, Tabbar, TabbarItem, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon20ArrowRightOutline, Icon20CancelCircleFillRed, Icon20CheckCircleOn, Icon24Cancel, Icon24LogoVk } from '@vkontakte/icons';
import { Timer } from '../Timer/Timer';

export const WordCard = () => {
  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <PanelHeader>Раунд {1}</PanelHeader>
        <Group>
          <ModalCardBase
            dismissButtonMode='undefined'
            style={{ width: 320 }}
            header="Заноза"
            actions={
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button size="l" mode="primary" stretched>
                  <Icon20CancelCircleFillRed width={20} height={20} />

                </Button>
                <Button size="l" mode="primary" stretched>
                  <Icon20CheckCircleOn width={20} height={20} color='green' />
                </Button>
              </ButtonGroup>
            }
          />
          <div className='current-result'>
            <Button size="m" after={<Counter color='white' mode='primary'>8</Counter>} style={{ backgroundColor: 'red' }}>
              Пропущено
            </Button>
            <Button size="m" after={<Counter>20</Counter>}>
              Отгадано
            </Button>
          </div >
          <ModalCardBase
            dismissButtonMode='undefined'
            style={{ width: 320 }}

            actions={
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button size="l" mode="primary" stretched>
                  <Timer />
                </Button>
              </ButtonGroup>
            }
          />
        </Group>
        <Tabbar>
          <TabbarItem
            text="Далее"
          >
            <Icon20ArrowRightOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}