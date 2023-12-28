import { WordCard } from "./components/WordCard/WordCard";
import { Test } from "./components/WordCard/test";
import { AppRoot, Panel, View } from '@vkontakte/vkui';

function App() {
  return (
    <AppRoot>

      <View id="main" activePanel="general">
        <Panel id="general">
          <Test />
        </Panel>

      </View>
    </AppRoot>
  );
}

export default App;
