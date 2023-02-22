// 所有Node.JS API都可以使用
// 拥有与Chrome插件一样的沙箱（sandbox）环境
window.addEventListener('DOMContentLoaded', () => {
    // 替换元素内容
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
 
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })