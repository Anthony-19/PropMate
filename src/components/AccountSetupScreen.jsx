import { useState } from 'react'
import cameraImage from '../assets/images/camera.svg'
export default function AccountSetupScreen() {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        profession: "",
        nextKinName: "",
        nextKinContact: "",
        emergencyContact:"",
        uploadImg: null
    })


    const handleChange = (e) => {
        const {name, value, type, files} = e.currentTarget;
        
        if(type === "file") {
            if (!files[0]) return; //if no file is selected

            if(!files[0].type.startsWith('/images')) return;
            setFormData(prev => ({
                ...prev,
                [name] : files[0].name
            }))
        }
        else{
             setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
        }
       
        console.log(e)
    }
    console.log(formData)

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await fetch('https://reqres.in/api/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(formData)
        })
        const data = await response.json()

        if(response.ok) {
            console.log(data)
        }
        else{
            console.log(data)
        }
        }

        catch {
            console.log(data)
        }

    }
        
    
    return (

       <section className="form">
            <div className="form-item">
                <label htmlFor="phone-number">Phone Number :</label>
                <input type="number" id="phone-number" placeholder='08012345678' 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange}/>
            </div>

            <div className="form-item">
                <label htmlFor="profession">Profession :</label>
                <input type="text" id="profession" placeholder='yourname123@gmail.com' 
                name='profession'
                value={formData.profession}
                onChange={handleChange}/>
            </div>

            <div className="form-item">
                <label htmlFor="next-kin-name">Next of Kin(Name) :</label>
                <input type="text" id="next-kin-name" placeholder='Lorem Ipsum'
                name='nextKinName'
                value={formData.nextKinName}
                onChange={handleChange}/>
            </div>

            <div className="form-item">
                <label htmlFor="next-kin-contact">Next of Kin (Contact) :</label>
                <input type="number" id="next-kin-contact" placeholder='08012345678'
                name='nextKinContact'
                value={formData.nextKinContact}
                onChange={handleChange}/>
            </div>

            <div className="form-item">
                <label htmlFor="emergency-contact">Emergency Contact :</label>
                <input type="number" id="emergency-contact" placeholder='08012345678'
                name='emergencyContact'
                value={formData.emergencyContact}
                onChange={handleChange}/>
            </div>

            <div className="form-item">
                <label htmlFor="upload-photo">Upload Image :</label>
                <label htmlFor="upload-photo" className='upload-photo'>
                   {formData.uploadImg === null ? <img src={cameraImage} alt="camera-image"  className='camera-image' /> : <p className='image-text'>{formData.uploadImg}</p>}
                </label>
              

                <input type="file" accept='images/*' id="upload-photo" name='uploadImg'
                  onChange={handleChange} />
            </div>


       </section> 
    )
}