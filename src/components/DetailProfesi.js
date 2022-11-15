import React from "react";
// import PropTypes from "prop-types"


function DetailProfesi ({ job_title, job_description, education_level, salary, youtube, education_major })
{
    return(
        <div className="detail-profesi">
            <div className="text-detail">
                <h1>{job_title}</h1>
            </div>
            {/* deskripsi profesi */}
            <div className="job-describe">
                <p>
                    {job_description}
                </p>
            </div>

            {/* syarat pendidikan */}
            <div className="education-type">
                <p>
                    {education_level}
                </p>
            </div>

            {/* jurusan yang diperlukan */}
            <div className="education-major">
                <p>
                    {education_major}
                </p>
            </div>

            {/* kisaran gaji */}
            <div className="">
                <p>
                    {salary}
                </p>
            </div>

            {/* video youtube pembahasan profesi */}
            <div className="video-profesi">
                <video src={youtube}></video>
            </div>
        </div>
    )
}


// propTypes tambahin disini

export default DetailProfesi;