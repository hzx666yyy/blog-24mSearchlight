---
lastUpdated: true
---

# :tada: Tags

<br>
<div class="container">
<div class="item">
<button v-on:click="FunTest('docker')" style="font-size: 19px" class="hover-btn">docker</button>  
</div>
<div  class="item">
<button v-on:click="FunTest('Linux')" style="font-size: 19px" class="hover-btn">Linux</button>  
</div>
<div class="item">
<button v-on:click="FunTest('计算机基础')" style="font-size: 19px" class="hover-btn">计算机基础</button>  
</div>
<div class="item">
<button v-on:click="FunTest('工具')" style="font-size: 19px" class="hover-btn">工具</button>  
</div>

<div class="item">
<button v-on:click="FunTest('CSharp')" style="font-size: 19px" class="hover-btn">C#</button>  
</div>

</div>


<br>
<br>

<hr class="custom-hr">


<template v-if="isVisible && fileName=='docker'">
<!--@include: ./Linux/docker/index.md-->
</template>

<template v-if="isVisible && fileName=='Linux'">
<!--@include: ./Linux/index.md-->
</template>

<template v-if="isVisible && fileName=='计算机基础'">
<!--@include: ./计算机基础/index.md-->
</template>

<template v-if="isVisible && fileName=='工具'">
<!--@include: ./工具使用/index.md-->
</template>

<template v-if="isVisible && fileName=='CSharp'">
<!--@include: ./CSharp/index.md-->
</template>

<script>
export default {
  name:'tags' ,
  data () {
    return {
        fileName: "name",
      isVisible : false
    }
  },
  methods:{
      FunTest(name){
        console.log("FunTest");
        console.log(this.fileName);

        this.isVisible = !this.isVisible;
        if(this.fileName != name){
            this.isVisible = true;
        }
        this.fileName = name ;
        console.log(this.fileName);
    
      }
  }
}
</script>

<style scoped>
.container {
  display: flex; /* 启用 Flex 布局 */
  flex-wrap: wrap; /* 宽度不足时换行 */
  gap: 10px; /* 可选：设置子元素之间的间距 */
}
.item {
  flex-shrink: 0; /* 防止子元素压缩 */
  /* 或者：设置最小宽度 */
  min-width: 100px; /* 确保按钮不会挤在一起 */
}
.item button {
  width: 100%; /* 让按钮充满父 div */
  padding: 8px 16px;
}
.hover-btn {
  color: #A1A197;
}
.hover-btn:hover {
  color: #FFFFFF; /* 悬停颜色 */
}
.hover-btn:active{
color: #FFFFFF; 
}
.custom-hr {
  border: none;          /* 移除默认边框 */
  height: 2px;           /* 设置线条粗细 */
  background-color: #42b983; /* 线条颜色 */
  margin: 20px 0;        /* 上下边距 */
}
a {
  color: #A1A197;
  transition: color 0.3s;
text-decoration: none;
}
a:hover {
  color: #42B983;
  text-decoration: underline;
}
</style>