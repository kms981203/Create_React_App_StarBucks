import React, { Component } from 'react';

class Section7Component extends Component {
    render() {
        return (
            <section id='section7'>
			<div>
				<h2 className='hid'>섹션7</h2>
				
				<div className='section7-reserve_medal'>
					<ul>
						<li className='section7-reserve'><img src='img/reserve_medal01.png' alt=''/></li>
						<li className='section7-reserve'>
							<img src='img/reserve_medal02.png' alt=''/>
							<a href='#' className='section7-viewBtn'>자세히보기</a>
						</li>
					</ul>	
				</div>
				
			</div>
		</section>
        );
    }
}

export default Section7Component;