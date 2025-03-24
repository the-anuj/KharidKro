import React from 'react'
import Admin_Navbar from './AdminNav'

const Dashboard = () => {
    return (
        <div className='flex flex-row'>
            <Admin_Navbar/>
           <h1 className='m-auto text-3xl font-semibold text-[#1d293d]'>Mr. Admin, How are you?</h1>
        </div>

    )
}

export default Dashboard