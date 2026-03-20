function analyzeDesign() {

document.getElementById("colorResult").innerHTML =
"色彩搭配良好，對比度清楚，主色與輔助色比例適中";

document.getElementById("layoutResult").innerHTML =
"版面配置穩定，視覺焦點集中，但留白可以再增加";

let score = Math.floor(Math.random() * 30) + 70;

document.getElementById("scoreResult").innerHTML =
score + " / 100";
}