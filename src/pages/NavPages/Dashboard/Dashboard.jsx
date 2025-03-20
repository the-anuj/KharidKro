import React from 'react'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    
  return (
    <div>{user?.name}</div>
  )
}

export default Dashboard