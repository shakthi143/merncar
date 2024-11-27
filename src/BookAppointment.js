
import React, { useState, useEffect } from 'react';
import './BookAppointment.css';

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [appointments, setAppointments] = useState([]);
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/appointments');
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error('Error fetching appointments');
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = editId ? 'PUT' : 'POST';
      const url = editId ? `http://localhost:5000/api/appointments/${editId}` : 'http://localhost:5000/api/appointments';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchAppointments(); // Refresh the list after adding or updating
        setNotification(`Your appointment has been ${editId ? 'updated' : 'booked'} for ${formData.date} at ${formData.time}.`);
        setNotificationType('success');
        setShowNotification(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: ''
        });
        setEditId(null); // Reset editId
      } else {
        const error = await response.json();
        setNotification(`Failed to ${editId ? 'update' : 'book'} appointment. Please try again.`);
        setNotificationType('error');
        setShowNotification(true);
        console.error('Error:', error);
      }
    } catch (error) {
      setNotification(`Failed to ${editId ? 'update' : 'book'} appointment. Please try again.`);
      setNotificationType('error');
      setShowNotification(true);
    }

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleEdit = (appointment) => {
    setFormData({
      name: appointment.name,
      email: appointment.email,
      phone: appointment.phone,
      date: appointment.date,
      time: appointment.time,
      message: appointment.message
    });
    setEditId(appointment._id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: 'DELETE',
      });
      fetchAppointments(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-container">
        <h2>{editId ? 'Update Appointment' : 'Book an Appointment'}</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Purpose:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional details or requests"
            />
          </div>
          <button type="submit" className="submit-btn">
            {editId ? 'Update Appointment' : 'Book Appointment'}
          </button>
        </form>
      </div>
      {showNotification && (
        <div className={`notification ${notificationType} show`}>
          {notification}
        </div>
      )}
      <div className="appointments-list">
        <h3>Your Appointments</h3>
        <ul>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <li key={appointment._id}>
                {appointment.name} - {appointment.date} at {appointment.time}
                <button onClick={() => handleEdit(appointment)}>Edit</button>
                <button onClick={() => handleDelete(appointment._id)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No appointments available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default BookAppointment;
