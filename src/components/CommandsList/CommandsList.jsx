import { CommandItem } from "../CommandItem/CommandItem"


export const CommandsList = () => {
  const arr = ['один', 'два']
  return <>{arr.map((item) => <CommandItem name={item} />)}
  </>



}