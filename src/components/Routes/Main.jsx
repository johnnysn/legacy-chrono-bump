import BeatsProvider from "../../store/BeatsProvider";
import Beats from "../Beats/Beats";
import Player from "../Player/Player";
import Setup from "../Setup/Setup";

const Main = () => {
  return (
    <BeatsProvider>
      <Beats />
      <Player />
      <Setup />
    </BeatsProvider>
  );
};

export default Main;
