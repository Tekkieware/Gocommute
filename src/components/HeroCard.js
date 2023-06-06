import React from 'react'
import {Card} from 'react-bootstrap'
import emirates from '../images/air.jpg'

export default function HeroCard() {
  return (
    <Card className="bg-dark text-white text-center">
      <Card.Img className='hero-image' src={emirates} alt="Hero Image" />
      <Card.ImgOverlay className='hero-card-overlay'>
        <Card.Title>All Your Travel Needs With Gocommute</Card.Title>
        <Card.Text>
          Your all in on travel personal assistant.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  )
}
