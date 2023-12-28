import {
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  CardGrid,
  Card,
} from '@vkontakte/vkui';

export const WordCard = () => {
  return (
    <View activePanel="wordCard">
      <Panel id="wordCard">
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