import React, { useEffect, useState } from "react";

export default function Resume(props) {
    const [resumeDetails, setResumeDetails] = useState();
    const getData = () => {
        fetch('http://localhost:5000/getDatafromfile'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(function (response) {
            console.log(response)
            return response.json();
        }).then(function (myJson) {
            console.log(myJson);
            setResumeDetails(myJson);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    let skills = resumeDetails?.skills?.split(',');
    return (
        <div class="overflow-hidden">
            <div class="row">
                <div class="col p-5">
                    <h1 className="row nameClass my-0">{resumeDetails?.name}</h1>
                    <h6 className="row designationClass">{resumeDetails?.designation}</h6>
                    <p class="row desClass">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lacus, sollicitudin in dolor at, consequat volutpat ante. Integer quis consequat turpis, quis porta orci. Proin tincidunt volutpat faucibus. Suspendisse ac nisl purus suspendisse eleifend interdum orci non pharetra.{resumeDetails?.designation}</p>
                    <br />
                    <h6 className="row nameClass my-0 my-0 py-1 border-top border-bottom fw-bold  border-dark w-18">WORK EXPERIENCE</h6>
                    {
                        resumeDetails?.experience?.map(exp => {
                            let proj_Desc = exp.proj_desc.split('\n');
                            return <>
                                <h6 className="row desClass fw-bold">{exp?.designation}</h6>
                                <h6 className="row designationClass">{exp?.companyname}</h6>
                                <div className="row">
                                    <div className="col-2 float-start px-0" style={{ fontSize: "10px" }}>{exp?.startDate} - {exp?.EndDate}</div>
                                    <div className="col-2  px-0" style={{ fontSize: "10px" }}>{exp?.location}</div>
                                </div>
                                <br />
                                <ul className="p-0">
                                    {proj_Desc?.map(eachDesc => {
                                        return <li className="d-flex"><p class="desClass">{eachDesc}</p></li>
                                    })}
                                </ul>

                            </>
                        })
                    }
                    <br />
                    <h6 className="row nameClass my-0 my-0 py-1 border-top border-bottom fw-bold  border-dark w-11">EDUCATION</h6>
                    <h6 className="row desClass fw-bold p-1">{resumeDetails?.edu1_school}</h6>
                    <h6 className="row designationClass">{resumeDetails?.edu1_qualification}</h6>
                    <div className="float-start px-0" style={{ fontSize: "10px" }}>{resumeDetails?.edu1_sdate} - {resumeDetails?.edu1_edate}</div>
                    <br />

                    <h6 className="row desClass fw-bold">{resumeDetails?.edu2_school}</h6>
                    <h6 className="row designationClass">{resumeDetails?.edu2_qualification}</h6>
                    <div className="float-start px-0" style={{ fontSize: "10px" }}>{resumeDetails?.edu2_sdate} - {resumeDetails?.edu2_edate}</div>

                    <br />
                    <br />

                    <h6 className="row nameClass my-0 my-0 py-1 border-top border-bottom fw-bold  border-dark w-12">LANGUAGES</h6>
                    <div className="row p-2">
                        <div className="col-3"> <p class="row desClass">English</p></div>
                        <div className="col-3">
                            <input type="range" className="form-range" name="lang_french" min="0" max="5" id="customRange3" defaultValue={resumeDetails?.lang_english}></input>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-3"> <p class="row desClass">Hindi</p></div>
                        <div className="col-3">
                            <input type="range" className="form-range" name="lang_french" min="0" max="5" id="customRange3" defaultValue={resumeDetails?.lang_hindi}></input>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-3"> <p class="row desClass">French</p></div>
                        <div className="col-3">
                            <input type="range" className="form-range" name="lang_french" min="0" max="5" id="customRange3" defaultValue={resumeDetails?.lang_french}></input>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-3"><p class="row desClass">Spanish</p></div>
                        <div className="col-3">
                            <input type="range" className="form-range" name="lang_french" min="0" max="5" id="customRange3" defaultValue={resumeDetails?.lang_spanish}></input>
                        </div>
                    </div>
                </div>

                <div class="col p-5">
                    <div className="row ">
                    <div className="col-9 "></div>
                        <div class="col-2 ">
                            <small>{resumeDetails?.name}&nbsp;&nbsp;</small>
                        </div>
                        <div class="col-1 px-0 ">
                            <i class="fas fa-envelope text-danger"></i>
                        </div>
                    </div>
                    <br />
                    <div className="row ">
                    <div className="col-9 "></div>

                        <div className="col-2 ">
                            <small>{resumeDetails?.phone}&nbsp;&nbsp;</small>
                        </div>
                        <div class="col-1 px-0 ">
                            <i class="fas fa-mobile-alt text-danger"></i>
                        </div>
                    </div>
                    <br />
                    <div className="row ">
                    <div className="col-9 "></div>

                        <div className="col-2 ">
                            <small>{resumeDetails?.location}&nbsp;&nbsp;</small>
                        </div>
                        <div class="col-1 px-0 ">
                            <i class="fas fa fa-map-marker text-danger"></i>
                        </div>
                    </div>
                    <br />
                    <div className="row ">
                    <div className="col-9 "></div>

                        <div className="col-2 ">
                            <small>{resumeDetails?.linkedin}&nbsp;&nbsp;</small>
                        </div>
                        <div class="col-1 px-0 ">
                            <i class="fab fa-linkedin-in text-danger"></i>
                        </div>
                    </div>
                    <br />
                    <div className="row ">
                        <div className="col-9 "></div>

                        <div className="col-2 ">
                            <small>{resumeDetails?.skype}&nbsp;&nbsp;</small>
                        </div>
                        <div class="col-1 px-0 ">
                            <i class="fa fa-skype text-danger"></i>
                        </div>
                    </div>
                    <br />
                    <h6 className="row nameClass my-0 py-1 border-top border-bottom fw-bold border-dark w-18">SKILLS</h6>
                    <div className="float-start marginLeft py-2">
                        {skills?.map(eachSkill => {
                            return <button class="btn btn-danger m-1 " type="button">{eachSkill}</button>
                        })}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h6 className="row nameClass my-0 py-1 border-top border-bottom fw-bold border-dark w-18">ORGANIZATION</h6>
                    <div className="marginLeft py-2">
                        {
                            resumeDetails?.experience?.map(exp => {
                                return <>
                                    <h6 className="row desclass px-4">{exp?.companyname}</h6>
                                    <div className="row float-start px-4" style={{ fontSize: "10px" }}>{exp?.startDate} - {exp?.EndDate}</div>
                                    <br />
                                </>
                            })
                        }
                    </div>
                    <br />
                    <h6 className="row nameClass my-0 py-1 border-top border-bottom fw-bold border-dark w-22">HONORS AND AWARDS</h6>
                    <div className="marginLeft py-2">
                        <div className=" marginLeft">
                            <h6 className="row desclass px-4">{resumeDetails?.extra_honor_1}{resumeDetails?.extra_honor_1_year ? (resumeDetails?.extra_honor_1_year) : ''}</h6>
                            <div className="row float-start px-4" style={{ fontSize: "10px" }}><i>{resumeDetails?.extra_honor_1_loc}</i></div>
                        </div>
                        <br />
                        <div className="marginLeft ">
                            <h6 className="row desclass px-4">{resumeDetails?.extra_honor_2}{resumeDetails?.extra_honor_2_year ? (resumeDetails?.extra_honor_2_year) : ''}</h6>
                            <div className="row float-start px-4" style={{ fontSize: "10px" }}><i>{resumeDetails?.extra_honor_2_loc}</i></div>
                        </div>
                        <br />
                        <div className="marginLeft">
                            <h6 className="row desclass px-4">{resumeDetails?.extra_honor_3}{resumeDetails?.extra_honor_3_year ? (resumeDetails?.extra_honor_3_year) : ''}</h6>
                            <div className="row float-start px-4" style={{ fontSize: "10px" }}><i>{resumeDetails?.extra_honor_3_loc}</i></div>
                        </div>
                    </div>
                    <br />
                    <h6 className="row nameClass my-0 py-1 border-top border-bottom fw-bold border-dark w-28">CONFERENCES AND COURSES</h6>
                    <div className="marginLeft py-2">
                        <h6 className="row desclass px-4">{resumeDetails?.extra_con_1}{resumeDetails?.extra_con_1_year ? (resumeDetails?.extra_con_1_year) : ''}</h6>
                        <div className="row float-start px-4" style={{ fontSize: "10px" }}><i>{resumeDetails?.extra_con_1_loc}</i></div>
                    </div>
                    <br />
                    <div className=" marginLeft py-2">
                        <h6 className="row desclass px-4">{resumeDetails?.extra_con_2}{resumeDetails?.extra_con_2_year ? (resumeDetails?.extra_con_2_year) : ''}</h6>
                        <div className="row float-start px-4" style={{ fontSize: "10px" }}><i>{resumeDetails?.extra_con_2_loc}</i></div>
                    </div>
                    <br />
                    <div className="marginLeft py-2">
                        <h6 className="row desclass px-4">{resumeDetails?.extra_con_3}{resumeDetails?.extra_con_3_year ? (resumeDetails?.extra_con_3_year) : ''}</h6>
                        <div className="row float-start px-4" style={{ fontSize: "10px" }}><i>{resumeDetails?.extra_con_3_loc}</i></div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}