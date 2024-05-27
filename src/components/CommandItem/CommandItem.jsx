import { Button, Card, Input } from "@vkontakte/vkui";

import { Icon16Cancel } from "@vkontakte/icons";
import "./CommandItem.css";

export const CommandItem = ({
  name,
  id,
  removeCommand,
  editCommand,
  result,
  commandsCount,
  currentScore,
}) => {
  return (
    <div className="command-card">
      {result === "false" ? (
        <Input
          maxLength={25}
          style={{ width: "100%" }}
          type="text"
          onFocus={(e) => {
            e.target.value = e.target.value;
          }}
          onChange={(e) => {
            let newName = e.target.value;
            editCommand({ name: newName, id: id });
          }}
          defaultValue={name}
        />
      ) : (
        <Card style={{ width: "100%", display: "flex", cursor: "default" }}>
          <p style={{ marginLeft: "12px" }}>{name}</p>
        </Card>
      )}

      {commandsCount <= 2 ? (
        <Button
          size="l"
          disabled={result === "false" ? false : true}
          appearance="accent"
          className="score-info"
          before={result === "false" ? <Icon16Cancel /> : `${currentScore}`}
        />
      ) : (
        <Button
          size="l"
          className="score-info"
          disabled={result === "false" ? false : true}
          onClick={() => {
            removeCommand(id);
          }}
          appearance="accent"
          before={result === "false" ? <Icon16Cancel /> : `${currentScore}`}
        />
      )}
    </div>
  );
};
