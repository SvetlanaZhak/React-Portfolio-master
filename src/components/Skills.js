import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, { Component } from 'react';
export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { category: 'frontend' };
    }

    render() {
        let resumeData = this.props.resumeData;

        return (
            <section id="skills">

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>


                    <div className="nine columns main-col">




                        <div className="bars">
                            <Grid item xs={30} className="buttons">
                                <ButtonGroup variant="contained" size="large" fullWidth aria-label="full width outlined button group">
                                    <Button style={{ color: this.state.category === 'frontend' ? 'rgb(176, 17, 17)' : 'black' }} className="button" onClick={() => this.setState({ category: 'frontend' })}>Front-end</Button>
                                    <Button style={{ color: this.state.category === 'backend' ? 'rgb(176, 17, 17)' : 'black' }} className="button" onClick={() => this.setState({ category: 'backend' })}>Back-end</Button>
                                    <Button style={{ color: this.state.category === 'people' ? 'rgb(176, 17, 17)' : 'black' }} className="button" onClick={() => this.setState({ category: 'people' })}>People</Button>
                                </ButtonGroup>
                            </Grid>
                            <ul className="skills">
                                {

                                    resumeData.skills && resumeData.skills[this.state.category].map((skill) => {
                                        return (
                                            <li>
                                                <span className={`bar-expand ${skill.toLowerCase().replace("customer service", "customer").replace("node.js", "node")}`}>
                                                </span><em>{skill}</em>
                                            </li>
                                        )
                                    })
                                }

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
        );
    }
}