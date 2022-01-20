import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return <article id="testmonial" className='container-Testimonial'>
                <section className='Testimonial-parent'>
                    <div className='t-textos'>
                        <div className="colz"/>
                        <div className="AboutUs-details-role">
                        <span className="prymary-text">
                            {" "}
                            <h3 className="subtitle" >Testimonial</h3>
                            <h1 className='h1'>
                            {" "}
                            <em className="pink-Lorem">Lorem Ipsum </em>is simply dummy text.
                            </h1>
                            <span className="AboutUs-role-tagline">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        </span>
                    </div>
                    </div>
                    <div className='t-components'>
                        <div className='Component t-not t-top'>
                            <div className='t-info'>
                                    <div className='t-image'/>
                                    <div className='t-titles'>
                                        <h2 className='t-name'> Lorem Ipsum</h2>
                                        <h3 className='t-subtitle'> Ele faz algo da vida</h3>
                                    </div>
                                </div>
                            <p className='t-texty'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className='Component t-middle'>
                            <div className='t-info'>
                                    <div className='t-image'/>
                                    <div className='t-titles'>
                                        <h2 className='t-name'> Lorem Ipsum</h2>
                                        <h3 className='t-subtitle'> Ele faz algo da vida</h3>
                                    </div>
                                </div>
                            <p className='t-texty'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className='Component t-not t-bottom'>
                            <div className='t-info'>
                                    <div className='t-image'/>
                                    <div className='t-titles'>
                                        <h2 className='t-name'> Lorem Ipsum</h2>
                                        <h3 className='t-subtitle'> Ele faz algo da vida</h3>
                                    </div>
                                </div>
                            <p className='t-texty'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
            </section>
</article>;

};

export default Testimonial;
