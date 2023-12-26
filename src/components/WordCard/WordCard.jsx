import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  CardGrid,
  Card,
} from '@vkontakte/vkui';

export const WordCard = () => {
  return (
    <View activePanel="card">
      <Panel id="card">
        <PanelHeader>Card</PanelHeader>
        <Group>
          <Group mode="plain" header={<Header mode="secondary">Дефолтный стиль</Header>}>
            <CardGrid size="l">
              <Card>
                <div style={{ height: 96 }} />
              </Card>
            </CardGrid>
          </Group>
        </Group>
      </Panel>
    </View>
  )
}