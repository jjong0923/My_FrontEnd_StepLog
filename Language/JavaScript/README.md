> [!NOTE]
> 교내 해커톤 강냉톤에서 멘토님의 모습을 보며 JS의 중요성을 애써 무시하면서 용어나 프레임워크 등을 쫒는 여태까지 나의 자세에 대해 생각을 하게 되었다.
> 목표는 멋사 해커톤, 앞으로의 개발자를 위해서 기초부터 DOM 객체를 다루면서 여러 애니메이션 기능을 만들 수 있는 자유자제까진 아니더라도 의도한 것을 만들 수 있는
> 능력을 기르는 것이다.


## alert/prompt/confirm
alert : 출력<br>
prompt : 입력 - console.log null 출력<br>
confirm : 확인 - true/false, 사용자 action 확인


## Object
- Object.keys() // 배열로 반환
- Object.values() // 배열로 반환
- Object.entries() // 배열로 반환(key+value)
- Object.fromEntries() // 배열 -> 객체

### 1~10 임의의 숫자
```js
Math.floor(Math.random()*10)+1
```
### 1~100 임의의 숫자
```js
Math.floor(Math.random()*100)+1
```

## slice/substring/substr/trim
- slice(n,m) : n~m-1 문자열 (음수 가능)
- substring(n,m) :  n~m-1 문자열 (음수 x)
- substr(n,m) : n부터 m개
- trim : 앞/뒤 공백 제거

## intersectionObserver
화면에 보이는 요소 감지
```js
new IntersectionObserver((entries, observer) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            ~~~~~~
        }
    })
});
==================================
useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 요소가 화면에 관찰되면 클래스 추가
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // 카드의 20%가 보이면 실행
    );
    // div 태그 DOM 엘리먼트들을 ref로 cardRefs 배열에 저장
    // 해당 문을 통해 cardRefs 순회하며 각 요소 개별 관찰
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect(); // 모두 멈춤
  }, []);
```
```html
<div className="card report" ref={(el) => (cardRefs.current[0] = el)}></div>
<div className="card marketing" ref={(el) => (cardRefs.current[1] = el)}></div>
<div className="card sns" ref={(el) => (cardRefs.current[2] = el)}></div>
```






