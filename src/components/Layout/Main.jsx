import BeatsProvider from '../../store/BeatsProvider';
import Beats from '../Beats/Beats';
import './Main.css';

const Main = () => {
  return <main className='main'>
    <BeatsProvider>
      <Beats />
    </BeatsProvider>
  </main>;
};

export default Main;