import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer id='footer'>
            <div>
                <ul>
                    <li>
                        <ul className='footer-sitemap floatclear'>
                            <li>
                                <a href='#'>COMPANY</a>
                                <ul>
                                    <li><a href='#'>한눈에 보기</a></li>
                                    <li><a href='#'>스타벅스 사명</a></li>
                                    <li><a href='#'>스타벅스 소개</a></li>
                                    <li><a href='#'>국내 뉴스룸</a></li>
                                    <li><a href='#'>세계의 스타벅스</a></li>
                                    <li><a href='#'>글로벌 뉴스룸</a></li>
                                </ul>
                            </li>	
                            <li>
                                <a href='#'>CORPORATE SALES</a>
                                <ul>
                                    <li><a href='#'>단체 및 기업 구매 안내</a></li>
                                </ul>
                            </li>	
                            <li>
                                <a href='#'>PARTNERSHIP</a>
                                <ul>
                                    <li><a href='#'>신규 입점 제의</a></li>
                                    <li><a href='#'>협력 고객사 등록신청</a></li>
                                </ul>
                            </li>	
                            <li>
                                <a href='#'>ONLINE COMMUNITY</a>
                                <ul>
                                    <li><a href='#'>페이스북</a></li>
                                    <li><a href='#'>트위터</a></li>
                                    <li><a href='#'>유튜브</a></li>
                                    <li><a href='#'>블로그</a></li>
                                    <li><a href='#'>인스타그램</a></li>
                                </ul>
                            </li>	
                            <li>
                                <a href='#'>RECRUIT</a>
                                <ul>
                                    <li><a href='#'>채용 소개</a></li>
                                    <li><a href='#'>채용 지원하기</a></li>
                                </ul>
                            </li>	
                        </ul>
                    </li>
                    <li>
                        <div  className='footSlide-view'>
                            <div className='footSlide-wrap'>
                                <a href='#' className='footSlide footSlide0'><img src='img/footer_award17_01.jpg' alt='icon'/></a>
                                <a href='#' className='footSlide footSlide1'><img src='img/footer_award17_02.jpg' alt='icon'/></a>
                                <a href='#' className='footSlide footSlide2'><img src='img/footer_award17_03.jpg' alt='icon'/></a>
                                <a href='#' className='footSlide footSlide3'><img src='img/footer_award17_04.jpg' alt='icon'/></a>
                                <a href='#' className='footSlide footSlide4'><img src='img/footer_award17_05.jpg' alt='icon'/></a>
                                <a href='#' className='footSlide footSlide5'><img src='img/footer_award17_06.jpg' alt='icon'/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href='#'>개인정보처리방침</a> <a href='#'>영상정보처리기기운영관리 방침</a> <a href='#'>홈페이지 이용약관</a> <a href='#'>위치정보 이용약관</a> <a href='#'>스타벅스 카드 이용약관</a> <a href='#'>비회원 이용약관</a> <a href='#'>윤리경영 핫라인</a>
                    </li>
                    <li>
                        <a href='#'>찾아오시는 길</a> <a href='#'>신규입점제의</a> <a href='#'>사이트 맵</a>
                    </li>
                    <li>
                        <address>
                            <p>사업자등록번호 : 201-81-21515 (주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭 TEL : 02) 3015-1100 개인정보 책임자 : 강기원</p>
                            <p>&copy; 2019 Starbucks Coffee Company. All Rights Reserved.</p>
                        </address>
                    </li>
                </ul>
            </div>
            </footer>
        );
    }
}

export default FooterComponent;