import React from 'react';

export default function Languages(props) {
    const move_forward = e => {
        props.nextStep();
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const { values, handleChange } = props;
    return (
        <div className="card animated fadeInLeft">
            <form onSubmit={move_forward}>

                <div className="card-body">
                    <h3 className="card-title">Languages</h3>
                    <hr />
                    <div className="row col-lg-12 text-left px-5">
                        <div className="row col-lg-6 d-flex">
                            <label for="customRange2" className="form-label"> English
                                <input type="range" className="form-range" name="lang_english" min="0" max="5" id="customRange1" defaultValue={values.status === 1 ? '' : values.lang_english} onChange={handleChange}></input>
                            </label>
                        </div>
                        <div className="row col-lg-6 d-flex">
                            <label for="customRange2" className="form-label"> Hindi
                                <input type="range" className="form-range" name="lang_hindi" min="0" max="5" id="customRange2" defaultValue={values.status === 1 ? '' : values.lang_hindi} onChange={handleChange}></input>
                            </label>
                        </div>
                    </div>
                    <br/>
                    <div className="row col-lg-12 text-left px-5">
                        <div className="row col-lg-6 d-flex">
                            <label for="customRange2" className="form-label"> French
                                <input type="range" className="form-range" name="lang_french" min="0" max="5" id="customRange3" defaultValue={values.status === 1 ? '' : values.lang_french} onChange={handleChange}></input>
                            </label>
                        </div>
                        <div className="row col-lg-6 d-flex">
                            <label for="customRange2" className="form-label"> Spanish
                                <input type="range" className="form-range" name="lang_spanish" min="0" max="5" id="customRange4" defaultValue={values.status === 1 ? '' : values.lang_spanish} onChange={handleChange}></input>
                            </label>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container text-center">
                    <button type="button" className="btn btn-info m-1" onClick={back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                    <button type="submit" className="btn btn-info m-1">Next<i className="fas fa-angle-right ml-1"></i></button>
                </div>
                <br />
            </form>
        </div>
    )
}