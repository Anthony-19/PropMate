import React from 'react'
import cameraImage from '../../assets/images/camera.svg'
function AccountSetupLL() {
  return (
     <div className='landlord-acc-setup-container'>

      <form className="details-form-group">
        <div className='account-stp-item'>
            <label htmlFor="phone">Phone Number :</label>
            <input type="text" id="phone" placeholder="12345678901" />
        </div>

        <div className='account-stp-item'>
          <label htmlFor="profession">Profession:</label>
          <input id="profession" name="profession" required defaultValue="" placeholder='Accountant' />
        </div>

        <div className="form-item">
                        <label htmlFor="upload-photo">Upload Image :</label>
                        <label htmlFor="upload-photo" className='upload-photo'>
                            <img src={cameraImage} alt="camera-image"  className='camera-image' />
                           {/* {formData.uploadImg === null ? <img src={cameraImage} alt="camera-image"  className='camera-image' /> : <p className='image-text'>{formData.uploadImg}</p>} */}
                        </label>
                      
                          <input type="file" accept='images/*' id="upload-photo" name='uploadImg'
                          />
                        {/* <input type="file" accept='images/*' id="upload-photo" name='uploadImg'
                          onChange={handleChange} 
                          /> */}
                    </div>
      </form>
      
    </div>
  )
}

export default AccountSetupLL
