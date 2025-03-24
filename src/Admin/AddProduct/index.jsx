import {React,useState} from 'react'
import Admin_Navbar from '../AdminNav'
import './style.css'
import axios from 'axios'


const index = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category:'',
        quantity:1,
        description: '',
        image: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            
                // Add new product
                await axios.post('http://localhost:5000/admin/addproduct', formData);
                alert('Product added successfully');
            
            setFormData({ name: '', price:'',category:'',quantity:1, description: '', image: '' });
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className='flex flex-row'>
            <Admin_Navbar />
            <div className='flex flex-col'>
                <h1 className='ml-96 text-2xl'>Admin Product Management</h1>
                <form className='add_product_form flex flex-col gap-5' onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={formData.name}
                        required
                        onChange={handleInputChange}
                        className=''
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Product Price"
                        value={formData.price}
                        required
                        onChange={handleInputChange}
                        className=''
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Product Category"
                        value={formData.category}
                        required
                        onChange={handleInputChange}
                        className=''
                    />
                    <input
                        type="Number"
                        name="quantity"
                        placeholder="Quantity"
                        value={1}
                        className=''
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Product Description"
                        value={formData.description}
                        required
                        onChange={handleInputChange}
                        className=''
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Product Image URL"
                        required
                        value={formData.image}
                        onChange={handleInputChange}
                        className=''
                    />
                    <button type="submit" className=''>Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default index