import React, { useState, useEffect } from 'react'
import './TabProfile.css'


const TabProfile = () => {
    const [state, setstate] = useState(1)
    const clickTab = (index) => {
        setstate(index)
    }
    return (
        <div className="tab-container">
            <div className="tabs">
                <div className={state === 1 ? "tab active-t" : "tab"} onClick={() => clickTab(1)}><h2>profile</h2></div>
                <div className={state === 2 ? "tab active-t" : "tab"} onClick={() => clickTab(2)}><h2>educational</h2></div>
            </div>
            <div className="content-tab">
                <div className={state === 1 ? "tab-con active-c" : "tab-con"}>
                    <p><span>Name:</span>Kantapon Klinkulab</p>
                    <p><span>Age:</span>23</p>
                    <p><span>Gender:</span>Male</p>
                    <p><span>Birthday:</span>November 9, 1998</p>
                    <p><span>Address:</span>Bang Khun Si , Bangkok Noi , Bangkok</p>
                </div>
                <div className={state === 2 ? "tab-con active-c" : "tab-con"}>
                    <h3>Suan Sunandha Rajabhat University</h3>
                    <p><span>Faculty:</span>Faculty of Science and Technology</p>
                    <p><span>Major:</span>Information Technology</p>
                    <p><span>GPA:</span>3.34</p>
                </div>
            </div>
        </div>
    )
}

export default TabProfile
