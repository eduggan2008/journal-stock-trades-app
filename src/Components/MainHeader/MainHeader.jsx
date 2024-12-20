import './MainHeader.css'
import { MdMessage, MdPostAdd } from 'react-icons/md'

function MainHeader({ onJournalNewTrade }) {
  return (
    <header className='header'>
      <p>
        <button className='button' onClick={onJournalNewTrade}>
          <MdPostAdd size={18} />
          Enter a new trade
        </button>
      </p>
    </header>
  );
}

export default MainHeader