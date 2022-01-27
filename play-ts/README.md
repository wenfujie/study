<!--
 * @Date: 2021-11-12 14:17:30
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 13:59:43
 * @FilePath: /play-ts/README.md
-->

- [学习 typescript](#学习-typescript)
  - [指令](#指令)
  - [语法](#语法)
    - [基础语法](#基础语法)
    - [类型推断、字面量类型](#类型推断字面量类型)
    - [函数类型：返回值类型和参数类型的定义](#函数类型返回值类型和参数类型的定义)
    - [接口类型 interface 和接口别名](#接口类型-interface-和接口别名)
    - [高级类型：联合、交叉、合并接口类型](#高级类型联合交叉合并接口类型)
    - [枚举类型](#枚举类型)
    - [泛型](#泛型)
  - [Vue 项目中使用 ts](#vue-项目中使用-ts)
    - [配置 Vue.prototype.xxx 属性](#配置-vueprototypexxx-属性)
    - [使用 ts 后 vue组件的写法](#使用-ts-后-vue组件的写法)

# 学习 typescript

跟着 [TypeScript 入门实战笔记](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=885#/content) 学 ts。

## 指令

```bash

# 安装
npm i -g typescript@3.9

# 初始化配置文件 tsconfig.json
tsc --init

# 将 ts 文件解析为 js
tsc core.ts

# 监听代码变动，实时转换
tsc core.ts --strict --alwaysStrict false --watch

```

## 语法

### 基础语法

```ts
/** 原始类型包含：number、string、boolean、null、undefined、symbol */
let num: number = 1;

/** 数组 */

let arrayOfNumber: number[] = [1, 2, 3];
let arrayOfString: string[] = ["x", "y", "z"];
// 泛型写法
let arrayOfNumber2: Array<number> = [1, 2, 3];
let arrayOfString2: Array<string> = ["x", "y", "z"];

/** any */
let anything: any = {};
anything = 1; // 不会提示错误
anything = "x"; // 不会提示错误
// 需要明白且记住：Any is Hell（Any 是地狱）。

/** 元组类型 */
// 表示一个已知元素数量和类型的数组，各元素的类型不必相同
let arr: [string, number] = ["hello", 0];

/** unknown */

let result: unknown;

// unknown 类型仅能赋值给 unknown 或 any 类型
let num1: number = result; // 提示 ts(2322)
let anything1: any = result; // 不会提示错误

// unknown 类型 无法直接调用方法
result.toFixed(); // 提示 ts(2571)
// 需缩小类型范围后才能调用方法
if (typeof result === "number") {
  result.toFixed(); // 此处 hover result 提示类型是 number，不会提示错误
}

/** 类型断言 */
// 在运行代码前，ts仅知道结果可能是 number 或 undefined，所以就报错了
const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find((num) => num > 2); // 提示 ts(2322)

// 我们可以这样写
const greaterThan3: number = arrayNumber.find((num) => num > 2) as number;
```

### 类型推断、字面量类型

啥是类型推断？ts 会自动判断变量或返回值的类型。

```js
let num: number = 1;
// 等价于
let num = 1;
```

初始化变量值、函数参数默认值、函数返回值等都会自动类型推断。

```js
/** 推断参数 num 的类型是数字或者 undefined，返回值的类型也是数字 */
function getNum(num = 1) {
  return num;
}
```

**字面量类型**
ts 支持 `字符串、数字、布尔值` 三种字面量类型，来看个例子：

```js
{
  let specifiedStr: "this is string" = "this is string";
  let specifiedNum: 1 = 1;
  let specifiedBoolean: true = true;
}
```

字面量类型时集合类型的子集。

字面量类型能赋值给集合类型，但是反之是不可行的：

```js
let hello: "hello" = "hello";
let hello2: string = hello; // ok
hello = "hi"; // ts(2322) Type '"hi"' is not assignable to type '"hello"'
```

通常会结合联合类型使用：

```js
type Direction = "up" | "down";
function move(dir: Direction) {
  // ...
}

move("up"); // ok
move("right"); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'
```

数字字面量和布尔值字面量也是类似用法：

```js
interface config {
  size: "small" | "big";
  margin: 0 | 10;
  isEnable: false | true;
}
```

**let、const 定义变量值相同但类型不一致问题**

```js
let str = "hello"; // str: string
const str2 = "hello"; // str2: 'hello'
```

这是由于 const 定义变量值不会改变，这样就缩小了变量的类型范围。

### 函数类型：返回值类型和参数类型的定义

指定函数的参数类型和返回值类型：

```js
const add = (a: number, b: number): number => {
  return a + b;
};
```

ts 的 => 用来定义一个函数，而 es6 的 => 是用来实现一个函数，两者结合使用：

```js
type Adder = (a: number, b: number) => number; // TypeScript 函数类型定义
const add: Adder = (a, b) => a + b; // ES6 箭头函数
```

`?:` 表示可选参数：

```js
function test(param?: string) {
  console.log(param);
}
test(); // undefined
```

函数参数支持多类型：

```js
function log3(x: number | string = "hello") {
  console.log(x);
}
```

剩余参数：

```js
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2); // => 3
sum(1, 2, 3); // => 6
sum(1, "2"); // ts(2345) Argument of type 'string' is not assignable to parameter of type 'number'
```

### 接口类型 interface 和接口别名

`interface` 通常用来定义对象类型和函数类型。

**使用 `interface` 约束变量、函数入参结构**

```js
interface ProgramLanguage {
  /** 语言名称 */
  name: string;
  /** 使用年限 */
  age: () => number;
}

// 约束变量结构
let TypeScript: ProgramLanguage;

// 约束函数入参结构
function NewStudy(language: ProgramLanguage) {
  console.log(
    `ProgramLanguage ${language.name} created ${language.age()} years ago.`
  );
}
```

**使用 `?:` 定义可缺省属性**

```js
/** 关键字 接口名称 */
interface OptionalProgramLanguage {
  /** 语言名称 */
  name: string;
  /** 使用年限 */
  age?: () => number;
}
let OptionalTypeScript: OptionalProgramLanguage = {
  name: "TypeScript",
}; // ok
```

**使用 `readonly` 定义只读属性**

```js
interface data {
  name: string;
}
let obj: data = {
  name: "张三",
};
/** ts(2540)错误，name 只读 */
data.name = "李四";
```

**定义函数类型接口**

```js
interface StudyLanguage {
  (language: ProgramLanguage): void;
}

/** 单独的函数实践 */
let StudyInterface: StudyLanguage = (language) =>
  console.log(`${language.name} ${language.age()}`);
```

**索引签名**

`索引签名` 就是为对象 key 约束类型（支持 number 和 string）。

```js
interface LanguageRankInterface {
  [rank: number]: string;
}
interface LanguageYearInterface {
  [name: string]: number;
}

{
  let LanguageRankMap: LanguageRankInterface = {
    1: "TypeScript", // ok
    2: "JavaScript", // ok
    WrongINdex: "2012", // ts(2322) 不存在的属性名
  };

  let LanguageMap: LanguageYearInterface = {
    TypeScript: 2012, // ok
    JavaScript: 1995, // ok
    1: 1970, // ok
  };
}
```

**type 类型别名**
`type` 可将内联类型剥离出来以便复用，它的定义方式有点类似 let ，格式为： `type 类型名 = 类型定义` 。

```js
/** 类型别名 */
{
  type LanguageType = {
    /** 以下是接口属性 */
    /** 语言名称 */
    name: string,
    /** 使用年限 */
    age: () => number,
  };
}
```

更多复杂类型：

```js
{
  /** 联合 */
  type MixedType = string | number;
  /** 交叉 */
  type IntersectionType = { id: number, name: string } & {
    age: number,
    name: string,
  };
  /** 提取接口属性类型 */
  type AgeType = ProgramLanguage["age"];
}
```

### 高级类型：联合、交叉、合并接口类型

`联合类型` ，`|` 表示或。

`交叉类型`， `&` 表示且。

```js
type test = string | number;
// 没啥意义，一般在合并接口时才用 &
type test = string & number;

// 具体值的联合类型
type girlName = "张胜男" | "王建国";
type boyName = "王建国" | "李世平";

type nameGroup = girlName | boyName;

let newName: nameGroup = "张胜男"; // ok , '王建国'、'李世平'也可以

type nameGroup2 = girlName & boyName;
let newName2: nameGroup2 = "王建国"; // ok , 其他值都报错
```

**联合、交叉组合**

`联合操作符 | 的优先级低于交叉操作符 &` 。

```js
type UnionIntersectionA =
  | ({ id: number } & { name: string })
  | ({ id: string } & { name: number }); // 交叉操作符优先级高于联合操作符

type UnionIntersectionB =
  | ("px" | "em" | "rem" | "%")
  | ("vh" | "em" | "rem" | "pt"); // 调整优先级
```

**合并接口类型**

```js
type IntersectionType = { id: number, name: string } & { age: number };
const mixed: IntersectionType = {
  id: 1,
  name: "name",
  age: 18,
};
```

### 枚举类型

通常使用枚举来定义 `常量集合` 。

```js
enum Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}
```

js 中是没有枚举类型的，ts 会将枚举转化为如下 js ，属性为常量、命名值从 0 开始递增数字映射的对象：

```js
var Day = void 0;
(function (Day) {
  Day[(Day["SUNDAY"] = 0)] = "SUNDAY";
  Day[(Day["MONDAY"] = 1)] = "MONDAY";
  Day[(Day["TUESDAY"] = 2)] = "TUESDAY";
  Day[(Day["WEDNESDAY"] = 3)] = "WEDNESDAY";
  Day[(Day["THURSDAY"] = 4)] = "THURSDAY";
  Day[(Day["FRIDAY"] = 5)] = "FRIDAY";
  Day[(Day["SATURDAY"] = 6)] = "SATURDAY";
})(Day || (Day = {}));
```

**7 种常见的枚举类型**

- 数字类型
- 字符串类型
- 异构类型
- 常量成员和计算（值）成员、枚举成员类型
- 联合枚举
- 常量枚举
- 外部枚举

**数字类型**

可以给指定成员赋值（不建议对数字类型枚举执行该操作）：

```js
enum Day {
    FRIDAY,
    SATURDAY = 5
  }
```

**字符串枚举**

```js
enum Day {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    ...
}
```

**异构枚举**

`异构枚举` 就是支持数字、字符串类型同时使用的枚举。感觉很鸡肋。

```js
enum Day {
    SUNDAY = 'SUNDAY',
    MONDAY = 2,
    ...
  }
```

**常量成员和计算成员**

```js
enum FileAccess {
    // 常量成员
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // 计算成员
    G = "123".length,
  }
```

我们只需记住缺省值（从 0 递增）、数字字面量、字符串字面量肯定是常量成员

**常量枚举**

```js
const enum Day {
    SUNDAY,
    MONDAY
  }
  const work = (d: Day) => {
    switch (d) {
      case Day.SUNDAY:
        return 'take a rest';
      case Day.MONDAY:
        return 'work hard';
    }
  }
}
```

**外部枚举**

使用 declare 描述一个在其他地方已经定义过的枚举类型，通过这种方式定义出来的枚举类型，被称之为外部枚举：

```js
declare enum Day {
  SUNDAY,
  MONDAY,
}
const work = (x: Day) => {
  if (x === Day.SUNDAY) {
    x; // 类型是 Day
  }
}
```

### 泛型

泛型，重要掌握。

> 泛型指的是类型参数化，即将原来某种具体的类型进行参数化。和定义函数参数一样，我们可以给泛型定义若干个类型参数，并在调用时给泛型传入明确的类型参数。

> 作用：在于有效约束类型成员之间的关系，比如函数参数和返回值、类或者接口成员和方法之间的关系。

来看个简单例子：

```js
function reflect(param: unknown) {
  return param;
}
const str = reflect("string"); // str 类型是 unknown
const num = reflect(1); // num 类型 unknown
```

由于参数类型是 `unknown` ，所以函数返回值也是 `unknown` 。如果需要约束函数入参类型和返回值为相同类型时，可以使用泛型：

```js
function reflect<P>(param: P): P {
  return param;
}

// 简写亦可，ts会自行推算出返回类型
function reflect<P>(param: P) {
  return param;
}
```

调用函数：

```js
const reflectStr = reflect < string > "string"; // str 类型是 string

// 简写亦可
const reflectStr = reflect("string"); // str 类型是 string
```

**泛型约束数组元素**

```js
function reflectArray<P>(param: P[]) {
  return param;
}
const reflectArr = reflectArray([1, "1"]); // reflectArr 是 (string | number)[]
```

**定义任意个泛型入参**

```js
function reflectExtraParams<P, Q>(p1: P, p2: Q): [P, Q] {
  return [p1, p2];
}
```

## Vue 项目中使用 ts

1. 使用vue-cli 动态生成 ts + vue项目
2. [vue-typescript-admin (管理后台模板)](https://armour.github.io/vue-typescript-admin-docs/zh/)

### 配置 Vue.prototype.xxx 属性

增加 `Vue.prototype.xxx` 属性后，若直接如下使用：

```js
// src/main.ts  添加属性
Vue.prototype.$EventBus = new Vue();

// src/components/HelloWorld.vue
this.$EventBus.$emit("change");
```

`$EventBus` 会标红，这是由于 ts 类型判断导致，使用 vue 实例属性时，ts 会判断 `node_modules/vue/types/vue` 下的 vue interface 是否具有该属性，若无则标红。

解决：在 `src/shims-vue.d.ts` 添加如下代码：

```js
declare module "vue/types/vue" {
  // 声明为 Vue 补充的东西
  interface Vue {
    $EventBus: any;
  }
}
```

利用了重复声明的 interface 会合并的性质。

### 使用 ts 后 vue组件的写法

[Vue结合ts组件写法](src/components/HelloWorld.vue)

未完待续..
