import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cameraImage from '../../assets/images/camera.svg';

function AddProperty() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
    utility_bill: null,
    utility_bill_date: '',
    photos: [],
    rent: '',
    lease_duration: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'photos') {
      setFormData((prev) => ({
        ...prev,
        photos: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  useEffect(() => {
    return () => {
      formData.photos.forEach((photo) => URL.revokeObjectURL(photo));
      if (formData.utility_bill) {
        URL.revokeObjectURL(formData.utility_bill);
      }
    };
  }, [formData.photos, formData.utility_bill]);


  const [loading, setLoading] = useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

       const data = new FormData();

    // Append text fields
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('address', formData.address);
    data.append('lease_duration', formData.lease_duration);
    data.append('rent', formData.rent);
    data.append('type', formData.type);

    // Append utility bill file
    if (formData.utility_bill) {
      data.append('utility_bill', formData.utility_bill);
    }

    // Append property photos
    formData.photos.forEach((file, index) => {
      data.append('photos', file); // backend should accept multiple with same key name
    });

    const response = await fetch('https://pms-bd.onrender.com/api/properties', {
      method: 'POST',
      body: data,
    });

      const result = await response.json();
        if(response.ok) {
          console.log('Registration successful:',);
          navigate('/landlord-dashboard')
          setOtpSent(true);
          
         
        }
        else{
          throw new Error(result.message || 'Registration failed');
        }
       
    }
    
    catch (error) {
      console.error('Error submitting form:', error);
        // setErrors({ submit: error.message || 'User Already Exist' });
      // setErrors({ submit: 'User Already Exist' });
      // setErrors({ submit: error });
    } finally{
      setLoading(false);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // TODO: replace with actual API call
  // };

  return (
    <form id="property-details-container" onSubmit={handleSubmit}>
      <div className="property-details-item">
        <label htmlFor="property-name">Property Name:</label>
        <input
          type="text"
          id="property-name"
          name="title"
          placeholder="Jane Doe"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="property-details-item">
        <label htmlFor="property-location">Property Location:</label>
        <input
          type="text"
          id="property-location"
          name="address"
          placeholder="10 Saidi Ologunro, Lagos."
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="property-details-item">
        <label htmlFor="property-description">Property Description:</label>
        <input
          type="text"
          id="property-description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="property-details-item">
        <label htmlFor="property-type">Property Type:</label>
        <select
          id="property-type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select a type</option>
          <option value="Duplex">Duplex</option>
          <option value="Apartment">Apartment</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Studio">Studio</option>
        </select>
      </div>

      <div className="property-details-item">
        <label htmlFor="rent-amount">Rent Amount:</label>
        <input
          type="number"
          id="rent-amount"
          name="rent"
          placeholder="₦"
          value={formData.rent}
          onChange={handleChange}
          required
        />
      </div>

      <div className="dropdown-container property-details-item">
        <label>Lease Duration:</label>
        <select
          id="property-type"
          name="lease_duration"
          className="custom-select"
          value={formData.lease_duration}
          onChange={handleChange}
          required
        >
          <option value="" className="select-type">Select a type</option>
          <option value="6 months">6 months</option>
          <option value="12 months">12 months</option>
          <option value="18 months">18 months</option>
          <option value="24 months">24 months</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div id="property-location-container">
        <div className="property-location-item">
          <label className="utility-bill-text" htmlFor="utility-bill">
            Utility Bill (Not Older than 2 Months):
          </label>
          <input
            type="file"
            id="utility-bill"
            name="utility_bill"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <label htmlFor="utility-bill">
            {/* <img src={cameraImage} alt="Upload utility bill" className="utility-bill-image" /> */}
            <p style={{cursor: 'pointer'}}>Click here to upload</p>
          </label>

          {formData.utility_bill && (
            <div style={{ marginTop: '10px' }}>
              <img
                src={URL.createObjectURL(formData.utility_bill)}
                alt="Utility bill preview"
                style={{ width: '200px', borderRadius: '8px' }}
              />
            </div>
          )}
        </div>

        <div className="property-location-item">
          <label className="upload-file" htmlFor="property-photo">
            Upload Property Photos:
          </label>
          <input
            type="file"
            id="property-photo"
            name="photos"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <label htmlFor="property-photo" style={{cursor:'pointer'}}>
            Click here to upload Image 
            {/* <img src={cameraImage} alt="Upload property photo" className="utility-bill-image" /> */}
          </label>

          {formData.photos.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '10px',
              }}
            >
              {formData.photos.map((photo, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index + 1}`}
                  style={{
                    width: '120px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div id="message" className="form-message"></div>

      <div className="button-container">
        <button type="submit" className="next">
          {loading && <span id='loader'></span>}
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddProperty;
