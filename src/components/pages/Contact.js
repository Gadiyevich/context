import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className='container my-5 py-5'>
                <section class="mb-4">

                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

                    <div class="row">

                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" />
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control" />
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                            <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div class="text-center text-md-left">
                                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                            </div>
                            <div class="status"></div>
                        </div>

                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

                <div className='well well-sm mt-5'>
                    <h3>Our location</h3>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1jjy53d6EGYcQVFb039LNlSglmqiWsDml"
                                style={{ width: '100%', height: '415px', border: '0' }} allowFullScreen ></iframe>
                        </div>

                    </div>
                </div>
            </div >

        )
    }
}

export default Contact
