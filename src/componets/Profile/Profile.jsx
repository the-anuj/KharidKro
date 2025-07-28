import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaSignOutAlt, FaCog, FaHeart, FaShoppingCart, FaHistory } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const notify = () => toast("Logout successful!");

  const handleOnLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.clear()
    notify()
    setTimeout(() => {
      navigate('/signin')
    }, 2000);
  }

  useEffect(() => {
    // Redirect if not logged in
    if (!user || !localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto mt-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <FaUser className="text-3xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{user?.name}</h2>
                <p className="text-blue-100 flex items-center mt-2">
                  <FaEnvelope className="mr-2" />
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaUser className="mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <FaUser className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium text-gray-800">{user?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium text-gray-800">{user?.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaCog className="mr-2 text-blue-600" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <FaHeart className="text-red-500 text-xl mb-2" />
                    <span className="text-sm font-medium text-gray-700">Wishlist</span>
                  </button>
                  <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <FaShoppingCart className="text-green-500 text-xl mb-2" />
                    <span className="text-sm font-medium text-gray-700">Orders</span>
                  </button>
                  <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <FaHistory className="text-purple-500 text-xl mb-2" />
                    <span className="text-sm font-medium text-gray-700">History</span>
                  </button>
                  <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <FaCog className="text-orange-500 text-xl mb-2" />
                    <span className="text-sm font-medium text-gray-700">Settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button 
                onClick={handleOnLogout} 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShoppingCart className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">12</h3>
            <p className="text-gray-600">Total Orders</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-green-600 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">8</h3>
            <p className="text-gray-600">Wishlist Items</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHistory className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">$1,250</h3>
            <p className="text-gray-600">Total Spent</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;