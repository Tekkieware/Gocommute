import React from 'react'
import {Card} from 'react-bootstrap'


export default function HeroCard() {
  return (
    <Card className="bg-dark text-white text-center hero-card">
      <Card.ImgOverlay className='hero-card-overlay'>
        <Card.Title className='hero-title'>Your Travel Companion Every Step Of The Way. </Card.Title>
      </Card.ImgOverlay>
    </Card>
  )
}
