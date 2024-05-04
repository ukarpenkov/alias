import { StartPanel } from "./pages/StartPanel/StartPanel";
import { WordCard } from "./components/WordCard/WordCard";
import { Provider } from 'react-redux'
import { AppRoot, Panel, View } from '@vkontakte/vkui';
import { GameSettings } from "./pages/GameSettings/GameSettings";
import { Result } from "./pages/Result/Result";
import { store } from "./store/store";
import { MainPage } from "./pages/MainPage/MainPage";
import { Rules } from "./pages/Rules/Rules";
import { useState } from "react";
import { ComandsRating } from "./components/ComandsRating/ComandsRating";
import { WordsEdit } from "./pages/WordsEdit/WordsEdit";


function App() {
  const [activePanel, setActivePanel] = useState('main');
  const changePanel = (id) => {
    setActivePanel(id)
  }
console.log('fff');
  return (
    <AppRoot>
      <Provider store={store}>
        <View activePanel={activePanel}>
          <Panel id="main">
            <MainPage changePanel={changePanel} />
          </Panel>
          <Panel id="rules">
            <Rules changePanel={changePanel} />
          </Panel>
          <Panel id="commands">
            <StartPanel changePanel={changePanel} result='false' />
          </Panel>
          <Panel id="settings">
            <GameSettings changePanel={changePanel} />
          </Panel>
          <Panel id='commands-rating'>
            <ComandsRating changePanel={changePanel} result='true' />
          </Panel>
          <Panel id='word-card'>
            <WordCard changePanel={changePanel} />
          </Panel>
          <Panel id='words-edit'>
            <WordsEdit changePanel={changePanel} />
          </Panel>
          <Panel id='result'>
            <Result changePanel={changePanel} />
          </Panel>

        </View>

      </Provider>
    </AppRoot>



  );
}

export default App;
