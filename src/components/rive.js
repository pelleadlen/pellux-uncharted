import Rive from '@rive-app/react-canvas';

export const Pellux = () => (
    <div className=" h-screen  md:hidden ">
    <Rive
      src={"/rive/pellux.riv"}
      stateMachines="loop"
    />
    </div>
  );