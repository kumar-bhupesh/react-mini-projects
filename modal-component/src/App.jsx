import React, { useCallback, useState } from 'react'
import Modal from './components/modal/Modal'


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div style={{ padding: 40}}>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}  >
        <h2 style={{marginBottom : "12px"}}>Modal Title</h2>
        <p>This is a reusable modal component.</p>
      </Modal>

    
    </div>
  );
}
