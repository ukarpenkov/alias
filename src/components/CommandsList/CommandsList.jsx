import { CommandItem } from "../CommandItem/CommandItem"
import { useSelector } from 'react-redux'
import { editCommand, removeCommand } from '../../store/slice';
import { useDispatch } from 'react-redux'


export const CommandsList = ({ result }) => {
  const commands = useSelector(state => state.game.commands)
  const dispatch = useDispatch()
  const handleRemoveCommand = (id) => {
    dispatch(removeCommand(id))
  }
  const handleEditCommand = (name, id) => {
    dispatch(editCommand(name, id))
  }
  console.log(commands)
  return <>
    {commands.map((item) => <CommandItem key={item.id} {...item} removeCommand={handleRemoveCommand} editCommand={handleEditCommand} result={result} />)}
  </>



}