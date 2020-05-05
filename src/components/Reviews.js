import React, { Component } from 'react'
import { InfoConsumer } from './context'
import ReviewCard from '../components/cards/ReviewCard'

class Reviews extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    return data.reviews.map(reviews => {
                        return <ReviewCard key={reviews.id} reviews={reviews} />
                    })
                }}
            </InfoConsumer>
        )
    }
}

export default Reviews
