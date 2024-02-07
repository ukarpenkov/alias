import { StartPanel } from "./pages/StartPanel/StartPanel";
import { WordCard } from "./components/WordCard/WordCard";
import { Provider } from 'react-redux'
import { AppRoot, Counter, Panel, View } from '@vkontakte/vkui';
import { GameSettings } from "./pages/GameSettings/GameSettings";
import { CurrentInfo } from "./pages/CurrentInfo/CurrentInfo";
import { Result } from "./pages/Result/Result";
import { WordsEdit } from "./pages/WordsEdit/WordsEdit";
import { store } from "./store/store";
import { MainPage } from "./pages/MainPage/MainPage";
import { Rules } from "./pages/Rules/Rules";
import { useState } from "react";
import { ComandsRating } from "./components/ComandsRating/ComandsRating";


function App() {
  const [activePanel, setActivePanel] = useState('main');

  const changePanel = (id) => {
    setActivePanel(id)
  }

  return (

    <AppRoot>
      <Provider store={store}>
        {/* <View id="main" activePanel="round">
          <Panel id="round">
            <WordCard />

          </Panel>

        </View> */}
        <View activePanel={activePanel}>
          <Panel id="main">
            <MainPage changePanel={changePanel} />
          </Panel>
          <Panel id="rules">
            <Rules changePanel={changePanel} />
          </Panel>
          <Panel id="commands">
            <StartPanel changePanel={changePanel} />
          </Panel>

          <Panel id="settings">
            <GameSettings changePanel={changePanel} />
          </Panel>
          <Panel id='commands-rating'>
            <ComandsRating />
          </Panel>

        </View>

      </Provider>
    </AppRoot>



  );
}

export default App;
