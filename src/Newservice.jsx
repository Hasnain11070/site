import React, { useState } from 'react';

const Newservice = (props) => {

    const [open, close] = useState(true);
    var nname = props.keys;
    var name = props.nkeys;
    console.log(nname);
    console.log(name)
    const show = () => {
        if (open === true) {
            close(false)
        } else if (open === false) {
            close(true)
        }

    }
    if (open === true) {
        console.log(open)
    }
    return (
        <>
            <div className='col-md-4 col-10 mx-auto  '>
                <div className="card " >
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title xx">{props.titl}</h5>
                        <p className="card-text">Some quick example text to build on
                                     the card title and make up the bulk of the card's content.</p>
                        <div id={nname} className="collapse">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <button onClick={show} type="button" className="btn xx" data-bs-toggle="collapse" data-bs-target={name} >
                            {open === true ? (<> <i className="fa fa-chevron-down xx "></i> {() => show} </>) : (<>  <i className="fa fa-chevron-down open xx "></i></>)}</button>

                    </div>


                </div>
            </div>

        </>
    );
}
export default Newservice;