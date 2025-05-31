import {useState}  from 'react'

function PropertyDetails() {
//      const [formData, setFormData] = useState({
//     propertyName: "",
//     propertyLocation: "",
//     propertyType: "",
//     rentAmount: "",
//     lease: "",
//     customLease: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleLeaseChange = (e) => {
//     const { value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       lease: value,
//       customLease: value === "custom" ? prev.customLease : "",
//     }));
//   };

//   const handleCustomInputChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       customLease: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const finalLeaseDuration =
//       formData.lease === "custom" ? formData.customLease : formData.lease;

//     const payload = {
//       ...formData,
//       lease: finalLeaseDuration,
//     };

//     console.log("Form submitted:", payload);
//     // Send `payload` to backend here
//   };
  return (
    <div id='property-details-container'>
       {/* <form id="property-form" onSubmit={handleSubmit}> */}
      <div className='property-details-item'>
          <label htmlFor="property-name">Property Name:</label>
          <input
            type="text"
            id="property-name"
            name="propertyName"
            placeholder="Jane Doe"
            // value={formData.propertyName}
            // onChange={handleChange}
            required
          />
      </div>

      <div className='property-details-item'>
          <label htmlFor="property-location">Property Location:</label>
          <input
            type="text"
            id="property-location"
            name="propertyLocation"
            placeholder="10 Saidi Ologunro, Lagos."
            // value={formData.propertyLocation}
            // onChange={handleChange}
            required
          />
      </div>

      <div className='property-details-item'>
          <label htmlFor="property-type">Property Type:</label>
          <select
            id="property-type"
            name="propertyType"
            // value={formData.propertyType}
            // onChange={handleChange}
            required
          >
            <option value="">Select a type</option>
            <option value="Duplex">Duplex</option>
            <option value="Apartment">Apartment</option>
            <option value="Bungalow">Bungalow</option>
            <option value="Studio">Studio</option>
          </select>
      </div>

      <div className='property-details-item'>
          <label htmlFor="rent-amount">Rent Amount:</label>
          <input
            type="number"
            id="rent-amount"
            name="rentAmount"
            placeholder="₦"
            // value={formData.rentAmount}
            // onChange={handleChange}
            required
          />
      </div>

      <div className="dropdown-container property-details-item">
        <label>Lease Duration:</label>
         <select
            id="property-type"
            name="propertyType"
            className='custom-select'
            // value={formData.propertyType}
            // onChange={handleChange}
            required
          >
            <option value="" className='select-type'>Select a type</option>
            <option value="6 months">6 months</option>
            <option value="12 months">12 months</option>
            <option value="18 months">18 months</option>
            <option value="24 months">24 months</option>
            <option value="custom">Custom</option>
          </select>
        {/* <div className="dropdown-menu">
          {["6 months", "12 months", "18 months", "24 months", "custom"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="lease"
                // value={option}
                // checked={formData.lease === option}
                // onChange={handleLeaseChange}
              />{" "}
              {option === "custom" ? "Custom" : option}
            </label>
          ))}

          {formData.lease === "custom" && (
            <input
              type="text"
              id="customInput"
              name="customLease"
              placeholder="Enter duration"
              value={formData.customLease}
              onChange={handleCustomInputChange}
              style={{ marginTop: "5px" }}
              required
            />
          )}
        </div> */}
      </div>
    </div>
  )
}

export default PropertyDetails
