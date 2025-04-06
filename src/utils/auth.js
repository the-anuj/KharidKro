export const getCurrentUser = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  };
  
  export const getToken = () => {
    return localStorage.getItem('token');
  };