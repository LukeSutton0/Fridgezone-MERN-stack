import React, { useState } from "react";

const DeliveryRecord = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    expiryDate: "",
    supplier: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Need to add code to send data to the database

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Expiry Date"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Supplier"
        name="supplier"
        value={formData.supplier}
        onChange={handleChange}
      />
      <button type="submit">Record Item</button>
    </form>
    
  );
};

export default DeliveryRecord;