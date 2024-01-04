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
          <FormLayout>
            <FormItem
              htmlFor="email"
              top="E-mail"
              status={email ? 'valid' : 'error'}
              bottom={
                email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'
              }
              bottomId="email-type"
            >
              <Input
                aria-labelledby="email-type"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </FormItem>




            <FormItem top={<span id="basic">Basic example</span>}>
              <Slider value={Number(valueBasic)} aria-labelledby="basic" onChange={setValueBasic} />
            </FormItem>
            <FormItem>
              <Input
                type="number"
                value={String(valueBasic)}
                onChange={(e) => setValueBasic(e.target.value)}
              />
            </FormItem>
            <FormItem top="Пароль" htmlFor="pass">
              <Input id="pass" type="password" placeholder="Введите пароль" />
            </FormItem>

            <FormItem
              bottom="Пароль может содержать только латинские буквы и цифры."
              bottomId="passwordDescription"
            >
              <Input
                type="password"
                placeholder="Повторите пароль"
                aria-labelledby="passwordDescription"
              />
            </FormItem>

            <FormLayoutGroup mode="horizontal">
              <FormItem htmlFor="name" top="Имя">
                <Input id="name" />
              </FormItem>
              <FormItem htmlFor="lastname" top="Фамилия">
                <Input id="lastname" />
              </FormItem>
            </FormLayoutGroup>

            {!showPatronymic ? (
              <CellButton onClick={onShowPatronymic}>Указать отчество</CellButton>
            ) : (
              <FormItem
                htmlFor="patronymic"
                removable
                onRemove={onRemove}
                top="Отчество"
                bottom="Если у вас нет отчества — удалите этот пункт."
                bottomId="patronymicDescription"
              >
                <Input id="patronymic" aria-labelledby="patronymicDescription" />
              </FormItem>
            )}

            <FormItem top="Пол" htmlFor="gender-select-id">
              <Select
                id="gender-select-id"
                placeholder="Выберите пол"
                options={[
                  {
                    value: '0',
                    label: 'Мужской',
                  },
                  {
                    value: '1',
                    label: 'Женский',
                  },
                ]}
              />
            </FormItem>

            <FormItem top="Тип документа">
              <SegmentedControl
                size="m"
                name="type"
                options={[
                  {
                    label: 'Паспорт РФ',
                    value: 'russian',
                  },
                  {
                    label: 'Заграничный',
                    value: 'international',
                  },
                ]}
              />
            </FormItem>

            {addressItems.map(({ label, name }) => (
              <FormItem htmlFor={label} top={label} key={name}>
                <Input id={label} name={name} />
              </FormItem>
            ))}
            <FormItem
              top="Цель поездки"
              htmlFor="purpose-of-the-trip-select-id"
              bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
              status={purpose ? 'valid' : 'error'}
            >
              <Select
                id="purpose-of-the-trip-select-id"
                placeholder="Выберите цель поездки"
                onChange={onChange}
                value={purpose}
                name="purpose"
                options={[
                  {
                    value: '0',
                    label: 'Бизнес или работа',
                  },
                  {
                    value: '1',
                    label: 'Индивидуальный туризм',
                  },
                  {
                    value: '2',
                    label: 'Посещение близких родственников',
                  },
                ]}
              />
            </FormItem>
            <FormItem htmlFor="about" top="О себе">
              <Textarea id="about" />
            </FormItem>
            <Checkbox>
              Согласен со всем <Link>этим</Link>
            </Checkbox>
            <FormItem>
              <Button size="l" stretched>
                Зарегистрироваться
              </Button>
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

