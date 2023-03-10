import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSupriseMe}) => {
  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            className="font-semibold text-xs py-1 px-2 text-black bg-[#ECECF1] rounded-[5px]"
            type='button'
            onClick={handleSupriseMe}
          >
            Suprise me
          </button>
        )}
        <input 
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649FF] focus:border-[#4649FF] outline-none block w-full p-3'
        />
      </div>
    </div>
  )
}

export default FormField