import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { Icon24Back } from "@vkontakte/icons";

export const Rules = ({ changePanel }) => {
  return (
    <>
      <h1>Правила</h1>
      <div style={{ marginLeft: "-20px" }}>
        <ul>
          <li>
            Команды по очереди объясняют слова. Игрок, который объясняет слова,
            сменяется в каждом раунде команды
          </li>
          <li>
            Сделанные ошибки и "перепрыгнутые" слова не уменьшают победные очки
          </li>
          <li>
            Никакая часть искомого слова, написанного на карточке, не может быть
            произнесено при его объяснении
          </li>
          <li>Нельзя использовать однокоренные слова</li>
          <li>
            Нельзя использовать переводы искомого слова на другие языки при
            объяснении
          </li>
          <li>
            Нельзя при объяснении описывать созвучные слова или называть буквы
            из слова. Например, если искомое слово "ПЕНЬ", нельзя говорить "это
            как ЛЕНЬ, но первая буква П"
          </li>
          <li>
            Побеждает та команда, которая первой достигнет нужного или большего
            количества очков, после окончания раунда для каждой команды
          </li>
        </ul>
      </div>

      <Tabbar>
        <TabbarItem text="Меню" onClick={() => changePanel("main")}>
          <Icon24Back />
        </TabbarItem>
      </Tabbar>
    </>
  );
};
