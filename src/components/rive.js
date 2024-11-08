import Rive from "@rive-app/react-canvas";

export const Pellux = (props) => (
  <div className={props.className}>
    <Rive src={"/rive/pello.riv"} stateMachines="loop" />
  </div>
);
