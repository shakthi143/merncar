import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for DatePicker
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [dates, setDates] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (title, date) => {
    setDates(prevDates => ({
      ...prevDates,
      [title]: date
    }));
  };

  const handleConfirmDate = (title) => {
    alert(`Date for ${title}: ${dates[title] ? dates[title].toDateString() : 'Not selected'}`);
  };

  const handleShowDatePicker = () => {
    setShowDatePicker(true);
  };

  if (!cartItems || cartItems.length === 0) {
    return <p className='emp'>Your cart is empty.</p>;
  }

  return (
    <div className='container cart-head'>
    <div className="cart">
      <h1 className='yc'>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.title} className="cart-item">
          {item.icon ? (
            <FontAwesomeIcon icon={item.icon} />
          ) : (
            <span>No Icon</span>
          )}
          <h2 className='yc1'>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <button className="remove-button" onClick={() => removeFromCart(item.title)}>Remove</button>
          {showDatePicker && (
            <div className="select-date">
              <h3>Select a Date</h3>
              <DatePicker
                selected={dates[item.title] || null}
                onChange={date => handleDateChange(item.title, date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
              />
              <button onClick={() => handleConfirmDate(item.title)}>Confirm Date</button>
            </div>
          )}
        </div>
      ))}
      <div className="botbut">
        <button onClick={handleShowDatePicker}>Select Date for All Services</button>
      </div>
    </div>
    </div>
  );
}

export default Cart;
