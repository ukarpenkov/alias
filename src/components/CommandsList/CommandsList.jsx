import { CommandItem } from "../CommandItem/CommandItem"
import { useSelector } from 'react-redux'
import { editCommand, removeCommand } from '../../store/slice';
import { useDispatch } from 'react-redux'
import { useState } from "react";


export const CommandsList = ({ result, setCommandsCount, commandsCount }) => {

  const commands = useSelector(state => state.game.commands)
  const dispatch = useDispatch()
  const handleRemoveCommand = (id) => {
    dispatch(removeCommand(id))
    setCommandsCount(commandsCount - 1)

  }
  const handleEditCommand = (name, id) => {
    dispatch(editCommand(name, id))
  }


  return <>
    {commands.map((item) => <CommandItem key={item.id} {...item} removeCommand={handleRemoveCommand} editCommand={handleEditCommand} result={result}
      commandsCount={commandsCount}
    />)}
  </>



}