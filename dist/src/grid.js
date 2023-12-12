var Grid = /** @class */ (function () {
    function Grid() {
        var _a;
        this.gridItems = [];
        this.isPlayer1Turn = true;
        this.turnCounter = 0;
        this.wincondition = false;
        this.play = true;
        this.p1 = 0;
        this.p2 = 0;
        for (var i = 0; i < 3; i++) {
            var array = [];
            for (var j = 0; j < 3; j++) {
                array.push(new GridItem(this));
                (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.appendChild(array[j].grid_item);
            }
            this.gridItems.push(array);
        }
    }
    Grid.prototype.Wincondition = function () {
        for (var i = 0; i < 3; i++) {
            if (this.gridItems[0][i].inner_text.innerHTML === this.gridItems[1][i].inner_text.innerHTML &&
                this.gridItems[1][i].inner_text.innerHTML === this.gridItems[2][i].inner_text.innerHTML &&
                this.gridItems[0][i].inner_text.innerHTML !== "A") {
                this.wincondition = true;
            }
            if (this.gridItems[i][0].inner_text.innerHTML === this.gridItems[i][1].inner_text.innerHTML &&
                this.gridItems[i][1].inner_text.innerHTML === this.gridItems[i][2].inner_text.innerHTML &&
                this.gridItems[i][1].inner_text.innerHTML !== "A") {
                this.wincondition = true;
            }
            if (this.gridItems[0][0].inner_text.innerHTML === this.gridItems[1][1].inner_text.innerHTML &&
                this.gridItems[1][1].inner_text.innerHTML === this.gridItems[2][2].inner_text.innerHTML &&
                this.gridItems[1][1].inner_text.innerHTML !== "A") {
                this.wincondition = true;
            }
            if (this.gridItems[0][2].inner_text.innerHTML === this.gridItems[1][1].inner_text.innerHTML &&
                this.gridItems[1][1].inner_text.innerHTML === this.gridItems[2][0].inner_text.innerHTML &&
                this.gridItems[1][1].inner_text.innerHTML !== "A") {
                this.wincondition = true;
            }
        }
    };
    return Grid;
}());
export { Grid };
var GridItem = /** @class */ (function () {
    function GridItem(parent) {
        var _this = this;
        this.grid_item = document.createElement("div");
        this.grid_item.className = "grid-item black-square";
        this.inner_text = document.createElement("p");
        this.inner_text.className = "symbol";
        this.inner_text.innerHTML = "A";
        this.grid_item.appendChild(this.inner_text);
        this.grid_item.addEventListener("click", function () {
            if (parent.play == true) {
                if (parent.wincondition == false) {
                    if (_this.inner_text.innerHTML === "A") {
                        parent.turnCounter++;
                        parent.isPlayer1Turn = !parent.isPlayer1Turn;
                        if (parent.isPlayer1Turn === false) {
                            _this.inner_text.innerHTML = "X";
                            _this.inner_text.style.color = "white";
                            parent.Wincondition();
                            parent.turnCounter++;
                        }
                        else {
                            _this.inner_text.innerHTML = "O";
                            _this.inner_text.style.color = "white";
                            parent.Wincondition();
                            parent.turnCounter++;
                        }
                        if (parent.turnCounter == 9) {
                        }
                    }
                }
                if (parent.wincondition == true) {
                }
            }
            if (parent.play == false) {
            }
        });
    }
    return GridItem;
}());
//# sourceMappingURL=grid.js.map