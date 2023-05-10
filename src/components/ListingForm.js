import React,{useState} from 'react'

function ListingForm({addListing}) {
    const initialForm = {
        location: "",
        description: "",
        image: ""
    }

    const [form, setForm] = useState(initialForm)
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setForm(initialForm)
            addListing(data)
        })
    }
return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={form.location} type="text" name="location" placeholder="location"/>
        <input onChange={handleChange} value={form.description} type="text" name="description" placeholder="description"/>
        <input onChange={handleChange} value={form.image} type="text" name="image" placeholder="image"/>
        <input type="submit" value="submit" />
    </form>
  )
}

export default ListingForm