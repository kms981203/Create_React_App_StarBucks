import React, { Component } from 'react';

class Section5Component extends Component {
    render() {
        return (
            <section id='section5'>
			<div>
				<h2 className='hid'>섹션5</h2>			
			
				<span className='section5-star-r-left'></span>
				
				<ul className='section5-starbucks-reserve'>
					<li>
						<img src='img/19_summer2_reserve_txt1.png' alt=''/>
						<img src='img/m_19_summer2_reserve_txt1.png' alt=''/>
					</li>
					<li><a href='#' className='section5-viewBtn'>자세히보기</a></li>
				</ul>
				
				<span className='section5-star-r-right'></span>
			
			</div>
		</section>
        );
    }
}

export default Section5Component;