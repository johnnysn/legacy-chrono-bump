import './Setup.css';
import SetupBeats from './SetupBeats';
import SetupTempo from './SetupTempo';

const Setup = () => {
  return <div className="setup">
    <SetupTempo />
    <SetupBeats />
  </div>;
};

export default Setup;