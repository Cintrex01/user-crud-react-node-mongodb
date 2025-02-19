import { useState } from 'react';
import './UpdateModal.css';

function UpdateModal({ user, onClose, onUpdate }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  function handleChange(e) {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    onUpdate(updatedUser);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update User</h2>
        <input
          type="text"
          name="name"
          value={updatedUser.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={updatedUser.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={updatedUser.email}
          onChange={handleChange}
        />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;