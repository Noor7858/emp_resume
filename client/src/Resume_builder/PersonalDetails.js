import React from "react";
import resumeImage from "../assets/resume_b.png"

export default function PersonalDetails(props) {
    const move_forward =() => {
        props.nextStep();
    };
    const { values, handleChange } = props;
    return (
        <div className="card animated fadeInLeft">
            <div className="card-body">
                <h3 className="card-title">Personal Info</h3>
                <hr />
            </div>
            <form onSubmit={move_forward}>
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-4 text-left">
                        <label>Name*</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.name} required />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Email*</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.email} required />
                    </div>
                    <div className="col-lg-4 text-left">
                        <label>Mobile*</label>
                        <input type="text" name="phone" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.phone} required />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-6 text-left">
                        <label>Linkedin URL</label>
                        <input type="text" name="linkedin" className="form-control" defaultValue={values.status === 1 ? '' : values.linkedin} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 text-left">
                        <label>Skype URL</label>
                        <input type="text" name="skype" className="form-control" defaultValue={values.status === 1 ? '' : values.skype} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-6 text-left">
                        <label>Location</label>
                        <input type="text" name="location" className="form-control" defaultValue={values.status === 1 ? '' : values.location} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 text-left">
                        <label>Designation</label>
                        <input type="text" name="designation" className="form-control" defaultValue={values.status === 1 ? '' : values.designation} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-6 text-left">
                        <label>Summary (write a summary of your resume , 250 characters)</label>
                        <textarea className="form-control" maxLength="250" name="description" rows="5" required defaultValue={values.status === 1 ? '' : values.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-lg-6 text-left">
                        <label>Skills (Separate each skill with a space and a comma)</label>
                        <textarea className="form-control" rows="5" name="skills" defaultValue={values.status === 1 ? '' : values.skills} required onChange={(e)=>{console.log('e',e);handleChange(e)}}></textarea>
                    </div>
                </div>
                <br />
                <div className="container text-center"><button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button></div>
                <br />
            </form>
        </div>
    )
}