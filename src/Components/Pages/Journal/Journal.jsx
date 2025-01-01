import { useState } from 'react'
import './Journal.css'
import TradesList from '../../TradesList/TradesList'
import MainHeader from '../../MainHeader/MainHeader'

const Journal = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function showModalHandler(event) {
    setModalIsVisible(true)
  }

  function hideModalHandler(event) {
    setModalIsVisible(false)
  }



  return (
      <div className="common-pages journal">
        <h1 className="common-heading">Stock Trading Journal</h1>

        <MainHeader onJournalNewTrade={showModalHandler}/>

        <TradesList 
          isJournalingTrade={modalIsVisible} 
          onStopJournalingTrade={hideModalHandler} 
        />
      </div>
  )
}

export default Journal
