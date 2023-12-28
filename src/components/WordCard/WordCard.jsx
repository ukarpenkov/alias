import {
  AdaptivityProvider, Button, ButtonGroup, Card, CardGrid, Counter, Image, ModalCardBase, ViewWidth,

} from '@vkontakte/vkui';
import { Icon20CancelCircleFillRed, Icon20CheckCircleOn, Icon24Cancel, Icon24LogoVk } from '@vkontakte/icons';

export const WordCard = () => {
  return (
    <>
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
              <Icon20CheckCircleOn width={20} height={20} color='blue' />
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
    </>
  )
}