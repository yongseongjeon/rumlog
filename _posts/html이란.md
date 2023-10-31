---
title: HTML이란
date: "2023-10-30 15:34:00"
tags: ["HTML"]
author: rumka
---

# HTML 정의

**HTML**이란 **H**yper**T**ext **M**arkup **L**agnuage의 약자이며, 마크업 구성에 대중적으로 사용되는 언어다.
과거 HTML의 표준은 **W3C,** **WHATWG**가 각자의 방법으로 표준을 관리하고 있었다.
그러나 2019년 두 조직의 합의로 **Living Standard**가 표준이 되었다.
https://html.spec.whatwg.org/

> **마크업**이란?

일반 텍스트에 추가적인 정보를 포함시키는 것을 의미한다.
**HTML**로 예를 들면 `<h1>`로 텍스트를 감싸면 제목을 의미하고, `<p>`로 감싸면 문단을 의미한다.

> **Living Standard**란?

**W3C**(**W**orld **W**ide **W**eb **C**onsortium), **WHATWG**(**W**eb **H**ypertext **A**pplication **T**echnology **W**orking **G**roup)에서 다양한 이해관계자(개발자, 사용자 등)에게 피드백을 받아 지속적으로 업데이트하는 것을 의미한다.

현재 글 작성 당시(2023.09.05) **HTML** **표준**을 보면 4 September 2023 이라 적혀있다.
즉, 작성일 기준으로 어제 업데이트 된 것으로 보아 **빠르게 업데이트** 되고 있다는 것을 알 수 있다.

또한 **HTML** **표준**은 오픈소스라서 누구든지 Pull Request 함으로써 기여할 수 있다.

# HTML 필수 태그

### `<!DOCTYPE html>`

이 문서가 HTML5로 작성된 문서라고 알려주는 태그다.
모던 브라우저들은 이 태그가 없어도 HTML5라고 인식하지만, IE9 이전 버전 브라우저에서는 인식하지 못한다고 한다. 따라서 일관된 렌더링을 위해 반드시 표기하자.

### `<html>`

lang 속성을 통해 스크린 리더에게 어떤 언어로 읽어줘야 하는지 알려줄 수 있다.
따라서 해당 서비스 국가에 맞는 언어를 넣어야 한다.

# 정말 lang 속성에 따라 스크린 리더가 다르게 읽을까?

실제로 lang 속성 값에 따라 스크린 리더가 다르게 읽는지 확인하기 위해서 lang 속성을 바꿔가며 스크린 리더로 웹사이트를 읽어봤다.

HTML 파일은 다음과 같이 한글, 영어, 스페인어 세 가지 언어의 문장을 포함하고 있다.

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="UTF-8" />
    <title>Language Test</title>
  </head>
  <body>
    <p>이 문장은 한국어입니다.</p>
    <p>This is an English paragraph.</p>
    <p>Este es un párrafo en español.</p>
  </body>
</html>
```

> **실험 환경**

**OS**: Windows 10

**스크린 리더**: Narrator

### 1. `<html lang="ko">`

한국어로 읽는다. 한글은 자연스러우나 영어와 스페인어는 매우 어색한 발음이라 현지인이 듣는다면 이해하기 쉽지 않을 듯 하다.

### 2. `<html lang="en">`

영어로 읽는다. 한글은 아예 읽지 못하고 스페인어는 영어 발음으로 읽는다.

### 3. `<html lang="es">`

스페인어로 읽는다. 영어와 마찬가지로 한글은 읽지 못하고, 영어는 스페인 발음으로 읽는다.

### 4. `<html>`

스크린 리더에 기본 설정된 언어로 읽는다. 필자 스크린 리더는 한국어로 설정되어 있어 한국어로 읽는다.

# Reference

[https://www.yes24.com/Product/Goods/105266398](https://www.yes24.com/Product/Goods/105266398)
