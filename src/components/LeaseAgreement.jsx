import React from 'react'

function LeaseAgreement() {
  return (
    <div>
      <div className='lease-agreement-container'>
          <h3 className='lease-details-title'>Lease Agreement Details</h3>
          <section className='lease-details-container'>
            <h5 className='subsection-title'>Summary</h5>
            <div className='lease-duration-details lease-item'>
                <h5 className='detail-label'> Lease Duration:</h5>
                <p className='detail-value'> June 1,  2025 - May 1, 2026 (12 Months)  </p>
            </div>
            <div className='property-location-details lease-item'>
                <h5 className='detail-label'>Property Location:</h5>
                <p className='detail-value'> 15, Governor Street, Admiralty Way, Ikoyi </p>
            </div>
            <div className='Agreement-type-details lease-item'>
                <h5 className='detail-label'>Agreement Type:</h5>
                <p className='detail-value'>Fixed Term</p>
            </div>
          </section>
          <section className='lease-action'>
            <button className='lease-agreement-btn'>View Full lease Agreement</button>
            <div className='terms-checkbox'>
              <input type="checkbox" id='checked'/>
                <label htmlFor="checked" className='terms-label'>
                    
                    I have read and agree to the <span className='terms-link'>Terms</span> 
                </label>
            </div>
          </section>

          <h3 className='payment-details-title'>Payment Details</h3>

          <section className='payment-details-container '>
                <div className='payment-item payment-method'>
                    <h5 className='payment-label'>Rent Amount</h5>
                    <p className='payment-value'>1,250,000 . 00 per Annum</p>
                </div>

                <div className='payment-item'>
                    <h5 className='payment-label'>Next Due Date</h5>
                    <p className='payment-value'>May 1, 2026</p>
                </div>
          </section>
      </div>
    </div>
  )
}

export default LeaseAgreement
