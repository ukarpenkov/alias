import { CommandItem } from "../CommandItem/CommandItem"
import { useSelector } from 'react-redux'
import { addWords, editCommand, removeCommand } from '../../store/slice';
import { useDispatch, } from 'react-redux'



export const CommandsList = ({ result, setCommandsCount, commandsCount, setWordsToCommands }) => {
  const words = useSelector(state => state.game.words)
  const setWordsToCommandsWhenRemove = () => {
    let array = words
    let size = words.length / (commandsCount - 1)
    let subarray = []
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      subarray[i] = array.slice((i * size), (i * size) + size);
    }
    dispatch(addWords({
      words: subarray
    }))
  }
  const commands = useSelector(state => state.game.commands)

  const dispatch = useDispatch()
  const handleRemoveCommand = (id) => {
    dispatch(removeCommand(id))
    setCommandsCount(commandsCount - 1)
    setWordsToCommandsWhenRemove()

  }
  const handleEditCommand = (name, id) => {
    dispatch(editCommand(name, id))
  }
  return <>
    {commands.map((item) => <CommandItem key={item.id} {...item}
      currentScore={item.round.reduce((p, c) => p + c.guessedWords.length, 0)}
      removeCommand={handleRemoveCommand} editCommand={handleEditCommand} result={result}
      commandsCount={commandsCount}
    />)}
  </>



}