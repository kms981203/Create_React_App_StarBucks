import React, { Component } from 'react';

class Section4Component extends Component {
    render() {
        return (
            <section id='section4'>
			<div>
				<h2 className='hid'>섹션4</h2>
				
				<span className='section4-ani1'><img src='img/19_summer_new_bean.png' alt=''/></span>
				
				<span className='section4-ani2'>
					<img src='img/19_summer_new_bean_ttl.png' alt=''/><br/>
					<img src='img/19_summer_new_bean_txt.png' alt=''/><br/>
					<a href='#' className='sec4ViewBtn'>자세히보기</a>
				</span>
				
			</div>
		    </section>
        );
    }
}

export default Section4Component;