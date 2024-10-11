import React, { useState, useContext } from 'react';
import { cartContext } from "../context/cartContext";
import { serverTimestamp } from 'firebase/firestore';
import { writeOrder,  } from '../firebase/database';

function CheckoutForm() {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { cart, orderTotal, clearCart } = useContext(cartContext)

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Process form data here (e.g., send to an API)

   
    const order = {
        buyer: {name: formData.name, email: formData.email, phone: formData.phone},
        items: cart, 
        date: serverTimestamp(),
        total: Number(orderTotal())
    }
    
    writeOrder(order)

    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', phone: '' });
    clearCart()
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Input Field */}
      <div>
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

      {/* Email Input Field */}
      <div>
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

      {/* Phone Number Input Field */}
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckoutForm;