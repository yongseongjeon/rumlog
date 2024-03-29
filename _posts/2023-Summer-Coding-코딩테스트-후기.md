---
title: 2023 Summer Coding 코딩테스트 후기
date: "2023-04-30 00:00:00"
tags: ["코딩테스트 후기"]
author: rumka
---

부족한 점과 개선할 점을 정확하게 인지하기 위해 코테 후기를 작성해 보려고 한다.

# 시험 관련 정보

이번 2023 Summer Coding은 다음과 같은 형식으로 진행되었다.

- 알고리즘 3문제 / SQL 1문제
- 시험 시간 2시간(13:00~15:00)
- 화상 감독
- 인터넷 사용 불가 / 교재 참고 불가

화상 감독이 있었으므로 화장실 이용과 같은 자리 이동이 불가능했다.
또한 인터넷을 사용할 수 없었는데, 이 규칙 때문에 JavaScript 메서드나 SQL 함수 구글링을 할 수 없었다.
그래서 하루 전에 급하게 자주 사용되는 SQL 함수들을 암기했다.

문제별로 문제 유출이 되지 않을 정도로만 간단히 적어보겠다.
참고로 나는 1 ⇒ 4 ⇒ 2의 순서로 문제를 풀었으며 1, 4번 정답으로 2솔이다.

# 문제

## 1. 구현

간단한 구현 문제였음에도 불구하고 생각보다 오래 걸렸다.
그 이유는 문제를 대충 읽고 곧바로 구현에 들어가서 잘못 풀었기 때문이다.
싹 다 갈아엎고 다시 풀었다.
난이도는 대략 백준 실버 5정도 되는 것 같다.

## 2. 완전 탐색

유형은 완전 탐색이었다. 1, 4번에서 시간을 많이 쓰기도 했고 1, 4번을 풀고 2번으로 오니 갑자기 배가 너무 아파서 컨디션이 최악이 됐다. ~~(화장실로 탈주하고 싶었지만 간신히 참았다.)~~
DFS로 시도하다 끝났는데 1, 4번에서 실수하지 않았더라면 풀었을 것 같아서 아쉬웠다.
난이도는 백준 골드 하위 정도가 아니었을까 예측해 본다.

## 3. 이분 탐색

제일 어려웠던 문제였다.
유형은 이분 탐색이었으며 어떻게 풀어야 할지 감이 오지 않아서 다른 문제부터 풀었다.
끝나고 어떻게 풀었는지 다른 사람들 얘기를 들어보니 이분 탐색으로 푼 사람도 있고 DP로 푼 사람도 있었다. 확실히 문제를 보고 어떤 유형인지 파악하는 연습이 필요하다고 느낀다.

## 4. SQL

JOIN, GROUP BY, HAVING 을 활용하면 깔끔하게 풀 수 있는 문제였다.
다만, 또 문제 정의를 제대로 하지 않아 생각지도 못한 곳에 실수하고 시간을 엄청나게 잡아먹었다. 다 푼 후 정답이 틀렸다길래 엄한 곳을 다 뒤져가며 디버깅했는데 결국 `<`가 아닌 `≤`를 사용해서 틀린 것이었다. (10분이면 다 풀 문제를 40분 붙잡고 있어서 정답 맞히고 난 후에 멘탈에 살짝 금이 갔다…)

그래도 Summer Coding 코테를 위해 대략 3주 전부터 꾸준하게 SQL 문제를 풀었는데 준비하길 잘했다는 생각이 든다.
(준비 당시엔 프로그래머스 기준 Lv. 1 문제들을 풀었고 현재는 Lv. 4 푸는중이다.)
난이도는 프로그래머스 기준 어려운 Lv. 3 ~ 쉬운 Lv. 4 사이정도 인 것 같다.

# 느낀점

## 1. 문제에 대한 정확한 이해 필요

문제를 대충 이해했다 싶으면 곧바로 구현으로 넘어가는 안좋은 습관이 있다. 이 습관 때문에 이번 코테에서도 그 영향이 드러났다. 앞으로 문제를 풀 때 엣지 케이스를 고려하는것 까지는 아니더라도 문제에 대한 정확한 이해 후에 구현하는 것을 목표로 해봐야겠다.

## 2. 스트레스성 복통 관리

정말 신기한건 온라인 시험볼때마다 배가 아프다는 것이다. **`2023 Dev-Matching: 웹 프론트엔드 개발자(상반기)-1`** 시험 볼때도 배가 아팠었다.(다행히 통과하긴 했다.)
전날 소화가 잘되는 음식을 먹고 평소와 같은 컨디션을 유지하려고 노력해야겠다.

## 3. 알고리즘 문제 유형 연습 필요

현재 백준에서 알고리즘 문제를 풀고있긴 하나 내가 좋아하는 유형의 문제만 풀고있다.
따라서 그 여파로 오늘 3번을 풀지 못한 것이라고 생각한다.
코테를 볼때는 문제의 유형을 알려주지 않으므로 앞으로 코테 대비 문제를 풀 때 문제 정의뿐만 아니라 유형 분석하는 시간도 신경써야겠다.
