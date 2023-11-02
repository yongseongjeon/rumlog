---
title: BOJ 1026번 보물 Node.js 풀이
date: "2023-06-03 00:00:00"
tags: ["알고리즘", "정렬"]
author: rumka
---

### 문제

https://www.acmicpc.net/problem/1026

### 유형

정렬

### 시간복잡도

내장 함수 sort의 시간복잡도는 $O(nlogn)$이다.

N은 (1 ≤ N ≤ 50)이고, 시간 제한은 2초이므로 충분하다.

### 풀이

1. A는 내림차순 B는 오름차순으로 정렬한다.
   (A를 오름차순, B를 내림차순으로 해도 똑같다.)
2. A를 순회하면서 순서대로 B의 원소와 곱한 누적값을 구한다.
   (B를 순회해도 똑같다.)

### 제출 코드

```jsx
function getInput() {
  const isLinux = process.platform === "linux";
  if (isLinux) {
    return require("fs").readFileSync("/dev/stdin").toString().trim();
  }
  return customInput.trim();
}

const customInput = `9
5 15 100 31 39 0 0 3 26
11 12 13 2 3 4 5 9 1
`;
const stdin = getInput();
const [N, A, B] = stdin.split("\n");

const answer = solve();
console.log(answer);

function solve() {
  const sortedA = toArray(A).sort((a, b) => b - a);
  const sortedB = toArray(B).sort((a, b) => a - b);

  return sortedA.reduce((acc, cur, idx) => {
    return acc + cur * sortedB[idx];
  }, 0);
}

function toArray(string) {
  return string.split(" ").map(Number);
}
```

### 소요 시간

- 문제 이해 및 유형 분석: 5분
- 구현: 20분
