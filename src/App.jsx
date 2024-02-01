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


function App() {
  return (

    <AppRoot>
      <Provider store={store}>
        {/* <View id="main" activePanel="round">
          <Panel id="round">
            <WordCard />

          </Panel>

        </View> */}

        <MainPage />

      </Provider>
    </AppRoot>



  );
}

export default App;
