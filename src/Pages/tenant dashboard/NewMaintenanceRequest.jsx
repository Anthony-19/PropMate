import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NewMaintenanceRequest() {
    const navigate = useNavigate()
      const [formData, setFormData] = useState({
    issueTitle: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    navigate('/tenant-dashboard/maintenance-tenant-screen')
  };

    const [showTitle, setShowTitle] = useState(false);

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    
     setShowTitle(true);
        setTimeout(() => setShowTitle(false) , 7000);
        setTimeout(() => navigate('/tenant-dashboard/maintenance-tenant-screen') , 8000);

    // alert('Maintenance request added successfully')


    // navigate('/tenant-dashboard/maintenance-tenant-screen');
    // try {
    //   const data = new FormData();
    //   data.append('property_id', formData.issueTitle);
    //   data.append('description', formData.description);
    //   if (formData.image) {
    //     data.append('image', formData.image);
    //   }

    //   const response = await fetch('https://pms-bd.onrender.com/api/maintenance', {
    //     method: 'POST',
    //     body: data,
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to submit request');
    //   }

    //   const result = await response.json();
    //   console.log('Success:', result);

    //   // Optional: Navigate back or show success message
    //   navigate('/tenant-dashboard/maintenance-tenant-screen');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Submitting form:', formData);
//     // You can send formData to your backend or API here
//   };
  return (
    <div className='new-maintenance-request-container'>
       <h1 className={`maintenace-request-title ${showTitle ? 'active' : ''}`}>Maintenance Request sent successful</h1>
      <form id="new-maintenance-request-form" onSubmit={handleSubmit}>
      <h2>New Maintenance Request</h2>

      <label htmlFor="issueTitle">
        Issue Title (Provide a clear title for the maintenance issue)
      </label>
      <input
        type="text"
        id="issueTitle"
        name="issueTitle"
        placeholder="Leaking Roof"
        value={formData.issueTitle}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">
        Description (Provide as much detail as possible about the issue)
      </label>
      <textarea
        id="description"
        name="description"
        placeholder="Please describe issue in details....."
        value={formData.description}
        onChange={handleChange}
      />

      <label>Image (Optional)</label>
      <div className="upload-wrapper">
        <div className="upload-box" id="uploadLabel">
          Upload Image{' '}
          <img
            src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
            alt="camera"
          />
        </div>
        <input
          type="file"
          id="imageUpload"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <div className="buttons">
        <button type="button" className="cancel-btn" onClick={handleReset}>
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
    
    </div>
  )
}

