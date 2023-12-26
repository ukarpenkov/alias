import {
  AdaptivityProvider, Button, ButtonGroup, Image, ModalCardBase, ViewWidth,

} from '@vkontakte/vkui';

export const Test = () => {
  return (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
      <ModalCardBase
        style={{ width: 320 }}
        icon={<Image borderRadius="l" />}
        header="Добавить игру «Загадки детства» в меню?"
        subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
        actions={
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button size="l" mode="primary" stretched>
              Да
            </Button>
            <Button size="l" mode="secondary" stretched>
              Позже
            </Button>
          </ButtonGroup>
        }
      />
    </AdaptivityProvider>
  )
}