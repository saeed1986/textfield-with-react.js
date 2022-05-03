import type { NextPage } from 'next'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/material/icons/KeyboardArrowRightIcon'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// import * as React from 'react'
// import ReactDOM from 'react-dom'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
// import { makeStyles } from '@mui/material/core'

const Home: NextPage = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }

    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details)
    }
  }

  return (
    <div className="container mx-auto mt-[50px] p-5">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className="mt-20 mb-20 block"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className="mt-20 mb-20 block"
          id="outlined-basic"
          label="Details"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <button className="bg-red-500 p-5 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Home
