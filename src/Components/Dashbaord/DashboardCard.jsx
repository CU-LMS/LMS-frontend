import React from 'react';

const DashboardCard = ({ ele, id, isLoading, handleClickButtonRoll }) => {
    return (
        <div className="dash_courseCard" key={id.courseId}>
            <div
                className="overflow1"
                style={{ borderBottom: "7px solid grey" }}
            >
                <img
                    className="imageArea"
                    src={ele.bannerImageName}

                    alt="..."
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h6 style={{ fontWeight: 600 }}>{ele.courseName}</h6>
                <p className="dash_cardInfo">{ele.courseCode}</p>

                <button
                    className="enrollButtonNow"
                    onClick={() => handleClickButtonRoll(ele.courseId)}
                    disabled={isLoading}
                >
                    {isLoading ? <div className="loader" /> : "View More"}
                </button>
            </div>
        </div>
    )
}

export default DashboardCard