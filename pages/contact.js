import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
class contact extends React.Component{
	
    static async getInitialProps({ req }) {
      return { };
    }

    render() {
        return(
          <StaticLayout>
<section class="page-title centred" style={{"backgroundImage": "url(/images/background/page-title.jpg)"}}>
        <div class="container">
            <div class="content-box">
                <div class="title">Contact Us</div>
                <ul class="bread-crumb">
                    <li><a href="index-2.html">Home</a></li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </section>
                <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 contact-column">
                    <div class="contact-info">
                        <div class="contact-title">Get In Touch</div>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 column">
                                <div class="left-column single-info centred">
                                    <div class="icon-box"><i class="flaticon-map"></i></div>
                                    <h5>Address</h5>
                                    <div class="text">P6 12th Street, Olive Building Newyork, USA</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 column">
                                <div class="right-column single-info">
                                    <div class="icon-box"><i class="flaticon-mail"></i></div>
                                    <h5>Email</h5>
                                    <div class="text">Mail@example.com</div>
                                </div>
                                <div class="right-column single-info">
                                    <div class="icon-box"><i class="flaticon-phone-call-1"></i></div>
                                    <h5>Phone No</h5>
                                    <div class="text">+12345 06 789</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 contact-column">
                    <div class="contact-form-area">
                        <div class="contact-title">Send Us A Message</div>
                        <form id="contact-form" name="contact_form" class="default-form" action="http://html.tonatheme.com/2019/Hernando/inc/sendmail.php" method="post">
                            <div class="row">
                                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                    <label>Name *</label>
                                    <input type="text" name="form_name" value="" required=""/>
                                </div>
                                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                    <label>Email *</label>
                                    <input type="email" name="form_email" value="" required=""/>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <label>Subject</label>
                                    <input type="text" name="form_subject" value="" required=""/>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <label>Messsage</label>
                                    <textarea name="form_message" required=""></textarea>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" class="theme-btn" data-loading-text="Please wait...">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
                <section class="google-map-section">
        <div class="google-map-area">
            <div 
                class="google-map" 
                id="contact-google-map" 
                data-map-lat="40.652493" 
                data-map-lng="-73.791421" 
                data-icon-path="images/resource/map-marker.png"  
                data-map-title="Brooklyn, New York, United Kingdom" 
                data-map-zoom="12" 
                data-markers='{
                    "marker-1": [40.652493, -73.791421, "<h4>Branch Office</h4><p>77/99 London UK</p>","images/resource/map-marker.png"]
                }'>

            </div>
        </div>
    </section>
    
        <section class="subscribe-section">
        <div class="container">
            <div class="subscribe-content">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                        <div class="subscribe-title">Subscribe To Our Newsletter</div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                        <div class="subscribe-form">
                            <form action="#" method="post">
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="Your Email" required=""/>
                                    <button type="submit" class="theme-btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </StaticLayout>
    )
  }
}

export default contact;

