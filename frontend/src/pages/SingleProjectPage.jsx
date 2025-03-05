import React from 'react'
import { useParams } from 'react-router-dom'

export const SingleProjectPage = () => {
    const { project_id } = useParams();
  return (
    <div>SingleProjectPage</div>
  )
}
