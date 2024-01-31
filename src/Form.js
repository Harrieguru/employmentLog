import "./Form.css"
import { useState } from "react"

export default function Form(){

    const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        older: true,
        employment:"",
        favColor: ""
    })


    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        onChange={handleChange}
                        name="older"
                        checked={formData.older}
                        id="olderCheck"
                    />
                    <label htmlFor="olderCheck">older than 19</label>
                </div>

                <fieldset>
                    <legend>Are you currently employed?</legend>
                    <input 
                        type="radio" 
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed" }
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input 
                        type="radio" 
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    <input 
                        type="radio" 
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />

                <label htmlFor="favColor">What is your favourite color? </label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="indigo">Indigo</option>
                </select>
                <br />
                <input type="submit" value="Login"/>
            </form>
        </>
    )
}