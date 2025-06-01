# Unity中,实现人物下蹲的逻辑和动画

首先我们要知道,人物下蹲基本都分为下蹲开始的动作和下蹲的状态,这种多阶段组存的复杂动作,如果不规整起来会比较乱.


所以我们可以使用子状态机进行管理.

<Linkcard url="https://docs.unity3d.com/6000.1/Documentation/Manual/NestedStateMachines.html" title="Unity -手册：子状态机 --- Unity - Manual: Sub-State Machines" description="" logo="https://cdn.cookielaw.org/logos/0be70f5e-5e8c-4b5b-a70e-3c3899308c62/bd2f7f6c-aedd-4cb5-9a23-928ed573901d/8506c1ab-21ee-4752-8318-a825f65bde2f/unity-logo.png"/>

## 创建子状态机

我们需要在Animator窗口中右键创建子状态机(sub-state machine)

![](\assets\Snipaste_2025-06-02_01-54-07.png)

之后我们双击创建好的子状态机进入到编辑页面,然后可以将需要管理的动作拖拽到其中

![](\assets\Snipaste_2025-06-02_01-55-00.png)

## 自定义进入退出的条件,实现动画的切换

开始下蹲的条件

我这里使用的是新的input system 的Move检测到s键的时候Vector2的y值会变为负数,只要同时满足y为负数且在地面上就设置isCrouch为true,来控制

```c#
//下蹲
isCrouch = inpuDirection.y < -0.5f && physicsCheck.isGround;
```

![](\assets\Snipaste_2025-06-02_02-00-17.png)

进入下蹲状态的条件

![](\assets\Snipaste_2025-06-02_02-00-27.png)

下蹲结束的条件

![](\assets\Snipaste_2025-06-02_02-00-32.png)

## 关于下蹲后碰撞器范围的改变

因为需要符原配装器的offset和size,所以定义成员变量记录原始的数值

```c#
//记录CapsuleCollider2D的原始参数
originalOffset = capsuleCollider2D.offset;
originalSize = capsuleCollider2D.size;
```



```c#
if (isCrouch)
{
    //改变碰撞体积大小
    capsuleCollider2D.offset = new Vector2(-0.05f,0.80f);
    capsuleCollider2D.size = new Vector2(0.9f,1.6f);
}
else
{
    //恢复碰撞体积大小
    capsuleCollider2D.offset = originalOffset;
    capsuleCollider2D.size = originalSize;
}
```



## 解决下蹲可以移动的问题

```c#
// 人物移动
if (isCrouch)
{
    rb.velocity = new Vector2(0.0f, 0.0f);
} else
{
    rb.velocity = new Vector2(xDirection * speed * Time.fixedDeltaTime, rb.velocity.y);
}
```

