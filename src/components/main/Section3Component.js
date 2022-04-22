import React, { Component } from 'react';

class Section3Component extends Component {
    render() {
        return (
            <section id='section3'>
			<div>
				<h2 className='hid'>섹션3</h2>
				{/*<!-- 배경 시작 -->*/}
				<ul className='floatclear'>
					<li></li>
					<li></li>
				</ul>
				{/*<!-- 배경 끝 -->*/}
				
				
				{/*<!-- 콘텐츠 박스  -->*/}
				<div className='section3-content'>
					<ul className='floatclear'>
						<li>
							<img className='starbg' src='img/reward_star_bg_w.png' alt=''/>
							<img className='starbg2' src='img/reward_star_bg_m.png' alt=''/>
							<img className='starTitle' src='img/reward_logo.png' alt=''/>
						</li>
						<li>
							<img className='reward_txt1' src='img/reward_txt.png' alt=''/>
							<img className='reward_txt2' src='img/tablet_reward_txt.png' alt=''/>
							<img className='reward_txt3' src='img/mobile_reward_logo2.png' alt=''/>
							<img className='reward_txt4' src='img/mobile_reward_txt.png' alt=''/>
							
							
							<ul className='section3-right-btn-wrap section3-right-btn-wrap1'>
								<li className='floatclear'><a href='#' className='gaibBtn'>회원가입</a><a href='#' className='loginBtn'>로그인</a></li>
							</ul>
							
							<img className='egiftCard_txt1' src='img/egiftCard_txt.png' alt=''/>
							<img className='egiftCard_txt2' src='img/tablet_egiftCard_txt.png' alt=''/>
							<img className='egiftCard_txt3' src='img/mobile_egiftCard_txt.png' alt=''/>
							
							<ul className='section3-right-btn-wrap section3-right-btn-wrap2'>
								<li><a href='#' className='giftBtn'>e-Gift Card 선물하기</a></li>
							</ul>
						</li>
					</ul>
				</div>
				
			</div>
		</section>
        );
    }
}

export default Section3Component;