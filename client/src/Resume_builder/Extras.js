import React from 'react';

export default function Extras(props) {
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const { values, handleChange } = props;
    const formSubmit = () =>{
        props.submitted();
        props.nextStep();
    }

    return (
        <div className="card animated fadeInLeft">
            <div className="card-body">
                <h3 className="card-title">Honours & Awards and Conferences & Courses</h3>
                <hr />
            </div>
            <form onSubmit={formSubmit}>
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Award name</label>
                        <input type="text" name="extra_honor_1" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_honor_1} onChange={handleChange} />
                    </div>

                    <div className="col-lg-4 text-left">
                        <label>location</label>
                        <input type="text" name="extr_honor_1_loc" className="form-control" defaultValue={values.status === 1 ? '' : values.extr_honor_1_loc} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>year</label>
                        <input type="text" name="extr_honor_1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.extr_honor_1_year} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Award name</label>
                        <input type="text" name="extra_honor_2" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_honor_2} onChange={handleChange} />
                    </div>

                    <div className="col-lg-4 text-left">
                        <label>location</label>
                        <input type="text" name="extr_honor_2_loc" className="form-control" defaultValue={values.status === 1 ? '' : values.extr_honor_2_loc} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>year</label>
                        <input type="text" name="extr_honor_2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.extr_honor_2_year} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>3</b></h3>
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Award name</label>
                        <input type="text" name="extra_honor_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_honor_3} onChange={handleChange} />
                    </div>

                    <div className="col-lg-4 text-left">
                        <label>location</label>
                        <input type="text" name="extr_honor_3_loc" className="form-control" defaultValue={values.status === 1 ? '' : values.extr_honor_3_loc} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>year</label>
                        <input type="text" name="extr_honor_3_year" className="form-control" defaultValue={values.status === 1 ? '' : values.extr_honor_3_year} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <hr />

                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Conference & Courses name</label>
                        <input type="text" name="extra_con_1" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_1} onChange={handleChange} />
                    </div>

                    <div className="col-lg-4 text-left">
                        <label>location</label>
                        <input type="text" name="extra_con_1_loc" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_1_loc} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>year</label>
                        <input type="text" name="extra_con_1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_1_year} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Conference & Course name</label>
                        <input type="text" name="extra_con_2" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_2} onChange={handleChange} />
                    </div>

                    <div className="col-lg-4 text-left">
                        <label>location</label>
                        <input type="text" name="extra_con_2_loc" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_2_loc} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>year</label>
                        <input type="text" name="extra_con_2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_2_year} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                        <h3><b><i className="fas fa-check-circle mr-1"></i>3</b></h3>
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Conference & Course name</label>
                        <input type="text" name="extra_con_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_3} onChange={handleChange} />
                    </div>

                    <div className="col-lg-4 text-left">
                        <label>location</label>
                        <input type="text" name="extra_con_3_loc" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_3_loc} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>year</label>
                        <input type="text" name="extra_con_3_year" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_con_3_year} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="container text-center">
                    <button type="button" className="btn btn-info m-1" onClick={back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                    <button type="submit" className="btn btn-info m-1">Submit<i className="fas fa-angle-right ml-1"></i></button>
                </div>
                <br />
            </form>
        </div>
    )
}