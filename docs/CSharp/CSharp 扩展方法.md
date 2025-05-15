# C# 扩展方法



C# 的扩展方法可以在不改变源码的基础上对类或者接口进行扩展



扩展的方法一定要在静态方法中定义,且必须是静态方法

扩展方法的参数需要使用this修饰, 一个方法中this只能有一个,且只能修饰第一个参数

## 1. 扩展实现

代码示例:

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProject.ExtendedMethod
{
    static class ExtendedMethodTest
    {
        //扩展方法必须要static修饰
        //方法形参需要添加this 修饰符
        //添加this后,可在不改变源代码的情况下为修饰符修饰的参数类型添加此扩展方法
        //可以在参数类型的实例对象中调用
        public static void TestFun(this string str)
        {
            Console.WriteLine("str的扩展方法");
        }
    }
}
```

如果没有this进行修饰我们只能调用`ExtendedMethodTest`类的`TestFun`方法
加上this关键字后,就可以向在string的实例对象中它的实例方法来调用`TestFun`方法了



除此之外,我们可以添加泛型扩大范围

```c#
       //扩展泛型方法,可以对所有类型进行拓展
        public static void TestInterFun<T>(this T t)
        {
            Console.WriteLine(typeof(T) + "的扩展方法");
        }
```



## 2.扩展接口

```c#
        public static bool LessThan<T>(this T left, T right) where T : IComparable<T>
        {
            return left.CompareTo(right) < 0;
        }
```

我们还可以扩展接口,使所有实现IComparable接口的实现类都可以实现`LessThan`方法



## 注意:

- 扩展成员的优先级始终低于类型本身中定义的实例（或静态）成员,如果扩展方法与类型中定义的方法具有相同的签名，则不会调用扩展方法。
- 扩展方法在命名空间级别进入范围。 例如，如果多个静态类包含名为 `Extensions`单个命名空间中的扩展方法，则所有这些静态类都由 `using Extensions;` 指令引入范围。