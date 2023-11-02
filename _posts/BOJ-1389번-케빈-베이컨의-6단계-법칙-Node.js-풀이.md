---
title: BOJ 1389번 케빈 베이컨의 6단계 법칙 Node.js 풀이
date: "2023-06-01 00:00:00"
tags: ["알고리즘", "BFS"]
author: rumka
---

### 문제

https://www.acmicpc.net/problem/1389

### 유형

**BFS**를 활용하여 목표 노드에서부터 각 노드까지의 거리 합을 구할 수 있다.

### 시간복잡도

모든 노드를 순회하면서 **BFS**를 돌 것이다.

코드를 간단하게 아래와 같이 추상화했다.

```jsx
while (모든 노드 순회) {
	bfs(목표 노드);
}
```

**N**(2 ≤ N ≤ 100)은 **노드 수**, **M**(1 ≤ M ≤ 5,000)은 **간선 수**를 의미한다.

시간 복잡도를 계산해보면 모든 노드 순회는 $O(N)$, **BFS**는 $O(N+M)$이다.

따라서 최악으로 계산하면 N(N+M)이며, 100(100+5000) = 510,000이다.

시간 제한은 2초이므로 충분히 통과 가능한 시간이라 판단했다.

### 풀이

1. 모든 노드를 **BFS**로 순회한다.
2. **BFS**에서는 거리를 누적해서 더하기 위해 `curLen`변수를 사용한다.
3. 모든 노드의 거리를 구하고 그 중에서 가장 거리가 짧은 인덱스를 구한다.
4. 해당 인덱스에 1을 더하여 정답을 구한다.

### 제출 코드

```jsx
const customInput = `5 5
1 3
1 4
4 5
4 3
3 2
`;
const stdin = getInput();
const [firstLine, ...rest] = stdin.split("\n").map((x) => x.split(" ").map(Number));
const [N, M] = firstLine;
const connectInfo = rest.slice();
const nodes = {};
for (let i = 1; i <= N; i += 1) {
  nodes[i] = [];
}
connectInfo.forEach((x) => {
  const [i, j] = x;
  nodes[i].push(j);
  nodes[j].push(i);
});
const results = [];
for (let i = 1; i <= N; i += 1) {
  results.push(bfs(i));
}

const minIdx = findMinIndex(results);
console.log(minIdx + 1);

function findMinIndex(arr) {
  const arrLen = arr.length;
  let min = Infinity;
  let minIdx = null;
  for (let i = arrLen - 1; i >= 0; i -= 1) {
    if (arr[i] <= min) {
      min = arr[i];
      minIdx = i;
    }
  }
  return minIdx;
}

function bfs(node) {
  const v = Array.from({ length: N }).fill(false);
  const q = [[node, 0]];
  v[node] = true;
  let totalLen = 0;
  while (q.length > 0) {
    const [curNode, curLen] = q.shift();
    totalLen += curLen;
    nodes[curNode].forEach((node) => {
      if (!v[node]) {
        q.push([node, curLen + 1]);
        v[node] = true;
      }
    });
  }
  return totalLen;
}

function getInput() {
  const isLinux = process.platform === "linux";
  if (isLinux) {
    return require("fs").readFileSync("/dev/stdin").toString().trim();
  }
  return customInput.trim();
}
```

### 소요 시간

- 문제 이해 및 유형 분석: 12분
- 구현: 32분
