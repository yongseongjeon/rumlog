---
title: debounce로 API 호출 최적화하기
date: "2023-05-21 00:00:00"
tags: ["식도락", "Debounce", "최적화"]
author: rumka
---

# 현재 상황

- **유저 검색** 기능을 백엔드 API와 연동하여 구현하였습니다.
- 인풋창에 키워드를 **하나씩 추가** 할 때마다 **API**를 호출합니다.

# 문제

유저가 검색하길 **원하는 키워드**가 아님에도 **API를 호출하고 있습니다.**

예를 들어 `홍길동` 유저를 검색한다고 가정하면 자음, 모음을 더한 숫자인 총 **9번** API를 호출합니다.

![](https://velog.velcdn.com/images/rumka/post/c1cbc08d-2e64-416c-ab0c-8a8ea1ef02db/image.gif)

`ㅎ` `호` `홍` `홍ㄱ` `홍기` `홍길` `홍길ㄷ` `홍길도` `홍길동`
위의 순서로 유저 검색 API를 호출하고 있습니다.

따라서 Debounce를 활용하여 API 호출을 최소화하려고 합니다.

# 디바운스란?

Debounce는 특정 이벤트가 발생했을 때 일정 시간 동안 동일한 이벤트를 무시하고 마지막 이벤트만 처리하는 것을 의미합니다. 이를 구현하기 위해 타이머를 사용하며, 타이머가 만료되면 마지막 이벤트 핸들러를 실행하는 방식으로 동작합니다.

# 디바운스 구현

디바운스 함수는 두 개의 파라미터를 받고 클로저 함수를 반환합니다.

두 개의 파라미터

- **`func`** : 타이머가 만료된 후 실행될 함수입니다.
- **`delay`** : 지연 시간을 나타냅니다.

반환된 클로저 함수는 디바운스로 감싸진 함수가 호출될 때 실행됩니다.

클로저 함수 내부에서는 **`setTimeout`**을 사용하여 **`delay`** 시간이 경과한 후에 **`func`** 함수를 실행합니다. 만약 디바운스로 감싸진 함수가 **`delay`** 시간 내에 다시 호출되면, 이전의 타이머를 **`clearTimeout`**을 사용하여 취소하고 **`timer`** 변수에 새로운 타이머를 설정합니다.

다음은 실제 구현한 디바운스 함수입니다.

![](https://velog.velcdn.com/images/rumka/post/91223e17-ede7-47a1-b1e4-c6bb54626152/image.png)

# 식도락 프로젝트에 적용

`useSearchBar` 훅에서 생성한 debounce 함수를 활용하였습니다.

`useSearchBar` 는 입력창과 검색 결과창 및 입력한 키워드로 검색 API를 호출하는 기능을 모듈화한 훅입니다. 중복 코드를 막기 위해 해당 훅으로 로직을 합친 뒤 각 컴포넌트에서 훅을 불러와서 활용하는 방식을 사용하고 있습니다.

`useSearchBar` 훅을 사용하는 곳은 유저 검색, 식당 검색 부분입니다.

1. 유저 검색

![](https://velog.velcdn.com/images/rumka/post/ea969807-ed7b-410d-93da-6c18ea7af5ad/image.png)

2. 식당 검색

![](https://velog.velcdn.com/images/rumka/post/70d78336-d6c6-48fc-8930-189bc7d1f10e/image.png)

아래와 같이 `debunce`로 감싼 `debouncedSearch`를 생성하였습니다.

**`useCallback`**으로 감싼 이유는 **`useSearchBar`** 훅을 사용하는 컴포넌트에서 **`inputValue`**가 변경될 때마다 컴포넌트가 리렌더링되고, 훅이 재호출되서 **debouncing**되지 않는 현상을 방지하기 위함입니다.

![](https://velog.velcdn.com/images/rumka/post/9947d4fa-25ae-40af-90a5-28a42d6d2438/image.png)

아래는 `debouncedSearch`를 호출하는 컴포넌트의 코드입니다.

입력하는 키워드가 변경될 때마다 `debouncedSearch`를 호출하도록 구현하였습니다.

![](https://velog.velcdn.com/images/rumka/post/cbacde57-9b50-4998-ae1f-ad5f03e6484e/image.png)

# 동작 확인

동일한 키워드인 ‘홍길동’ 으로 실험한 결과 키워드를 모두 입력한 후에 ‘홍길동’으로 유저 검색 API 호출이 한 번만 이루어지는 것을 확인하였습니다.

![](https://velog.velcdn.com/images/rumka/post/4311af9e-69df-4350-a4cb-ea7cb224b003/image.gif)

debounce를 적용하기 전과 비교하여 API 호출이 얼마나 감소했는지 정량적인 표현으로 나타내고 싶어 간단한 테스트를 하였습니다.

태스트하기 전에 제약을 위해 몇 가지 가정을 세웠습니다.

1. 타자 입력 속도는 300타로 가정한다.
2. 검색될 유저 이름은 한글이며 2~3글자로 가정한다.
3. 검색하는 사람은 검색할 키워드를 정확히 인지하고 입력한다고 가정한다.
   (타자를 치다 중간에 멈추지 않는다.)

위의 조건으로 다음 단어들을 키워드로 실험해보았습니다.

`홍길동`, `럼카`, `쿠킴`, `제이`, `포키`, `호이`

# debounce 적용 전

각 단어들의 자음, 모음의 합은 9, 5, 5, 4, 4, 4며 총 31입니다.

총 31번의 API 호출이 발생했습니다.

# debounce 적용 후

각 단어들은 키워드를 모두 작성한 후에 1번의 API 호출이 발생했으며,

총 6번의 API 호출이 발생했습니다.

# 결론

조건(타자 속도, 입력 도중에 멈추는지 여부, 단어 길이 등)에 따라 얼마든지 달라질 수 있으나 위의 가정으로 실험을 진행한 결과는 다음과 같습니다.

debounce를 적용하기 전에는 API 호출이 31번이었으며, 적용 후에는 6번으로 감소하였습니다.

이는 약 80%의 감소율을 나타냅니다.

# Reference

- [https://stackoverflow.com/questions/42361485/how-long-should-you-debounce-text-input](https://stackoverflow.com/questions/42361485/how-long-should-you-debounce-text-input)
- [https://www.ratatype.com/learn/average-typing-speed/](https://www.ratatype.com/learn/average-typing-speed/)
- [https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/](https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/)
