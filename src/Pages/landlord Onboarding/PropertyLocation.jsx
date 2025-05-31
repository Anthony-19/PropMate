import React from "react";
import cameraImage from '../../assets/images/camera.svg'

function PropertyLocation() {
  return (
    <div id="property-location-container">
      <div className="property-location-item">
        <label className="utility-bill-text" htmlFor="utility-bill">
          Utility Bill (Not Older than 2 Months):
        </label>
        <label htmlFor="utility-bill" className="utility-bill-input">
         
          {/* {formData.uploadImg === null ? <img src={cameraImage} alt="camera-image"  className='camera-image' /> : <p className='image-text'>{formData.uploadImg}</p>} */}
        </label>
        <div>
            <input
              type="file"
              id="utility-bill"
              name="utility-bill"
              accept=".pdf,.jpg,.png"
            />
             <label htmlFor="utility-bill"><img src={cameraImage} alt="camera-image" className="utility-bill-image" /></label>
        </div>
      </div>

      <div className="property-location-item">
        <label className="upload-file" htmlFor="property-photo">
          Upload Property Photo:
        </label>
          <label htmlFor="property-photo" className="utility-bill-input">
         
          {/* {formData.uploadImg === null ? <img src={cameraImage} alt="camera-image"  className='camera-image' /> : <p className='image-text'>{formData.uploadImg}</p>} */}
        </label>
        <div>
            <input
              type="file"
              id="property-photo"
              name="property-photo"
              accept="image/*"
            />
            <label htmlFor="property-photo"><img src={cameraImage} alt="camera-image" className="utility-bill-image" /></label>
        </div>
      </div>

      {/* For show message */}
      <div id="message" className="form-message"></div>
    </div>
  );
}

export default PropertyLocation;
