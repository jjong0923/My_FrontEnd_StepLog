## v/dv(dynamic viewport)/sv(small viewport)/lv(large viewport)
### v
- 브라우저 크기
### dv - 특별한 경우
- 실시간으로 변화, 보여주는 뷰포트
### sv - 안정적
- ui 포함된 뷰포트 ex) 중요한 컨텐츠
### lv - 최대 화면 활용
- ui 포함안된 뷰포트, 모바일 주소창 무시

### w-full/w-screen
full - 100%
screen - 100vw
=> full은 브라우저의 스크롤바 넓이로 브라우저 넓이 크기가 안됨 screen은 view port이기 때문에 완전한 브라우저 넓이

### full/screen,vw,dvw,lvw,svw
full은 상위에 맞추고 뷰포트는 상위 요소와 무관

### 브레이크 포인트
sm(640) - 모바일~작은 태블릿, md(768) - 태블릿, lg(1024) - 작은 노트북, xl(1280) - 데스크탑, 2xl(1536px) - 와이드 모니터 

## 폰트 크기
### em
- 상위 요소 폰트 크기 기준 1em
### %
- 상위 요소 폰트 크기를 비율로 1em = 100%
### rem
- 상위 요소x, HTML 태그 폰트 크기 기준




<h2>talbe 태그에서 tr 태그에 border 속성을 넣는 법</h2>
<p>table 스타일 속성에 "border-collapse: collapse;" 추가해주고</p>
<p>tr 스타일 속성에 추가하고자 하는 스타일을 입혀준다.</p>
<h2>scorll bar 스타일 설정</h2>
<p>막대 전체 : ::-webkit-scrollbar</p>
<p>막대 : ::-webkit-scrollbar-thumb</p>
<p>막대 외 : ::-webkit-scrollbar-track</p>
<p>스크롤바 내부 간격을 주고 싶다면</p>
<p>막대 -  background-clip: padding-box;, border에 transparent 추가</p>
