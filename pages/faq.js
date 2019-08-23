import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
class faq extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }
  render() {
    return(
      <StaticLayout>

<section class="page-title centred" style={{"backgroundImage": "url(images/main-slider/slider-Image-1.jpg)"}}>
		<div class="container">
			<div class="content-box">
				<div class="title">FAQs</div>
				<ul class="bread-crumb">
					<li><a href="index-2.html">Home</a></li>
					<li>FAQs</li>
				</ul>
			</div>
		</div>
	</section>
	<div class="section-1">
		<div class="row">
			<div class="col-12">
				<div class="section-heading text-center">
					<p>HAVE A QUESTION?</p>
					<h2><span>Get answers</span> to FAQs</h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="accordions" id="accordion" role="tablist" aria-multiselectable="true">

					
					<div class="panel single-accordion">
						<h4><a role="button" class="" aria-expanded="true" aria-controls="collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"> What is CowFunding by Selema Farms about?
                </a></h4>
						<div id="collapseOne" class="accordion-content collapse show">
							<p> This is an Investment in Cows for a given tenure, usually (eight months). Cowfunding by Selema Farms gives opportunities to discerning investors looking to invest in Livestock Farming for a select period of time.</p>
						</div>
						<hr class="col-sm-10"/>
					</div>

		
					<div class="panel single-accordion">
						<h4>
							<a role="button" class="collapsed" aria-expanded="true" aria-controls="collapseTwo" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo">What is a tenure?
                  <span class="accor-open"><i class="arrow_carrot-up" aria-hidden="true"></i></span>
                  <span class="accor-close"><i class="arrow_carrot-down" aria-hidden="true"></i></span>
                </a>
						</h4>
						<div id="collapseTwo" class="accordion-content collapse">
							<p>A Tenure is a time it takes after funds have been raised for the Cows to be procured at a certain size, fattened and sold either as actual livestock to other processors OR Abbattiors OR it is processed and sold to our customers. Investors are paid back their investment and profit in eight months.</p>
						</div>
							<hr class="col-sm-10"/>
					</div>

					
					<div class="panel single-accordion">
						<h4>
							<a role="button" aria-expanded="true" aria-controls="collapseThree" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseThree">How do I invest in CowFunding by Selema Farms?
                  <span class="accor-open"><i class="arrow_carrot-up" aria-hidden="true"></i></span>
                  <span class="accor-close"><i class="arrow_carrot-down" aria-hidden="true"></i></span>
                </a>
						</h4>
						<div id="collapseThree" class="accordion-content collapse">
							<p>a. Click CowFunding by Selema Farms website to begin <br/>b. Select the number of Livestock unit(s) and proceed to make payment <br/> c. Please fill in all accurate contact details (email address & phone number), you will be sent regular feedback of all farm activities and updates.</p>
						</div>
							<hr class="col-sm-10"/>
					</div>

					
					<div class="panel single-accordion">
						<h4>
							<a role="button" aria-expanded="true" aria-controls="collapseFour" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseFour">How much per Investment OR unit slot?
                  <span class="accor-open"><i class="arrow_carrot-up" aria-hidden="true"></i></span>
                  <span class="accor-close"><i class="arrow_carrot-down" aria-hidden="true"></i></span>
                </a>
						</h4>
						<div id="collapseFour" class="accordion-content collapse">
							<p>This begins at N50,000 per unit/cow.</p>
						</div>
							<hr class="col-sm-10"/>
					</div>

					
					<div class="panel single-accordion">
						<h4>
							<a role="button" aria-expanded="true" aria-controls="collapseFive" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseFive"> What is the minimum and maximum investment units on CowFunding by Selema Farms?
                  <span class="accor-open"><i class="arrow_carrot-up" aria-hidden="true"></i></span>
                  <span class="accor-close"><i class="arrow_carrot-down" aria-hidden="true"></i></span>
                </a>
						</h4>
						<div id="collapseFive" class="accordion-content collapse">
							<p>a. The minimum investment is N50,000, the number of units you choose to purchase is unlimited. Meaning, there’s no cap on how many cows you can invest in.</p>
						</div>
							<hr class="col-sm-10"/>
					</div>


					<div class="panel single-accordion">
						<h4>
							<a role="button" aria-expanded="true" aria-controls="collapseFive" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapsesix">How do I make money as an investor?
                  <span class="accor-open"><i class="arrow_carrot-up" aria-hidden="true"></i></span>
                  <span class="accor-close"><i class="arrow_carrot-down" aria-hidden="true"></i></span>
                </a>
						</h4>
						<div id="collapsesix" class="accordion-content collapse">
							<p>a. At the beginning of each tenure, you get to sponsor a number of units for a stipulated duration. At the end of said tenure, your capital and interest will be paid into your account! It is that simple</p>
						</div>
							<hr class="col-sm-10"/>
					</div>

					<div class="panel single-accordion">
						<h4>
							<a role="button" aria-expanded="true" aria-controls="collapseFive" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseseven"> How safe is my investment as an Investor?
                  <span class="accor-open"><i class="arrow_carrot-up" aria-hidden="true"></i></span>
                  <span class="accor-close"><i class="arrow_carrot-down" aria-hidden="true"></i></span>
                </a>
						</h4>
						<div id="collapseseven" class="accordion-content collapse">
							<p>All CowFunding by Selema Farms investments are insured by Leadway, so in any happenstance, your investment is secured.</p>
						</div>
							<hr class="col-sm-10"/>
					</div>

				</div>
			</div>
		</div>
	</div>


</StaticLayout>

    )
        }
            }

export default faq;

