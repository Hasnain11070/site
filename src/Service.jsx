import React from 'react';
import Newservice from './Newservice';
import Arr from './Arr';
const Service = (props) => {
    return (
        <>

            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-3'>

                            {
                                Arr.map((val, ind) => {
                                    return <Newservice keys={`demo${ind}`} nkeys={`#demo${ind}`} imgsrc={val.imgsrc} titl={val.title} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;