import { StartPanel } from "./pages/StartPanel/StartPanel";
import { WordCard } from "./components/WordCard/WordCard";

import { AppRoot, Counter, Panel, View } from '@vkontakte/vkui';

function App() {
  return (

    <AppRoot>

      {/* <View id="main" activePanel="round">
        <Panel id="round">
          <WordCard />
          
        </Panel>

      </View> */}

      <StartPanel />
    </AppRoot>



  );
}

export default App;
