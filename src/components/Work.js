import React, { Component } from 'react';
export default class Work extends Component {
    renderSpecialization(specialization, years) {
        if (!specialization || !years) {
            return;
        }
        return (
            <>
                <p className="info">
                    {specialization}
                    <span>&bull;</span>
                    <em className="date"> {years}</em>
                </p>
            </>
        );
    }

    render() {
        let resumeData = this.props.resumeData;

        return (
            <section id="work">



                <div className="row work" >
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((item, index) => {

                                return (
                                    <div className="row item" key={index}>
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}{' '}
                                                <span className="date">{' '}{item.years}</span>
                                            </p>
                                            <p>
                                                {item.responsibilities}
                                            </p>
                                            {item.specialization2 &&
                                                (<><p className="info">{item.specialization2}{' '}<span className="date">{' '}{item.years2}</span></p>

                                                    <p>{item.responsibilities2}</p></>)
                                            }
                                        </div>

                                    </div>



                                )
                            })
                        }
                    </div>

                </div>
            </section >
        );
    }
}
