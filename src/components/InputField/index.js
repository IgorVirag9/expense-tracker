import React from 'react'

const InputField = ({label, type, name, value, handleChange, className, min, max, step}) => {
  console.log('Step:' , step, 'a name od stepa je:' , name)
  return (
    <div className={className}>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            max={max}
            min={min}
            step={step}
            value={value}
            onChange={handleChange}
          />
        </div>
  )
}

export default InputField