import {
  Button, Input, Panel, PanelHeader, Tabbar, TabbarItem, View,

} from '@vkontakte/vkui';
import { Icon20ChevronRight2, Icon20ThumbsUpOutline } from '@vkontakte/icons';


export const WordsEdit = () => {
  return (
    <View activePanel="wordsEdit">
      <Panel id='wordsEdit'>
        <PanelHeader
        >Очки раунда</PanelHeader>
        <div className='command-card'>
          <Input
            id="example2"
            style={{ 'width': '100%' }}
            type="text"
            defaultValue="Кошка"
          />
          <Button size="l" appearance="accent" before={<Icon20ThumbsUpOutline />} />
        </div>
        <div className='command-card'>
          <Input
            id="example2"
            style={{ 'width': '100%' }}
            type="text"
            defaultValue="Мышка"
          />
          <Button size="l" appearance="accent" before={<Icon20ThumbsUpOutline />} />
        </div>


        <Tabbar>
          <TabbarItem
            text="Продолжить"
          >
            <Icon20ChevronRight2 />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  )
}