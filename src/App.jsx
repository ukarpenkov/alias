import { StartPanel } from "./pages/StartPanel/StartPanel";
import { WordCard } from "./components/WordCard/WordCard";

import { AppRoot, Counter, Panel, View } from '@vkontakte/vkui';
import { GameSettings } from "./pages/GameSettings/GameSettings";

function App() {
  return (

    <AppRoot>

      {/* <View id="main" activePanel="round">
        <Panel id="round">
          <WordCard />
          
        </Panel>

      </View> */}

      <GameSettings />
    </AppRoot>



  );
}

export default App;
