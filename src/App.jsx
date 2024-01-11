import { StartPanel } from "./pages/StartPanel/StartPanel";
import { WordCard } from "./components/WordCard/WordCard";

import { AppRoot, Counter, Panel, View } from '@vkontakte/vkui';
import { GameSettings } from "./pages/GameSettings/GameSettings";
import { CurrentInfo } from "./pages/CurrentInfo/CurrentInfo";
import { Result } from "./pages/Result/Result";

function App() {
  return (

    <AppRoot>

      {/* <View id="main" activePanel="round">
        <Panel id="round">
          <WordCard />
          
        </Panel>

      </View> */}

      <Result />
    </AppRoot>



  );
}

export default App;
