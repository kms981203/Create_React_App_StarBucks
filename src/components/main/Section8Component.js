import React, { Component } from 'react';

class Section8Component extends Component {
    render() {
        return (
            <section id='section8'>
			<div>
				<h2 className='hid'>섹션8</h2>
				<span className='section8-element-1'><img src='img/store_exp_img02.png' alt=''/></span>
				<span className='section8-element-2'><img src='img/store_exp_img01.png' alt=''/></span>
				
				<ul className='section8-element-3'>
					<li>
						<img className='sec8pcImg1' src='img/store_txt01.png' alt=''/>
						<img className='sec8MobileImg1' src='img/mobile_store_txt01.png' alt=''/>
					</li>
					<li>
						<img className='sec8pcImg2'  src='img/store_txt02.png' alt=''/>
						<img className='sec8MobileImg2' src='img/mobile_store_txt02.png' alt=''/>
					</li>
					<li><a href='#' className='section8-viewBtn'>자세히보기</a></li>
				</ul>

				<span className='section8-element-4'><img src='img/store_exp_img04.png' alt=''/></span>
			</div>
		</section>
        );
    }
}

export default Section8Component;