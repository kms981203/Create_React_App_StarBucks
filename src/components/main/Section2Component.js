import React, { Component } from 'react';

class Section2Component extends Component {
    render() {
        return (
            <section id='section2'>
            <div>
            <h2 className='hid'>섹션2</h2>
            <div className='section2-row1-wrap'>
                <ul className='floatclear'>
                    <li className='floatclear'> 
                        <div>
                            <p className='notice-title-wrap'><img src='img/notice_ttl.png' alt=''/></p>						
                            <ul className='txtSlide-wrap'>
                                <li className='txtSlide'><a href='#'>앱 서비스/홈페이지 서비스 일부 중단안내</a></li>
                                <li className='txtSlide'><a href='#'>사이렌 오더 음료 기본 설정 변경 안내 (HOT → ICED)</a></li>
                                <li className='txtSlide'><a href='#'>속초지역 스타벅스 임시 휴점 안내 (‘19년 4월 5일)</a></li>
                                <li className='txtSlide'><a href='#'>스타벅스 SSG PAY 결제 서비스 일시 중지 안내</a></li>
                                <li className='txtSlide'><a href='#'>설 연휴 스타벅스 매장 영업시간 변경 안내</a></li>
                            </ul>								
                            <p className='moreBtn-wrap'><a href='#' className='moreBtn'><img src='img/btn_notice_plus.png' alt=''/></a></p>							
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='promotionBtn-wrap'><a href='#' className='promotionBtn'><span>스타벅스 프로모션</span></a></p>							
                        </div>
                    </li>
                </ul>
            </div>
    
            <div className='section2-row2-wrap'>
                <div>
                    {/*<!-- 슬라이드박스 -->*/}
                    <ul className='slide-wrap'>
                        <li className='slide addOpacity'><p><img src='img/slide01.jpg' alt=''/></p></li>
                        <li className='slide'><p><img src='img/slide02.jpg' alt=''/></p></li>
                        <li className='slide'><p><img src='img/slide03.jpg' alt=''/></p></li>
                    </ul>
                    
                    
                    {/*<!-- 콘트롤 박스[플레이 네비게이션 버튼 박스] -->*/}
                    <ul className='slide-control-wrap'>
                        <li><a href='#' className='playBtn blind'>플레이&일시정지</a></li>
                        <li><a href='#' className='navBtn  blind'>nav0</a></li>
                        <li><a href='#' className='navBtn  blind'>nav1</a></li>
                        <li><a href='#' className='navBtn  blind'>nav2</a></li>
                    </ul>
                    
                    
                    {/*<!-- 좌우 화살버튼[이전버튼,다음버튼] -->*/}
                    <span className='nextBtn-wrap'><a href='#' className='nextBtn blind'>다음버튼</a></span>
                    <span className='prevBtn-wrap'><a href='#' className='prevBtn blind'>이전버튼</a></span>
                    
                </div>
            </div>
            </div>
            </section>
        );
    }
}

export default Section2Component;