import React from 'react'

function cards({username,btnText}) {
    console.log(username);
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-gray-800">Card Title</h3>
      <p className="text-gray-600 mt-2">
        {username}
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {btnText}
      </button>
    </div>
  )
}

export default cards