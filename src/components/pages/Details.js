import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import Reviews from '../Reviews';


class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        descriprion
                    } = data.detailInfo;

                    return (
                        <div className='container-fluid align-items-center'>
                            <div className='header'>
                                <h1 className='display-1 font-weight-bold'>{headerTitle}</h1>
                                <h4 className='display-5' >{headerSubTitle}</h4>
                                <p className='mb-5'>{headerText}</p>
                            </div>
                            <div className='container-mt-5'>
                                <div className='row justify-content-center iconss'>
                                    <div className='col-1'>
                                        <i className='fab fa-facebook-f' />
                                    </div>
                                    <div className='col-1'>
                                        <i className='fab fa-twitter' />
                                    </div>
                                    <div className='col-1'>
                                        <i className='fab fa-google-plus-g' />
                                    </div>
                                    <div className='col-1'>
                                        <i className='fab fa-reddit' />
                                    </div>
                                    <div className='col-1'>
                                        <i className='fab fa-facebook-messenger' />
                                    </div>
                                    <div className='col-1'>
                                        <i className='fab fa-whatsapp' />
                                    </div>
                                </div>
                            </div>



                            {/* nav link */}

                            <div className='container mt-5'>
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#aboutPlace" role='tab' data-toggle='tab'>About place</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#reviews" role='tab' data-toggle='tab'>Reviews</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#map" role='tab' data-toggle='tab'>Map</a>
                                    </li>
                                </ul>
                                {/* pane */}
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane in active text-center mt-5" id="aboutPlace" role="tab" aria-labelledby="home-tab">
                                        <h2 className='mb-3 '>{title}</h2>
                                        <p>{headerText}</p>
                                        <img src={img} className='img-fluid img-thumbnail mb-5' />
                                    </div>
                                    {/* Reviews */}
                                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="profile-tab">
                                        <Reviews />
                                    </div>

                                    {/* Maps */}
                                    <div class="tab-pane fade" id="map" role="tabpanel" aria-labelledby="contact-tab">
                                        <iframe src={maps} style={{ border: 0, height: '40vw', width: '80vw' }} className='mb-3 mt-3' />
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                }}
            </InfoConsumer>
        )
    }
}

export default Details
