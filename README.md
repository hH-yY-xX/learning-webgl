# WebGL学习
webgl学习笔记及代码

## ch02 WebGL入门

WebGL依赖shader着色器的绘图机制。

WebGL有两种着色器：

- 顶点着色器（Vertex shader）：顶点着色器是用来描述顶点特性（如位置、颜色等）的程序。
- 片元着色器（Fragment shader）：Fragment片元是WebGL术语，可以理解为像素（图像的单元）。片元着色器进行逐片元处理过程（如光照）的程序。

canvas -> webgl绘图上下文 -> 初始化着色器 -> 设置背景色 -> 清除canvas -> 绘图

着色器运行在WebGL系统中，而不是JavaScript程序中： vertex shader(gl_Position / gl_PointSize) -> fragment shader(gl_FragColor) -> color buffer

WebGL程序: 

- 运行在浏览器中的JavaScript程序
- 运行在WebGL系统的着色器程序

参数 | 类型 | 含义 | 描述 | 说明
--  | -- | -- | -- | --
gl_Position | vec4 | 顶点位置 | 四个浮点数组成的矢量 | **齐次坐标(x,y,z,w)=三维坐标(x/w,y/w,z/w)**
gl_PointSize | float | 点的尺寸（像素数）| 浮点数 |
gl_FragColor | vec4 | 片元颜色（RGBA格式） | 四个浮点数组成的矢量 | 

> 齐次坐标方便使用矩阵乘法来描述顶点变换

### WebGL方法 

方法名 | 描述 | 说明
-- | -- | --
gl.clearColor(red, green, blue, alpha) | 指定绘图区域的背景色 | 
gl.clear(buffer) | 将指定缓冲区设定为预定的值，**如果清空的是颜色缓冲区，那么将使用gl.clearColor()指定的值作为预定值** | buffer: gl.COLOR_BUFFER_BIT指定颜色缓冲区 / gl.DEPTH_BUFFER_BIT 指定深度缓冲区 / gl.STENCIL_BUFFER_BIT指定模板缓冲区 
gl.drawArrays(mode, first, count) | 执行顶点着色器，按照mode参数指定的方式绘制图形 | mode: gl.POINTS/gl.LINES/gl.LINE_STRIP/gl.LINE_LOOP/gl.TRIANGLES/gl.TRIANGLE_STRIP/gl.TRIANGLE_FAN
gl.getAttribLocation(program, name) | 获取由name参数指定的attribute变量的存储地址
gl.getUniformLocation(program, name) | 获取指定名称的uniform变量的存储位置
gl.vertexAttrib3f(location, v0, v1, v2) | 将数据(v0, v1, v2)传给由location参数指定的attribute变量
gl.vertexAttrib1f(location, v0) | 将数据v0传给由location参数指定的attribute变量
gl.vertexAttrib2f(location, v0, v1) | 将数据(v0, v1)传给由location参数指定的attribute变量
gl.vertexAttrib4f(location, v0, v1, v2, v3) | 将数据(v0, v1, v2, v3)传给由location参数指定的attribute变量
gl.vertexAttrib1fv(location, array[v0]) | 将数组[v0]传给由location参数指定的attribute变量
gl.vertexAttrib2fv(location, array[v0, v1]) | 将数组[v0, v1]传给由location参数指定的attribute变量
gl.vertexAttrib3fv(location, array[v0, v1, v2]) | 将数组[v0, v1, v2]传给由location参数指定的attribute变量
gl.vertexAttrib4fv(location, array[v0, v1, v2, v3]) | 将数组[v0, v1, v2, v3]传给由location参数指定的attribute变量
gl.uniform1f(location, v0) |将数据v0传给由location参数指定的uniform变量
gl.uniform2f(location, v0, v1) |将数据(v0, v1)传给由location参数指定的uniform变量
gl.uniform3f(location, v0, v1, v2) |将数据(v0, v1, v2)传给由location参数指定的uniform变量
gl.uniform4f(location, v0, v1, v2, v3) |将数据(v0, v1, v2, v3)传给由location参数指定的uniform变量