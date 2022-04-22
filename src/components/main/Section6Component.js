import React, { Component } from 'react';

class Section6Component extends Component {
    render() {
        return (
            <section id='section6'>
			<div>
				<h2 className='hid'>섹션6</h2>
				
				<span className='section6-19_summer_fav'><img src='img/19_summer_fav_vday_img.png' alt=''/></span>
				
				<ul className='section6-left-wrap'>
					<li>
						<img className='sec6PcImg1' src='img/fav_prod_txt01.png' alt=''/>
						<img className='sec6MobileImg1' src='img/mobile_menu_txt01.png' alt=''/>
					</li>
					<li>
						<img className='sec6PcImg2' src='img/fav_prod_txt02.png' alt=''/>
						<img className='sec6MobileImg2' src='img/mobile_menu_txt02.png' alt=''/>
					</li>
					<li><a href='#' className='section6-viewBtn'>자세히보기</a></li>
				</ul>
				
			</div>
		</section>
        );
    }
}

export default Section6Component;