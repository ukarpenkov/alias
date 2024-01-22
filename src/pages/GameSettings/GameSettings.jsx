import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, CellButton, Checkbox, ContentCard, Counter, FormItem, FormLayout, FormLayoutGroup, Group, Header, Image, Input, Link, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, SegmentedControl, Select, Slider, Tabbar, TabbarItem, Tabs, TabsItem, Textarea, View, ViewWidth,

} from '@vkontakte/vkui';
import { Icon16Cancel, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';
import React, { useState } from 'react';


const addressItems = [
  { label: 'Почтовый индекс', name: 'zip' },
  { label: 'Страна', name: 'country' },
  { label: 'Город', name: 'city' },
];

export const GameSettings = () => {
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showPatronymic, setShowPatronymic] = React.useState(true);
  const [valueBasic, setValueBasic] = useState(24.4234);
  const onChange = (e) => {
    const { name, value } = e.currentTarget;

    const setStateAction = {
      email: setEmail,
      purpose: setPurpose,
    }[name];

    setStateAction && setStateAction(value);
  };

  const onShowPatronymic = () => setShowPatronymic(true);

  const onRemove = () => setShowPatronymic(false);

  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <PanelHeader>Настройки</PanelHeader>
        <Group>
          <FormLayout >
            <FormItem top={<h1 id="basic">Количество слов</h1>} >
              <Slider value={Number(valueBasic)} aria-labelledby="basic" onChange={setValueBasic} />
            </FormItem>
            <FormItem>
              <Input
                type="number"
                value={String(valueBasic)}
                onChange={(e) => setValueBasic(e.target.value)}
              />
            </FormItem>
            <FormItem top={<h1 id="basic">Время раунда</h1>}>
              <Slider value={Number(valueBasic)} aria-labelledby="basic" onChange={setValueBasic} />
            </FormItem>
            <FormItem>
              <Input
                type="number"
                value={String(valueBasic)}
                onChange={(e) => setValueBasic(e.target.value)}
              />
            </FormItem>
          </FormLayout>
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
  );
};

