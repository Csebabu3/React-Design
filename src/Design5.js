import React from 'react'

function Design5() {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row' style={{ backgroundColor: "gray", padding: "20px", textAlign: "center" }}>
                    <div className='col'>
                        <h3 className='text-warning'>RELATED WHITEPAPER</h3>
                        <p className='text-white'>Impact of Covid19 on FMCC and Role of Analytics and Connected Planning</p>
                        <button className='btn btn-warning text-dark'>Download</button>
                    </div>
                </div>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='company' className='form-label'>Company</label>
                        <input type='text' className='form-control' id='company' placeholder='Company' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='contactNo' className='form-label'>Contact No</label>
                        <input type='text' className='form-control' id='contactNo' placeholder='Contact No' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>Address</label>
                        <input type='text' className='form-control' id='address' placeholder='Address' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
                <div className='row bg-dark'>
                    <div className='col-md-3'>
                        <h3 className='text-warning'>Industries</h3>
                        <ul className='text-white'>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>CPG</li>
                            <li>Retail</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h3 className='text-warning'>Services</h3>
                        <ul className='text-white'>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>dada science</li>
                            <li>Retail</li>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>blogs</li>
                            <li>dada science</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h3 className='text-warning'>Technologies</h3>
                        <ul className='text-white'>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>dada science</li>
                            <li>blogs</li>
                            <li>CPG</li>
                            <li>dada science</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h3 className='text-warning'>Resources</h3>
                        <ul className='text-white'>
                            <li>CPG</li>
                            <li>Retail</li>
                            <li>dada science</li>
                            <li>Retail</li>
                            <li>analytics</li>
                            <li>Data this.state. management</li>
                            <li>CPG</li>
                            <li>Retail</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Design5