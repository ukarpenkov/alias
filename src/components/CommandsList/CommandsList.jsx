import { CommandItem } from "../CommandItem/CommandItem"
import { useSelector } from 'react-redux'
import { actions, addCommand, removeCommand } from '../../store/slice';
import { useDispatch } from 'react-redux'
export const CommandsList = () => {
  const commands = useSelector(state => state.game.commands)
  const dispatch = useDispatch()
  const handleRemoveCommand = (id) => {
    dispatch(removeCommand(id))
  }

  return <>
    {commands.map((item) => <CommandItem key={item.id} {...item} removeCommand={handleRemoveCommand} />)}
  </>



}