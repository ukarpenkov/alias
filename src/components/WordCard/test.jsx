import {
  AdaptivityProvider, Button, ButtonGroup, Image, ModalCardBase, ViewWidth,

} from '@vkontakte/vkui';
import { Icon20CancelCircleFillRed, Icon20CheckCircleOn, Icon24Cancel, Icon24LogoVk } from '@vkontakte/icons';

export const Test = () => {
  return (
    // <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
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
    // </AdaptivityProvider>
  )
}