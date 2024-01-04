import Rive from '@rive-app/react-canvas';

export const Pellux = () => (
    <div className=" max-h-2/4 ">
    <Rive
      src={"/rive/pellux.riv"}
      stateMachines="loop"
    />
    </div>
  );