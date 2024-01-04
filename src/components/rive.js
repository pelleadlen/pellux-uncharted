import Rive from '@rive-app/react-canvas';

export const Pellux = () => (
    <div className=" h-96    ">
    <Rive 
      src={"/rive/pellux.riv"}
      stateMachines="loop"

    />
    </div>
  );