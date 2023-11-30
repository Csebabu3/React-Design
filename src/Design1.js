import React from 'react';

function Design1() {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <p className='bg-dark text-white'>
                    Decode procurement data, implement predictive analytics
                    <a className='text-warning' href=''>
                        join our webinar here
                    </a>
                </p>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='#'>
                            <b>POLESTAR</b>
                        </a>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse ms-5' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 ms-3 mb-lg-0'>
                                <li className='nav-item'>
                                    <a className='nav-link active' aria-current='page' href='#'>
                                        Industries
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>
                                        Services
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>
                                        Technologies
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>
                                        Expertise
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>
                                        Company
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>
                                        Resources
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>
                                        <i className='fa fa-search' aria-hidden='true'></i>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link bg-warning p-2' href='#'>
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Design1;
