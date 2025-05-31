import React from 'react'

function TermsAndConditions() {
  return (
    <div className='terms-and-conditions-container'>
      <p className="terms-and-conditions-container-text">
        Provide your lease documents to ensure smooth onboarding for your tenants.
      </p>

      {/* Section: Upload existing lease document */}
      <section className="terms-and-conditions-item">
        <label className="terms-and-conditions-label">Upload an Existing Lease Document :</label>

        {/* Upload input with icon and filename placeholder */}
        <label className="terms-and-conditions-input-box clickable">
          <img src="/Assets/Images/upload_doc.png" className="icon" alt="Upload Icon" />
          <span className="file-name">Upload Lease Agreement</span>
          <input type="file" className="hidden-file" accept=".pdf,.docx" />
        </label>

        {/* Note about supported file types */}
        <p className="format-note">Supported formats: PDF, DOCX</p>
      </section>

      {/* Section: Create lease agreement online */}
      <section className="terms-and-conditions-item">
        <label className="terms-and-conditions-label">Create Lease Agreement Online :</label>

        {/* Non-clickable display box */}
        <div className="terms-and-conditions-input-box">
          <img src="/Assets/Images/create_doc.png" className="icon" alt="Document Icon" />
          <span>Set Up Lease Agreement</span>
        </div>
      </section>

      {/* Section: Upload/create terms & conditions */}
      <section className="terms-and-conditions-item">
        <label className="terms-and-conditions-label black">
          Upload or create your standard Terms & Conditions document<br />
          (optional but recommended)
        </label>

        {/* Upload terms & conditions */}
        <p className="terms-and-conditions-sub-label">Terms & Conditions</p>
        <label className="terms-and-conditions-input-box blue clickable">
          <img src="/Assets/Images/upload_doc.png" className="icon" alt="Upload Icon" />
          <span className="file-name white-text">Upload Terms & Conditions</span>
          <input type="file" className="hidden-file" accept=".pdf,.docx" />
        </label>

        {/* Create terms & conditions */}
        <p className="terms-and-conditions-sub-label">Create Terms & Conditions Online :</p>
        <div className="terms-and-conditions-input-box">
          <img src="/Assets/Images/create_doc.png" className="icon" alt="Document Icon" />
          <span>Set Up Terms & Conditions</span>
        </div>
      </section>
    </div>
  )
}

export default TermsAndConditions
