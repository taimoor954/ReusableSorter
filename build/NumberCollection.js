"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    //to decide if we need to swap or not
    NumberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    //to swap
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
