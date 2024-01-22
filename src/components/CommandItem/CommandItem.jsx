import {
  AdaptivityProvider, Avatar, Badge, Button, ButtonGroup, Card, CardGrid, Cell, ContentCard, Counter, Group, Header, Image, Input, ModalCardBase, Panel, PanelHeader, PanelHeaderClose, Tabbar, TabbarItem, Tabs, TabsItem, View, ViewWidth,

} from '@vkontakte/vkui';

import { Icon16Cancel, Icon20AddCircleFill, Icon20ArrowRightOutline, Icon24Add, Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Notifications } from '@vkontakte/icons';

import { useSelector } from 'react-redux'
import { actions, addCommand } from '../../store/slice';
import { useDispatch } from 'react-redux'

export const CommandItem = ({ name, id, removeCommand }) => {
  return (
    <div className='command-card'>
      <Input

        style={{ 'width': '100%' }}
        type="text"
        defaultValue={name}
      />
      <Button size="l"
        onClick={() => {
          removeCommand(id)
        }}
        appearance="accent" before={<Icon16Cancel />} />
    </div>
  )
}