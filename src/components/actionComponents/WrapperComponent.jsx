import {
  GoToPosition,
  Hide,
  IfElse,
  IfThen,
  MoveSteps,
  Repeat,
  RotateAntiClockwise,
  RotateClockwise,
  SayHello,
  Show,
  Think,
  Wait,
  WhenSpriteClicked,
  WhenStartClicked,
} from "./components";



export const WrapperComponent = ({ type, data }) => {
  let Component;

  if (type === "MoveSteps") {
    Component = <MoveSteps {...data} />;
  } else if (type === "RotateClockwise") {
    Component = <RotateClockwise {...data} />;
  } else if (type === "RotateAntiClockwise") {
    Component = <RotateAntiClockwise {...data} />;
  } else if (type === "GoToPosition") {
    Component = <GoToPosition {...data} />;
  } else if (type === "SayHello") {
    Component = <SayHello {...data} />;
  } else if (type === "Think") {
    Component = <Think {...data} />;
  } else if (type === "Show") {
    Component = <Show {...data} />;
  } else if (type === "Hide") {
    Component = <Hide {...data} />;
  } else if (type === "WhenStartClicked") {
    Component = <WhenStartClicked {...data} />;
  } else if (type === "WhenSpriteClicked") {
    Component = <WhenSpriteClicked {...data} />;
  } else if (type === "Wait") {
    Component = <Wait {...data} />;
  } else if (type === "Repeat") {
    Component = <Repeat {...data} />;
  } else if (type === "IfThen") {
    Component = <IfThen {...data} />;
  } else if (type === "IfElse") {
    Component = <IfElse {...data} />;
  } else {
    Component = <MoveSteps {...data} />;
  }

  return Component;
};
