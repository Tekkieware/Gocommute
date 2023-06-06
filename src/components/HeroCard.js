import React from 'react'
import {Card} from 'react-bootstrap'
import emirates from '../images/air.jpg'

export default function HeroCard() {
  return (
    <Card className="bg-dark text-white text-center hero-card">
      <Card.ImgOverlay className='hero-card-overlay'>
        <Card.Title>Your Travel Companion Every Step Of The Way. </Card.Title>
        <Card.Text>
          Your all in on travel personal assistant.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  )
}
