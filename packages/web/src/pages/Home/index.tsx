import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const Home: React.FC = () => {
  const [content, setContent] = useState(() => {
    const storagedContent = localStorage.getItem('@Notes:content')

    if (storagedContent) {
      return JSON.parse(storagedContent)
    } else {
      return ''
    }
  })

  useEffect(() => {
    localStorage.setItem('@Notes:content', JSON.stringify(content))
  }, [content])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <>
      <Link to="/notes">Tste</Link>
      <Container maxLength={3800} onChange={handleChange} value={content} />
    </>
  )
}

export default Home
