import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">

            <h2>Contact Details</h2>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in:{' '}
                {resumeData.linkedinId}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}