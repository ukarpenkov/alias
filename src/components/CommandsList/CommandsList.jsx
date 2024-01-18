import { CommandItem } from "../CommandItem/CommandItem"
import { useSelector } from 'react-redux'

export const CommandsList = () => {
  const commands = useSelector(state => state.game.commands)
  console.log(commands)
  return <>
    {commands.map((item) => <CommandItem name={item} />)}
  </>



}