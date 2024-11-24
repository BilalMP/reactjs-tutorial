import React, { useState } from 'react'

const Form = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')

  const firstnameHandler = (event) => {
    setFirstname(event.target.value)
  }

  const lastnameHandler = (event) => {
    setLastname(event.target.value)
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(firstname, lastname, age)
  }

  return (
    <div className="flex justify-center items-center">
      <form className='w-[500px] border-2 border-gray-500 p-5' onSubmit={formSubmitHandler}>
        <div className="flex flex-col">
          <label htmlFor="firstname" className='mb-2 mt-5'>
            First name
          </label>
          <input
            type="text "
            placeholder="Enter your first name"
            value={firstname}
            onChange={firstnameHandler}
            className='border-2 border-gray-500 rounded-md p-2'
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className='mb-2 mt-5'>
            Last name
          </label>
          <input
            type="text "
            placeholder="Enter your last name"
            value={lastname}
            onChange={lastnameHandler}
            className='border-2 border-gray-500 rounded-md p-2'
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="firstname" className='mb-2 mt-5'>
            Age
          </label>
          <input
            type="text"
            placeholder="Enter your age"
            value={age}
            onChange={ageHandler}
            className='border-2 border-gray-500 rounded-md p-2'
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <input
            type="submit"
            value="Submit"
            className='bg-blue-600 text-white px-10 py-2 rounded-md cursor-pointer'
          />
        </div>
      </form>
    </div>
  )
}

export default Form