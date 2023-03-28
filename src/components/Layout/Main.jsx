import BeatsProvider from '../../store/BeatsProvider';
import Beats from '../Beats/Beats';
import Setup from '../Setup/Setup';
import './Main.css';

const Main = () => {
  return <main className='main'>
    <div className="main-inner">
      <BeatsProvider>
        <Beats />
        <Setup />
      </BeatsProvider>
    </div>
  </main>;
};

export default Main;