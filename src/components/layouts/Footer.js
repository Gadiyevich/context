import React from 'react'
import styled from 'styled-components'



// const FooterContainer = styled.footer`

// .footer-middle{
//     background:var(--mainDark);
// }

// `;

function Footer() {
    return (
        <div className='main-footer'>
            <div className='footer-middle'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            {/* First */}
                            <h4>
                                Contact us
                        </h4>
                            <ul className='list-unstyled'>
                                <li>UK</li>
                                <li>Main st</li>
                                <li>9900901900</li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h4>
                                Lorem ipsum
                            </h4>
                            <ul className='list-unstyled'>
                                <li><a href='/'> <a href='/'> lorem ipsum</a></a></li>
                                <li><a href='/'> <a href='/'> lorem ipsum</a></a></li>
                                <li><a href='/'> <a href='/'> lorem ipsum</a></a></li>
                                <li><a href='/'> <a href='/'> lorem ipsum</a></a></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h4>
                                Lorem ipsum
                            </h4>
                            <ul className='list-unstyled'>
                                <li><a href='/'> <a href='/'> lorem ipsum</a></a></li>
                                <li><a href='/'> <a href='/'> lorem ipsum</a></a></li>
                                <li><a href='/'> lorem ipsum</a></li>
                                <li><a href='/'> lorem ipsum</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h4>
                                Lorem ipsum
                            </h4>
                            <ul className='list-unstyled'>
                                <li><a href='/'> lorem ipsum</a></li>
                                <li><a href='/'> lorem ipsum</a></li>
                                <li><a href='/'> lorem ipsum</a></li>
                                <li><a href='/'> lorem ipsum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <p className='text-xs-center'>
                            &copy;  {new Date().getFullYear()} City guide app
                    </p>
                    </div>
                </div>
            </div>
        </div >
    )

}


export default Footer;
