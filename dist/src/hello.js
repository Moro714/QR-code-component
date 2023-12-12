var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.HelloWorld = function () {
        var h1 = document.createElement("h1");
        h1.innerText = "sug pula bine de tot";
        h1.style.color = 'red';
        document.body.appendChild(h1);
    };
    Hello.SalutFrate = function () {
        var frate = document.getElementById("frate");
        if (frate != null) {
            frate.style.color = "blue";
        }
    };
    return Hello;
}());
export { Hello };
var src = /** @class */ (function () {
    function src() {
    }
    return src;
}());
export { src };
//# sourceMappingURL=hello.js.map