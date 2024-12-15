import './MainHeader.css'
import { MdMessage, MdPostAdd } from 'react-icons/md'

function MainHeader(props) {
  return (
    <header className='header'>
      <p>
        <button className='button' onClick={props.onJournalNewTrade}>
          <MdPostAdd size={18} />
          Enter a new trade
        </button>
      </p>
    </header>
  );
}

export default MainHeader