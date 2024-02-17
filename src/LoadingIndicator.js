// LoadingIndicator.js
import React from 'react'
import { useLoading } from './LoadingContext' // Adjust the import path as needed
import ClipLoader from 'react-spinners/ClipLoader'

const LoadingIndicator = () => {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1050, // Ensure it's above other content
      }}>
      <ClipLoader color='#000000' size={150} />{' '}
      {/* Customize color and size as needed */}
      <p style={{ marginTop: '20px' }}>
        Loading...
        <>
          <h6>it will load but it can take awhile</h6>
        </>
      </p>
    </div>
  )
}

export default LoadingIndicator
