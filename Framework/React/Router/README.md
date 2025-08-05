## React - Router
```
npm install react-router-dom@6 // 6 -> 버전
```
```js
// 일반적인 라우팅 방식
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```
```js
// 중첩 레이아웃이 있는 경우
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="courses">
        <Route index element={<CourseListPage />} />
        <Route path=":courseSlug" element={<CoursePage />} />
      </Route>
      <Route path="questions">
        <Route index element={<QuestionListPage />} />
        <Route path=":questionId" element={<QuestionPage />} />
      </Route>
      <Route path="wishlist" element={<WishlistPage />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  </Routes>
</BrowserRouter>

// 최상위 컴포넌트에서 BrowerRouter로 감싼다면 중첩 라우팅 제거해야 됨
```

### Link
```js
import { Link } from "react-router-dom";

<Link to="/~" state={{test : "Hello World"}}></LinK> // 데이터도 보낼 수 있
```

### useParams() - 경로 파라미터
=) /indxe/elden-ring<br>
경로 - /game/:slug<br>
반환 : {slug : "elden-ring"} => 객체{}
```js
//라우팅
<Route path="/index/:slug" element={<GameInfoPage />} />
//
const {slug} = useParams();
```

### useSerachParams() - 쿼리 파라미터
=) /index?slug="elden-ring"<br>
반환 : [URLSearchParams, setSearchParams] => 배열 []
```js
//라우팅
<Route path="/index" element={<GameInfoPage />} /> //?slug 부분은 필요 x
//
const [searchParams] = useSearchParams(); //=> searchParams = URLSearchParams
const slug = searchParams.get("slug"); //=> URLSearchParams.get("slug") = "elden-ring"
```

### useNavigate, useLocation
useNavigate - router hook, 지정한 경로로 페이지 이동, 두 번째 인자로 데이터 전송 가능
```js
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// state 대신 replace - default false 뒤로가기 가능, true 뒤로가기 불가능
const goToAccount = () => {
    navigate("/account",{
    state: {
      userId: user.uid
    }
  });
};
```
useLoaction - useNavigate 데이터를 받을 수 있음
```js
import { useLocation } from 'react-router-dom';

const location = useLocation();

const [userId, setUserId] = useState(
  location.state?.userId
);
```
