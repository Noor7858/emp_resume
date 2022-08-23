import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Languages from "./Languages";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";

export default function Resume_builder(props) {
    const [resumeState, setResumeState] = useState({
        step: 1, // to track the movement back and forward using buttons
        // personal details
        name: '',
        designation: '',
        description: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        skype: '',
        skills: '',
        // Work experience which will have orgs
        experience: [{
            designation: '', companyname: '', startDate: '', EndDate: '', location: '', proj_desc: ''
        }],
        // Education
        edu1_school: '',
        edu1_year: '',
        edu1_qualification: '',
        edu1_sdate: '',
        edu1_edate: '',

        edu2_school: '',
        edu2_year: '',
        edu2_qualification: '',
        edu2_sdate: '',
        edu2_edate: '',
        // Languages
        lang_english: 0,
        lang_hindi: 0,
        lang_spanish: 0,
        lang_french: 0,
        // Honours and awrds
        extra_honor_1: '',
        extra_honor_1_loc: '',
        extra_honor_1_year: '',
        extra_honor_2: '',
        extra_honor_2_loc: '',
        extra_honor_2_year: '',
        extra_honor_3: '',
        extra_honor_3_loc: '',
        extra_honor_3_year: '',
        // conferences and courses
        extra_con_1: '',
        extra_con_1_loc: '',
        extra_con_1_year: '',
        extra_con_2: '',
        extra_con_2_loc: '',
        extra_con_2_year: '',
        extra_con_3: '',
        extra_con_3_loc: '',
        extra_con_3_year: '',
        // status
        status: 0

    })
    //Go to next step
    const nextStep = () => {
        const { step } = resumeState;
        setResumeState({ ...resumeState, step: step + 1 })
    }

    // Go back to prev step
    const prevStep = () => {
        const { step } = resumeState;
        setResumeState({ ...resumeState, step: step - 1 })
    };

    const submitted = () => {
        const { status } = resumeState;
        postData();
        setResumeState({ ...resumeState, status: status + 1 })
    }

    const handleChange = ({ target: { value, name } }) => {
        setResumeState({ ...resumeState, [name]: value })
    }
    const updateExperience = (value, name) => {
        let newState = resumeState
        newState[name] = value
        setResumeState(newState)
    }

    
    const postData = () => {
        alert('234567890')
        fetch('http://localhost:5000/addDatatojson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(resumeState)
        }).then(function (response) {
            console.log(response)
            return response.json();
        }).then(function (myJson) {
            console.log(myJson);
        });
    }

    const { step } = resumeState;
    switch (step) {
        case 1:
            return (
                <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">
                        <PersonalDetails
                            values={resumeState}
                            nextStep={nextStep}
                            handleChange={handleChange}
                        />
                    </div>
                    <br />
                </div>
            );

        case 2:
            return (
                <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">
                        <Experience
                            values={resumeState}
                            prevStep={prevStep}
                            nextStep={nextStep}
                            handleChange={handleChange}
                            updateExperience={updateExperience}
                        />
                    </div>
                    <br />
                </div>
            );
        case 3:

            return (
                <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">
                        <Education
                            values={resumeState}
                            prevStep={prevStep}
                            nextStep={nextStep}
                            handleChange={handleChange}
                        />
                    </div>
                    <br />
                </div>
            );
        case 4:
            return (
                <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">
                        <Languages
                            values={resumeState}
                            prevStep={prevStep}
                            nextStep={nextStep}
                            handleChange={handleChange}
                        />
                    </div>
                    <br />
                </div>
            );
        case 5:
            return (
                <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">
                        <Extras
                            values={resumeState}
                            prevStep={prevStep}
                            nextStep={nextStep}
                            handleChange={handleChange}
                            submitted={submitted}
                        />
                    </div>
                    <br />
                </div>
            );
        case 6:
            return (
                <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">
                        <Success />
                    </div>
                    <br />
                </div>
            );
    }
}