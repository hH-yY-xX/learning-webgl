function main() {
    // 获取<canvas>元素
    var canvas = document.getElementById('example');
    if(!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    // 获取上下文
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,255, 1.0)';
    ctx.fillRect(120, 10, 200, 300);

}