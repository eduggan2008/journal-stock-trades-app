import './Modal.css'

const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className='backdrop' onClick={onClose} />

      <dialog open className='modal'>{children}</dialog>
    </>
  )
}

export default Modal