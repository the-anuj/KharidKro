import React from 'react'

const Service = () => {
  return (
    <div className='mt-10 p-2'>
        <div className='flex flex-row justify-center items-center gap-20 border-2 border-gray-300 rounded-lg p-4 bg-blue-300'>
            <li className="flex items-center gap-2 mb-2">
              <span role="img" aria-label="Free Shipping">
                <svg className="inline-block w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 17V6a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v11M16 17h2a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707l-2.414-2.414A1 1 0 0 0 16.586 7H16" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="17.5" cy="17.5" r="1.5" />
                </svg>
              </span>
              Free Shipping
            </li>
            <li className="flex items-center gap-2 mb-2">
              <span role="img" aria-label="Easy Returns">
                <svg className="inline-block w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12a9 9 0 1 1 9 9" />
                  <polyline points="3 16 3 12 7 12" />
                </svg>
              </span>
              Easy Returns
            </li>
            <li className="flex items-center gap-2">
              <span role="img" aria-label="24/7 Customer Support">
                <svg className="inline-block w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M22 16.92V17a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z" />
                  <path d="M7 9v2a5 5 0 0 0 5 5h2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              24/7 Customer Support
            </li>
        </div>
    </div>
  )
}

export default Service