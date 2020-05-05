import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NotFound extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row '>
                    <div className='error-template text-center mb-5'>
                        <h2>Ops!</h2>
                        <h2>Error 404 not found</h2>
                        <div className='error-details'>
                            <p>Sorry, an error occured. The requested page was not found.</p>
                        </div>
                        <Link to='/'>
                            <button type="button"
                                className="btn btn-outline-primary"> <i className="fas fa-home" ></i>Main page </button>
                        </Link>
                        <Link to='/' className='ml-3'>
                            <button type="button" className="btn btn-secondary" style={{ textTransform: 'uppercase' }}> <i className="far fa-envelope mr-1"></i><strong>Support</strong> </button>

                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default NotFound
