import React from 'react';

export default function Education(props) {
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
            <div className="card-body">
                <h3 className="card-title">Education Info</h3>
                <hr />
            </div>
            <form onSubmit={move_forward}>
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                    </div>
                    <div className="col-lg-6 text-left">
                        <label>College/University*</label>
                        <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                    </div>

                    <div className="col-lg-6 text-left">
                        <label>Qualification*</label>
                        <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required />
                    </div>
                </div>
                <br/>
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-4 text-left">
                        <label>Year*</label>
                        <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Start Date*</label>
                        <input type="date" name="edu1_sdate" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_sdate} onChange={handleChange} required />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>End Date*</label>
                        <input type="date" name="edu1_edate" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_edate} onChange={handleChange} required />
                    </div>
                </div>
                <br />

                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                        <hr />
                    </div>
                    <div className="col-lg-6 text-left">
                        <label>School</label>
                        <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                    </div>

                    <div className="col-lg-6 text-left">
                        <label>Qualification</label>
                        <input type="text" name="edu2_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_qualification} onChange={handleChange} />
                    </div>
                </div>
                <br/>
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-4 text-left">
                        <label>Year</label>
                        <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Start Date*</label>
                        <input type="date" name="edu2_sdate" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_sdate} onChange={handleChange} required />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>End Date*</label>
                        <input type="date" name="edu2_edate" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_edate} onChange={handleChange} required />
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