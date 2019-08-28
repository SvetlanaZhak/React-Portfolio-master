import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {

    return (
      <section id="contact">

        <div >
          <h2>
            <i className='fa fa-phone' />{' '}358 4578732621
          </h2>
          <h2 style={{ cursor: 'pointer' }} onClick={() => {
            window.location.href = 'mailto:lana.zhak@gmail.com';
          }}> <i className='fa fa-envelope' />{' '}{' '}{' '}lana.zhak@gmail.com</h2>
        </div>
      </section >
    );
  }
}
