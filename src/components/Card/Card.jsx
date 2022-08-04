import React from 'react'
import S from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({img, url, text, btnText}) => {
  return (
    <div className={S.container}>
      <img className={S.image} src={img} alt={text}/>
      <p className={S.title}>{text}</p>
      <Link className={S.button} to={url}>{btnText}</Link>
    </div>
  )
}

export default Card
