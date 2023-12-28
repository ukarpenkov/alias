import { WordCard } from "./components/WordCard/WordCard";

import { AppRoot, Counter, Panel, View } from '@vkontakte/vkui';

function App() {
  return (

    <AppRoot>

      <View id="main" activePanel="round">
        <Panel id="round">
          <WordCard />
        </Panel>

      </View>
    </AppRoot>



  );
}

export default App;
