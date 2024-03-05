import {
  Button, ButtonGroup, Counter, Group, ModalCardBase, PanelHeader, Tabbar, TabbarItem,

} from '@vkontakte/vkui';
import { Icon20ArrowRightOutline, Icon20CancelCircleFillRed, Icon20CheckCircleOn } from '@vkontakte/icons';
import { Timer } from '../Timer/Timer';
import './WordCard.css'
import { addGuessedWord } from '../../store/slice';
import { useDispatch, useSelector } from 'react-redux'


export const WordCard = ({ changePanel }) => {
  const dispatch = useDispatch()
  const commands = useSelector(state => state.game.commands)
  const setGuessedWord = () => {
    let id = commands.findIndex(item => item.isActive === true)
    console.log(id)


    dispatch(addGuessedWord({
      id
    }))
    console.log(commands)
  }
  return (
    <>
      <PanelHeader>Раунд {1}</PanelHeader>
      <div className='wordcard-container'>
        <Group>

          <ModalCardBase
            dismissButtonMode='undefined'
            style={{ width: 320 }}
            header="Заноза"
            actions={
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button size="l" mode="primary" stretched>
                  <Icon20CancelCircleFillRed width={20} height={20} />
                  пропуск
                </Button>
                <Button size="l" mode="primary" stretched
                  onClick={() => setGuessedWord()}>
                  <Icon20CheckCircleOn width={20} height={20} color='green' />
                  отгадано
                </Button>
              </ButtonGroup>
            }
          />

        </Group>
        <div className='current-result-wrapper '>
          <div className='current-result'>
            <Button size="m" after={<Counter>20</Counter>}>
              Отгадано
            </Button>
            <Button size="m" after={<Counter color='white' mode='primary'>8</Counter>} style={{ backgroundColor: 'red' }}>
              Пропущено
            </Button>
          </div >
        </div>
      </div>
      <div className='wordcard-container'>
        <h1> <Timer /></h1>
      </div>
      <Tabbar>
        <TabbarItem
          text="Далее"
          onClick={() => changePanel('words-edit')}
        >
          <Icon20ArrowRightOutline />
        </TabbarItem>
      </Tabbar>
    </>
  )
}