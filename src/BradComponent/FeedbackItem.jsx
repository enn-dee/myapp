import React from 'react'
import Card from './Shared/Card';
import PropTypes from 'prop-types'
function FeedbackItem({ item }) {

    return (
        <Card >
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
            <br />
            {/* <button onClick={btnClick}>Click Here</button> */}
        </Card>
    )
}
export default FeedbackItem;

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}