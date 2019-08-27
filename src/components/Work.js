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

                <div className="row work" />

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((item) => {

                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                            </p>
                                            <p className="date">{item.years}</p>

                                            {item.responsibilities && item.responsibilities.map((s) => <p className="date">{s}</p>)}





                                            <p className="info">{item.specialization2}</p>
                                            <p className="date">{item.years2}</p>
                                            {item.responsibilities2 && item.responsibilities2.map((s) => <p className="date">{s}</p>)}

                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

            </section>
        );
    }
}