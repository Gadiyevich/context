import React, { Component } from 'react'
import { InfoConsumer } from './context'
import { Link } from 'react-router-dom'



class Info extends Component {
    render() {

        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } = this.props.item



        return (
            <InfoConsumer>
                {value => (

                    <div className='col-10 col-lg-4 mx-auto mb-5'>
                        <div className='card' style={{ width: '18rem' }}>
                            <img src={img} alt={headerTitle} className='card-img-top' />
                            <div className="card-body">
                                <h3 className='card-title text-uppercase'> {headerTitle}</h3>
                                <h5 className='card-title'>{headerSubTitle}</h5>
                                <p className='card-text'>{headerText}</p>

                                <Link to='/details'
                                    onClick={() => value.handleDetail(id)}
                                >
                                    <button type="button" className="btn btn-primary" style={{ border: 'none' }}>More Info</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                )}
            </InfoConsumer>
        )
    }
}

export default Info
