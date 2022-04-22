import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header id='header'>
            <div>
                <ul className='floatclear'>
                    <li>
                        <h1><a href='index.html'><img src='img/logo.png' alt='logo'/></a></h1>
                    </li>
                    <li>
                        <div className='mobile'>
                            <ul className='mobile-icon-wrap'>
                                <li><a href='#'><img src='img/icon_user_m.png' alt=''/></a></li>
                                <li><a href='#'><img src='img/icon_spot_m.png' alt=''/></a></li>
                            </ul>
                            <div className='appBarBtn-wrap'>
                                <ul className='appBar-wrap'>
                                    <li className='appBar'></li>
                                    <li className='appBar'></li>
                                    <li className='appBar'></li>
                                </ul>
                                <a href='#' className='appBarBtn blind'>모바일 앱바버튼</a>
                            </div>
                        </div>
                    
    
                        {/*<!-- 모바일 메뉴 만들기 -->*/}
    
                        <div className='gnb-modal'> {/*<!-- 모달창 -->*/} 
                            
                            
                            
                            <div className='mobile-slide-wrap'>  {/*<!-- 모바일 우측 70% 너비 슬라이딩 대상 박스 -->*/}
                                <span className='mobileCloseBtn-wrap'><button className='mobileCloseBtn'><img src='img/btn_gnb_close.png' alt='close Image'/></button></span>
                                
                                <div> {/*<!-- 모바일 스크롤 박스 -->*/} 
                                    <ul>
                                        <li className='search-wrap'>
                                            <div>
                                                <input type='text' name='search' id='idsearch' placeholder='검색할 내용...'/>
                                                <button className='searchBtn'>Search</button>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <a href='#' className='mBtn myBtn'>My Starbucks</a>
                                            <div  className='msub'>
                                                <ul>
                                                    <li><a href='#' className='msubBtn'>한눈에 보기</a></li>
                                                    <li>
                                                        <a href='#' className='mBtn'>My 리워드</a>
                                                        <div  className='msub msubsub'>
                                                            <ul>
                                                                <li><a href='#' className='msubsubBtn'>리워드 및 혜택</a></li>
                                                                <li><a href='#' className='msubsubBtn'>별 히스토리</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href='#' className='mBtn'>My 스타벅스 카드</a>
                                                        <div  className='msub msubsub'>	
                                                            <ul>	
                                                                <li><a href='#' className='msubsubBtn'>보유 카드</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>카드 등록</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>카드 충전</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>분실신고/잔액이전</a></li>	
                                                            </ul>	
                                                        </div>	
                                                        
                                                    </li>
                                                    <li>
                                                        <a href='#' className='mBtn'>My 스타벅스 e-Gift Card</a>
                                                        <div  className='msub msubsub'>	
                                                            <ul>	
                                                                <li><a href='#' className='msubsubBtn'>선물하기</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>선물내용</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>장바구니 내역</a></li>	
                                                            </ul>	
                                                        </div>														
                                                    </li>
                                                    <li>
                                                        <a href='#' className='mBtn'>My 쿠폰</a>
                                                        <div  className='msub msubsub'>	
                                                            <ul>	
                                                                <li><a href='#' className='msubsubBtn'>등록하기</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>선물하기</a></li>	
                                                                <li><a href='#' className='msubsubBtn'>사용하기</a></li>	
                                                            </ul>	
                                                        </div>														
                                                    </li>
                                                    <li><a href='#' className='msubBtn'>My 캘린더</a></li>
                                                    <li><a href='#' className='msubBtn'>My 메뉴</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href='#' className='mBtn'>COFFEE</a>
                                        </li>
                                        <li>
                                            <a href='#' className='mBtn'>MENU</a>
                                        </li>
                                        <li>
                                            <a href='#' className='mBtn'>STORE</a>
                                        </li>
                                        <li>
                                            <a href='#' className='mBtn'>MY STARBUCKS REWARDS</a>
                                        </li>
                                        <li>
                                            <a href='#' className='mBtn'>WHATS NEW</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        {/*<!-- 모바일 메뉴 만들기 -->*/}
                        
                        
                        
                        
                        <ul className='header-right-wrap pc'>
                            <li>
                                <aside>
                                    <ul  className='floatclear'>
                                        <li><a href='#'>Sign In</a></li>
                                        <li><a href='#'>My Starbucks</a></li>
                                        <li><a href='#'>Customer Service & Ideas</a></li>
                                        <li><a href='#'>Find a Store</a></li>
                                        <li><a href='#'><img src='img/icon_magnifier_black.png' alt=''/></a></li>
                                    </ul>
                                </aside>
                            </li>
                            <li>
                                <nav  className='floatclear'>
                                    <ul className='floatclear'>
                                        <li>
                                            <a href='#' className='mainBtn'>COFFEE</a>
                                            <div className='sub1 sub'> {/*<!-- 100% -->*/}
                                                <ul> {/*<!-- 1100px 가운데 정렬 -->*/}
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브1-1행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브1-1행-박스그룹 -->*/}
                                                            <li> {/*<!-- 서브1-1행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>커피</a></li>
                                                                    <li><a href='#'>스타벅스 원두</a></li>
                                                                    <li><a href='#'>스타벅스 비아</a></li>
                                                                    <li><a href='#'>스타벅스 오리가미</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브1-1행-2열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>나와 어울리는 커피</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브1-1행-3열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>스타벅스 리저브™</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브1-1행-4열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>에스프레소 음료</a></li>
                                                                    <li><a href='#'>도피오</a></li>
                                                                    <li><a href='#'>에스프레소 마키아또</a></li>
                                                                    <li><a href='#'>아메리카노</a></li>
                                                                    <li><a href='#'>마키아또</a></li>
                                                                    <li><a href='#'>카푸치노</a></li>
                                                                    <li><a href='#'>라떼</a></li>
                                                                    <li><a href='#'>모카</a></li>
                                                                    <li><a href='#'>리스트레또 비안코</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브1-1행-5열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>최상의 커피를 즐기는 법</a></li>
                                                                    <li><a href='#'>커피 프레스</a></li>
                                                                    <li><a href='#'>푸어 오버</a></li>
                                                                    <li><a href='#'>아이스 푸어오버</a></li>
                                                                    <li><a href='#'>커피 메이커</a></li>
                                                                    <li><a href='#'>리저브를 매장에서 다양하게 즐기는 법</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li> {/*<!-- 서브1-1행-끝 -->*/}
                                                    
                                                    
                                                    
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브1-2행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브1-2행-박스그룹 -->*/}
                                                            <li> 				 {/*<!-- 서브1-2행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>커피 이야기</a></li>
                                                                    <li><a href='#'>스타벅스 로스트 스팩트럼</a></li>
                                                                    <li><a href='#'>최상의 아라비카 원두</a></li>
                                                                    <li><a href='#'>한 잔의 커피가 완성되기까지</a></li>
                                                                    <li><a href='#'>클로버® 커피 추출 시스템</a></li>
                                                                    <li><a href='#'>스타벅스 디카페인</a></li>
                                                                </ul>
                                                            </li>  				{/*<!-- 서브1-2행-1열-끝 -->*/}
                                                        </ul>
                                                    </li> {/*<!-- 서브1-2행-끝 -->*/}
                                                </ul> {/*<!--  너비 1100px -->*/}
                                                
                                                <div> {/*<!-- 서브의 하단 배경패턴 너비 100% -->*/}
                                                    <ul> {/*<!-- 서브의 하단 서브버튼 텍스트 너비 1100px 가운데정렬-->*/}
                                                        <li><a href='#'>나와 어울리는 커피 찾기</a></li>
                                                        <li><span>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</span></li>
                                                        <li><a href='#'>최상의 커피를 즐기는 법</a></li>
                                                        <li><span>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</span></li>
                                                    </ul>
                                                </div>
                                            </div>  {/*<!-- 서브메뉴 끝 너비 100% -->*/}
                                        </li>
                                        <li>
                                            <a href='#' className='mainBtn'>MENU</a>
                                            <div className='sub2 sub'> {/*<!-- 서브2 100% -->*/}
                                                <ul> {/*<!-- 1100px 가운데 정렬 -->*/}
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브2-1행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브2-1행-박스그룹 -->*/}
                                                            <li> {/*<!-- 서브2-1행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>음료</a></li>
                                                                    <li><a href='#'>콜드 브루</a></li>
                                                                    <li><a href='#'>브루드 커피</a></li>
                                                                    <li><a href='#'>에스프레소</a></li>
                                                                    <li><a href='#'>프라푸치</a></li>
                                                                    <li><a href='#'>노블렌디드 음료</a></li>
                                                                    <li><a href='#'>스타벅스 피지</a></li>
                                                                    <li><a href='#'>오티(티바나)</a></li>
                                                                    <li><a href='#'>기타 제조 음료</a></li>
                                                                    <li><a href='#'>스타벅스 주스(병음료)</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브2-1행-2열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>푸드</a></li>
                                                                    <li><a href='#'>베이커리</a></li>
                                                                    <li><a href='#'>케이크</a></li>
                                                                    <li><a href='#'>샌드위치 & 샐러드</a></li>
                                                                    <li><a href='#'>따뜻한 푸드</a></li>
                                                                    <li><a href='#'>과일 & 요거트</a></li>
                                                                    <li><a href='#'>스낵 & 미니 디저트</a></li>
                                                                    <li><a href='#'>아이스크림</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브2-1행-3열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>상품</a></li>
                                                                    <li><a href='#'>머그</a></li>
                                                                    <li><a href='#'>글라스</a></li>
                                                                    <li><a href='#'>플라스틱 텀블러</a></li>
                                                                    <li><a href='#'>스테인리스 텀블러</a></li>
                                                                    <li><a href='#'>보온병</a></li>
                                                                    <li><a href='#'>액세서리</a></li>
                                                                    <li><a href='#'>커피 용품</a></li>
                                                                    <li><a href='#'>패키지 티(티바나)</a></li>
                                                                    <li><a href='#'>스타벅스 플래너</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브2-1행-4열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>카드실물카드</a></li>
                                                                    <li><a href='#'>e-Gift 카드</a></li>
                                                                </ul>
                                                            </li>
                                                            
                                                            <li> {/*<!-- 서브2-1행-5열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>메뉴 이야기</a></li>
                                                                    <li><a href='#'>나이트로 콜드브루</a></li>
                                                                    <li><a href='#'>콜드 브루</a></li>
                                                                    <li><a href='#'>스타벅스 티바나</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li> {/*<!-- 서브2-1행-끝 -->*/}
                                                    
                                                </ul> {/*<!--  너비 1100px -->*/}
                                                
                                                <div> {/*<!-- 서브의 하단 배경패턴 너비 100% -->*/}
                                                    <ul> {/*<!-- 서브의 하단 서브버튼 텍스트 너비 1100px 가운데정렬-->*/}
                                                        <li><a href='#'>나이트로 콜드 브루 <img src='img/icon_gnb_new.png' alt=''/></a></li>
                                                        <li><span>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</span></li>
                                                    </ul>
                                                </div>
                                            </div>  {/*<!-- 서브메뉴 끝 너비 100% -->*/}
                                        </li>
                                        <li>
                                            <a href='#' className='mainBtn'>STORE</a>
                                            <div className='sub3 sub'> {/*<!-- 100% -->*/}
                                                <ul> {/*<!-- 1100px 가운데 정렬 -->*/}
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브3-1행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브3-1행-박스그룹 -->*/}
                                                            <li> {/*<!-- 서브3-1행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>매장 찾기</a></li>
                                                                    <li><a href='#'>퀵 검색</a></li>
                                                                    <li><a href='#'>지역 검색</a></li>
                                                                    <li><a href='#'>My 매장</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브3-1행-2열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>드라이브 스루 매장</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브3-1행-3열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>스타벅스 리저브™ 매장</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브3-1행-4열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>커뮤니티 스토어 매장</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브3-1행-5열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>프리미어 푸드 서비스 스토어</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li> {/*<!-- 서브3-1행-끝 -->*/}
    
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브3-2행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브3-2행-박스그룹 -->*/}
                                                            <li> 				 {/*<!-- 서브3-2행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>매장 이야기</a></li>
                                                                    <li><a href='#'>청담스타</a></li>
                                                                    <li><a href='#'>티바나 인스</a></li>
                                                                    <li><a href='#'>파이어드 매장</a></li>
                                                                    <li><a href='#'>파미에파크</a></li>
                                                                </ul>
                                                            </li>  				{/*<!-- 서브3-2행-1열-끝 -->*/}
                                                        </ul>
                                                    </li> {/*<!-- 서브3-2행-끝 -->*/}														
                                                    
                                                </ul> {/*<!--  너비 1100px -->*/}
                                                
                                                <div> {/*<!-- 서브의 하단 배경패턴 너비 100% -->*/}
                                                    <ul> {/*<!-- 서브의 하단 서브버튼 텍스트 너비 1100px 가운데정렬-->*/}
                                                        <li><a href='#'>매장찾기</a></li>
                                                        <li><span>보다 빠르게 매장을 찾아보세요.</span></li>
                                                        <li><a href='#'>더종로점 </a></li>
                                                        <li><span>전용 푸드와 티바나 티, 최고의 리저브 커피를 만나보세요.</span></li>
                                                    </ul>
                                                </div>
                                            </div>  {/*<!-- 서브메뉴 끝 너비 100% -->*/}
                                            
                                            
                                        </li>
                                        <li>
                                            <a href='#' className='mainBtn'>RESPONSIBILITY</a>
                                            <div className='sub4 sub'> {/*<!-- 100% -->*/}
                                                <ul> {/*<!-- 1100px 가운데 정렬 -->*/}
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브4-1행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브4-1행-박스그룹 -->*/}
                                                            <li> {/*<!-- 서브4-1행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>사회 공헌 캠페인 소개</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브4-1행-2열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>지역 사회 참여 활동</a></li>
                                                                    <li><a href='#'>희망배달 캠페인</a></li>
                                                                    <li><a href='#'>재능기부 카페 소식</a></li>
                                                                    <li><a href='#'>커뮤니티 스토어</a></li>
                                                                    <li><a href='#'>청년인재 양성</a></li>
                                                                    <li><a href='#'>우리 농산물 사랑 캠페인</a></li>
                                                                    <li><a href='#'>우리 문화 지키기</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브4-1행-3열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>환경보호 활동</a></li>
                                                                    <li><a href='#'>환경 발자국 줄이기</a></li>
                                                                    <li><a href='#'>일회용 컵 없는 매장</a></li>
                                                                    <li><a href='#'>커피 원두 재활용</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브4-1행-4열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>윤리 구매</a></li>
                                                                    <li><a href='#'>윤리적 원두 구매</a></li>
                                                                    <li><a href='#'>공정무역 인증</a></li>
                                                                    <li><a href='#'>커피 농가 지원 활동</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브4-1행-5열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>글로벌 사회 공헌</a></li>
                                                                    <li><a href='#'>윤리경영 보고서</a></li>
                                                                    <li><a href='#'>스타벅스 재단</a></li>
                                                                    <li><a href='#'>지구촌 봉사의 달</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li> {/*<!-- 서브4-1행-끝 -->*/}
                                                    
                                                    
                                                </ul> {/*<!--  너비 1100px -->*/}
                                                
                                                <div> {/*<!-- 서브의 하단 배경패턴 너비 100% -->*/}
                                                    <ul> {/*<!-- 서브의 하단 서브버튼 텍스트 너비 1100px 가운데정렬-->*/}
                                                        <li><a href='#'>커피원두 재활용</a></li>
                                                        <li><span>스타벅스 커피 원두를 재활용해 보세요.</span></li>
                                                    </ul>
                                                </div>
                                            </div>  {/*<!-- 서브메뉴 끝 너비 100% -->*/}
    
                                        </li>
                                        <li>
                                            <a href='#' className='mainBtn'>MY STARBUCKS REWARDS</a>
                                            <div className='sub5 sub'> {/*<!-- 100% -->*/}
                                                <ul> {/*<!-- 1100px 가운데 정렬 -->*/}
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브5-1행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브5-1행-박스그룹 -->*/}
                                                            <li> {/*<!-- 서브5-1행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>마이 스타벅스리워드</a></li>
                                                                    <li><a href='#'>마이 스타벅스 리워드 소개</a></li>
                                                                    <li><a href='#'>등급 및 혜택</a></li>
                                                                    <li><a href='#'>스타벅스 별</a></li>
                                                                    <li><a href='#'>자주하는 질문</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브5-1행-2열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>스타벅스 카드</a></li>
                                                                    <li><a href='#'>스타벅스 카드 소개</a></li>
                                                                    <li><a href='#'>스타벅스 카드 갤러리등록 및 조회</a></li>
                                                                    <li><a href='#'>충전 및 이용안내</a></li>
                                                                    <li><a href='#'>분실신고/환불신청</a></li>
                                                                    <li><a href='#'>자주하는 질문</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브5-1행-3열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>스타벅스 e-Gift Card</a></li>
                                                                    <li><a href='#'>스타벅스 e-Gift Card 소개</a></li>
                                                                    <li><a href='#'>이용안내</a></li>
                                                                    <li><a href='#'>선물하기</a></li>
                                                                    <li><a href='#'>자주하는 질문</a></li>
                                                                </ul>
                                                            </li>
    
                                                        </ul>
                                                    </li> {/*<!-- 서브5-1행-끝 -->*/}
                                                    
                                                </ul> {/*<!--  너비 1100px -->*/}
                                                
                                                <div> {/*<!-- 서브의 하단 배경패턴 너비 100% -->*/}
                                                    <ul> {/*<!-- 서브의 하단 서브버튼 텍스트 너비 1100px 가운데정렬-->*/}
                                                        <li><a href='#'>스타벅스 카드 등록하기</a></li>
                                                        <li><span>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</span></li>
                                                    </ul>
                                                </div>
                                            </div>  {/*<!-- 서브메뉴 끝 너비 100% -->*/}
                                            
                                        </li>
                                        <li>
                                            <a href='#' className='mainBtn'>WHAT'S NEW</a>
                                            <div className='sub6 sub'> {/*<!-- 100% -->*/}
                                                <ul> {/*<!-- 1100px 가운데 정렬 -->*/}
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브6-1행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브6-1행-박스그룹 -->*/}
                                                            <li> {/*<!-- 서브6-1행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>프로모션&이벤트</a></li>
                                                                    <li><a href='#'>전체</a></li>
                                                                    <li><a href='#'>스타벅스 카드</a></li>
                                                                    <li><a href='#'>마이 스타벅스 리워드</a></li>
                                                                    <li><a href='#'>온라인</a></li>
                                                                    <li><a href='#'>2019 스타벅스 플래너</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브6-1행-2열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>새소식</a></li>
                                                                    <li><a href='#'>전체</a></li>
                                                                    <li><a href='#'>상품 출시</a></li>
                                                                    <li><a href='#'>스타벅스와 문화</a></li>
                                                                    <li><a href='#'>스타벅스 사회공헌</a></li>
                                                                    <li><a href='#'>스타벅스 카드출시</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브6-1행-3열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>매장별 이벤트</a></li>
                                                                    <li><a href='#'>일반 매장</a></li>
                                                                    <li><a href='#'>신규 매장</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브6-1행-4열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>e-프리퀀시</a></li>
                                                                    <li><a href='#'>이용안내</a></li>
                                                                    <li><a href='#'>이용현황</a></li>
                                                                </ul>
                                                            </li>
                                                            <li> {/*<!-- 서브6-1행-5열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>공지사항</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li> {/*<!-- 서브6-1행-끝 -->*/}
                                                    
                                                    
                                                    
                                                    <li className='sub-row-wrap'>  {/*<!-- 서브6-2행-시작 -->*/}
                                                        <ul className='floatclear'>	 {/*<!-- 서브6-2행-박스그룹 -->*/}
                                                            <li> 				 {/*<!-- 서브6-2행-1열 -->*/}
                                                                <ul>
                                                                    <li><a href='#'>월페이퍼</a></li>
                                                                </ul>
                                                            </li>  				{/*<!-- 서브6-2행-1열-끝 -->*/}
                                                        </ul>
                                                    </li> {/*<!-- 서브6-2행-끝 -->*/}
                                                </ul> {/*<!--  너비 1100px -->*/}
                                                
                                                <div> {/*<!-- 서브의 하단 배경패턴 너비 100% -->*/}
                                                    <ul> {/*<!-- 서브의 하단 서브버튼 텍스트 너비 1100px 가운데정렬-->*/}
                                                        <li><a href='#'>나와 어울리는 커피 찾기</a></li>
                                                        <li><span>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</span></li>
                                                        <li><a href='#'>최상의 커피를 즐기는 법</a></li>
                                                        <li><span>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</span></li>
                                                    </ul>
                                                </div>
                                            </div>  {/*<!-- 서브메뉴 끝 너비 100% -->*/}
                                            
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
        );
    }
}

export default HeaderComponent;