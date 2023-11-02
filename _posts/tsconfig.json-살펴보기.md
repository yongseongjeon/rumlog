---
title: tsconfig.json 살펴보기
date: "2023-04-25 00:00:00"
tags: ["TypeScript"]
author: rumka
---

이 글을 포스팅하게 된 이유는 `TypeScript` 관련 설정을 자주 할 일이 없었고, 볼 때마다 이 설정이 무슨 역할을 하는지 잊어버렸다. 따라서 나중에 내가 편하게 찾아보기 위해서 정리한다.

`vite`로 react-ts 템플릿이 적용된 프로젝트를 생성하게 되면

```elixir
yarn create vite 프로젝트-명 --template react-ts
```

다음과 같은 `tsconfig.json` 가 생성된다.

```js
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

각각 무슨 역할을 하는지 알아보자.

(아래에서 언급되는 “컴파일러”는 TypeScript 컴파일러를 의미한다.)

# compilerOptions

## target

- 컴파일러가 생성할 `JavaScript`의 `ECMAScript` 버전이다.
- 컴파일러가 실행된 후 target에 지정된 버전으로 `JavaScript` 파일을 생성한다.
- 기본값은 `ES3` 이다.

```tsx
{
  "compilerOptions": {
    "target": "ES3" | "ES5" | "ES6" | "ES2016" | "ES2017" | "ES2018" | "ES2019" | "ES2020" | "ESNext"
  }
}
```

## lib

- 컴파일러에서 사용할 라이브러리 파일을 지정하는 옵션이다.
- 컴파일러가 코드 분석 및 생성할 때 lib 속성에 추가된 라이브러리 파일들의 정보를 참조한다.
  - 예를 들어 `DOM` 키워드를 추가하면 `DOM API` 관련 타입 정보가 추가되어 컴파일러가 타입 검사하는데 사용할 수 있다.

```tsx
{
  "compilerOptions": {
    "lib ": ["DOM", "DOM.Iterable", "ESNext", ...]
  }
}
```

## module

- 컴파일러가 모듈 시스템을 어떻게 처리할지 설정하는 옵션이다.

```tsx
{
  "compilerOptions": {
    "module ": "CommonJS" | "AMD" | "System" | "ES2015" | "ESNext"
  }
}
```

## skipLibCheck

- 컴파일러가 라이브러리 파일(lib.d.ts 등)의 타입 검사를 스킵할 지 여부를 설정하는 옵션이다.
- `skipLibCheck`의 옵션은 컴파일 시간과 라이브러리 호환성의 트레이드 오프가 존재한다.
  - 라이브러리를 많이 사용할수록 컴파일 시간이 증가한다.

```tsx
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

## moduleResolution

- 컴파일러의 모듈 해석 방식이다.
- `bundler` 로 설정한 경우 컴파일러에서 모듈 해석을 수행하지 않고 번들러가 처리한다.

```tsx
{
  "compilerOptions": {
    "allowImportingTsExtensions": "Classic" | "Node" | "bundler"
  }
}
```

## allowImportingTsExtensions

- 컴파일러는 기본적으로 `.ts`, `.tsx`, `.d.ts` 확장자를 가진 파일만 컴파일한다.
- 이 옵션을 활성화하면 위의 확장자가 아닌 경우에도 컴파일이 가능해진다.
- 활성화하면 TypeScript 파일인지 식별하기 어려워져서 유지보수 측면에서 좋지 않을 수 있다.

```tsx
{
  "compilerOptions": {
    "allowImportingTsExtensions": true
  }
}
```

## resolveJsonModule

- 컴파일러가 `JSON` 파일을 모듈로 사용할 수 있게 하는 옵션이다.

```tsx
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

## isolatedModules

- 파일간의 모듈 의존성을 검사하는 옵션이다.
- `import` | `export` 키워드가 없으면 해당 파일은 전역 스코프를 갖는다.
- 옵션을 활성화할 경우 아래와 같은 예시에서 컴파일러가 오류를 발생시킨다.

```tsx
// file1.ts
export const message = "Hello, world!";

// file2.ts
console.log(message);
```

```tsx
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
```

## noEmit

- `JavaScript` 파일을 생성하지 않고 오직 타입 검사로만 사용하는 옵션이다.

```tsx
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

## jsx

- 컴파일러가 `jsx` 파일을 어떻게 컴파일할지 정하는 옵션이다.
  1. `react` : `React.createElement` 함수를 사용하여 컴파일한다.
  2. `preserve` : `jsx` 코드를 그대로 유지한다.
  3. `react-native` : `React Native` 에서 사용하는 JSX 컴파일러를 사용한다.

```tsx
{
  "compilerOptions": {
    "jsx": "react" | "preserve" | "react-native"
  }
}
```

## strict

- 다음과 같은 엄격한 타입 체크 규칙이 적용된다.
  1. **strictNullChecks**
     1. `null`, `undefined` 를 허용하지 않는다.
  2. **noImplicitAny**
     1. 암묵적으로 `any` 타입을 허용하지 않는다.
  3. **strictFunctionTypes**

     1. 함수 매개변수, 반환 값의 타입 검사를 엄격하게 한다.
     2. 다음과 같은 경우에 오류를 발생시킨다.

     ```tsx
     type Func = (arg: string) => number;

     const func: Func = (arg: any) => {
       return arg;
     };
     ```

  4. **strictBindCallApply**

     1. `call`, `apply`, `bind`의 타입 검사를 엄격하게 한다.
     2. 다음과 같은 경우에 오류를 발생시킨다.

     ```tsx
     function add(a: number, b: number): number {
       return a + b;
     }

     const partialAdd = add.bind(null, "1");
     ```

  5. **strictPropertyInitialization**

     1. 클래스 멤버 변수의 초기화를 강제한다.
     2. 다음과 같은 경우에 오류를 발생시킨다.

     ```tsx
     // before
     class Example {
       value: number;
     }

     const ex = new Example();
     console.log(ex.value); // undefined

     // Class 'Example' incorrectly implements interface 'Example'.
     //   Property 'value' has no initializer and is not definitely assigned in the constructor.

     // after
     class Example {
       value: number = 0;
     }

     const ex = new Example();
     console.log(ex.value); // 0
     ```

  6. **alwaysStrict**
     1. 컴파일 된 JavaScript 파일에 항상 `use strict`가 적용된다.

```tsx
{
  "compilerOptions": {
    "strict": true
  }
}
```

## noUnusedLocals

- 사용하지 않는 지역 변수가 존재하면 오류를 발생시키는 옵션이다.

```tsx
{
  "compilerOptions": {
    "noUnusedLocals": true
  }
}
```

## noUnusedParameters

- 사용하지 않는 매개 변수가 존재하면 오류를 발생시키는 옵션이다.

```tsx
{
  "compilerOptions": {
    "noUnusedParameters": true
  }
}
```

## noFallthroughCasesInSwitch

- `fallthrough` 현상을 검사하는 옵션이다.

> fallthrough란, `switch`문의 `case`에서 다음 `case`로 넘어갈 때 `break` 부재로 인해 발생하는 현상을 말한다.

```tsx
{
  "compilerOptions": {
    "noFallthroughCasesInSwitch": true
  }
}
```

# include

- 컴파일러가 컴파일 할 파일들의 위치를 지정하는 옵션이다.
- 다음과 같이 패턴을 추가하여 컴파일 대상 파일을 지정할 수 있다.
  - `src/**/*.ts` | `src/**/*.js`

```tsx
{
  "include": ["src/**/*.ts"]
}
```
