---
layout: doc
---
# Unity中世界坐标和本地坐标互相之间的转换

首先,我们都知道Unity中有世界坐标和本地坐标,而本地坐标随着物体的旋转而变化。

当我们明确知道需要在某一物体的某一位置进行操作时，可能会需要在世界坐标和本地坐标的转换

## 一 世界坐标转本地坐标

在`Transform`中有三个API可以将世界坐标转换为本地坐标，分别为，`InverseTransformPoint`,`InverseTransformDirection`,`InverseTransformVector`

```c#
public class TestScript : MonoBehaviour
{
	//世界坐标系 转本地坐标系  可以帮助我们大概判断一个相对位置

	//世界坐标系的点 转换 为相对本地坐标系的点
	//受到缩放影响
	print("转换后的点 " + this.transform.InverseTransformPoint(Vector3.forward));

	//世界坐标系的方向 转换 为相对本地坐标系的方向
	//不受缩放影响
	print("转换后的方向" + this.transform.InverseTransformDirection(Vector3.forward));

	//受缩放影响
	print("转换后的方向(受缩放影响)" + this.transform.InverseTransformVector(Vector3.forward));
}
```

### 1.`InverseTransformPoint`

::: tip 作用:

将世界坐标系的某一个点转换为 相对本地坐标系的点

:::

`this.transform.InverseTransformPoint(Vector3.forward)`中就是将`Vector3.forward`世界坐标中(0,0,1)这个点转换为当前脚本对象本地坐标系的对应坐标

> [!NOTE] 提示
> `InverseTransformPoint`受到缩放影响

### 2.`InverseTransformDirection`

::: tip 作用:

将世界坐标系的方向 转换为 相对本地坐标系的方向

:::

`this.transform.InverseTransformDirection(Vector3.forward)`就是将`Vector3.forward`世界坐标中的方向 转换为 当前脚本对象本地坐标系指向和传入方向相同的坐标

> [!NOTE] 提示
> `InverseTransformDirection`不受缩放影响

### 3. `InverseTransformVector`

和`InverseTransformDirection`一样

> [!NOTE] 提示
> `InverseTransformVector`受缩放影响

## 二 本地坐标转世界坐标

分别为	`TransformPoint`,`TransformDirection`,`TransformVector`

```c#
//本地坐标系的点 转换 为相对世界坐标系的点 受到缩放影响
print("本地转世界: " + transform.TransformPoint(Vector3.forward));

//本地坐标系的方向 转换 为相对世界坐标系的方向
//不受缩放影响
print("本地转世界 方向: " + transform.TransformDirection(Vector3.forward));


//受缩放影响
print("本地转世界 方向(受缩放影响): " + transform.TransformVector(Vector3.forward));
```

### 1.`TransformPoint`

::: tip 作用:

将本地坐标系的某一个点转换为 相对世界坐标系的点

:::

`transform.TransformPoint(Vector3.forward)`中就是将`Vector3.forward`本地坐标中代表前面的这个点转换为当前世界坐标系的对应坐标

> [!NOTE] 提示
> `TransformPoint`受到缩放影响

### 2.`TransformDirection`

::: tip 作用:

将本地坐标系的某一个点转换为 相对世界坐标系的点

:::

`transform.TransformDirection(Vector3.forward)`中就是将`Vector3.forward`本地坐标中代表前面的方向转换为当前世界坐标系指向这个方向的对应坐标

> [!NOTE] 提示
> `TransformDirection`不受到缩放影响

### 3. `TransformVector`

和`TransformDirection`一样

> [!NOTE] 提示
> `TransformVector`受缩放影响