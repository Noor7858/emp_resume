import React, { useEffect, useState } from 'react';

export default function Experience(props) {
    const move_forward = () => {
        props.nextStep();
    };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const expArr = [{ designation: '', companyname: '', startDate: '', EndDate: '', location: '', proj_desc: '' }];

    const { values, handleChange, updateExperience } = props;
    const [exp_arr, setExp_arr] = useState(expArr);

    const addInput = () => {
        setExp_arr((s) => {
            const lastId = s[s.length - 1].id;
            return [
                ...s,
                { designation: '', companyname: '', startDate: '', EndDate: '', location: '', proj_desc: '' }
            ];
        });
    };

    useEffect(() => {
        setExp_arr(values['experience'])
    }, [props])


    const exp_handleChange = ({ target: { value, name, id } }) => {
        const index = id;
        setExp_arr((s) => {
            const newArr = s.slice();
            newArr[index][name] = value;
            return newArr;
        });
    }

    const formSubmit = (e) => {
        updateExperience(exp_arr, 'experience');
        move_forward();
    }
    return (
        <div className="card animated fadeInLeft">
            <div className="card-body">
                <h3 className="card-title">Experience Info</h3>
                <hr />
            </div>
            <form onSubmit={(e) => { formSubmit(e) }}>
                <div className="col-lg-12 text-left">
                    <button className="btn btn-info m-1" onClick={addInput}> Add more experience</button>
                </div>
                {exp_arr?.map((item, i) => {
                    return (
                        <>
                            <div className="col-lg-12 text-left">
                                <h3><b><i className="fas fa-check-circle mr-1"></i>{i + 1}</b></h3>
                            </div>
                            <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-6 text-left">
                                    <label>Institute/Organisation*</label>
                                    <input type="text" name="companyname" id={i} className="form-control" defaultValue={item.companyname} onChange={exp_handleChange} required />
                                </div>
                                <div className="col-lg-6 text-left">
                                    <label>Designation/Position*</label>
                                    <input type="text" name="designation" id={i} className="form-control" defaultValue={item.designation} onChange={exp_handleChange} required />
                                </div>
                            </div>
                            <br />
                            <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-6 text-left">
                                    <label>location*</label>
                                    <input type="text" name="location" id={i} className="form-control" defaultValue={item.location} onChange={exp_handleChange} required />
                                </div>
                                <div className="row col-lg-6 text-left">
                                    <div className="col-lg-6 text-left">
                                        <label>Start Date*</label>
                                        <input type="date" name="startDate" id={i} className="form-control" defaultValue={item.startDate} onChange={exp_handleChange} required />
                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label>End Date*</label>
                                        <input type="date" name="EndDate" id={i} className="form-control" defaultValue={item.EndDate} onChange={exp_handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-12 text-left">
                                    <label>Description*</label>
                                    <textarea className="form-control" id={i} rows="6" cols={6} name="proj_desc" defaultValue={item.proj_desc} onChange={exp_handleChange}></textarea>
                                </div>
                            </div>
                            <br />
                        </>
                    )
                })}
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