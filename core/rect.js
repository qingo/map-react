export default class Rect {
    constructor(left, bottom, right, top) {
        this.init(left, bottom, right, top);
    }

    /**
     * 初始化函数
     * @param left
     * @param bottom
     * @param right
     * @param top
     */
    init(left = 0, bottom = 0, right = -1, top = -1) {
        if (left > right || bottom > top) {
            left = bottom = 0;
            right = top = -1;
        }
        this.left = left;
        this.bottom = bottom;
        this.top = top;
        this.right = right;
    }

    /**
     * 求边境的宽度
     * @returns {number}
     */
    width() {
        var width = this.right - this.left;
        return width > 0 ? width : 0;
    }

    /**
     * 求边境的高度
     * @returns {number}
     */
    height() {
        var height = this.top - this.bottom;
        return height > 0 ? height : 0
    }

    /**
     * 求中心点
     * @returns {{x: number, y: number}}
     */
    center() {
        return {
            x: (this.right + this.left) / 2,
            y: (this.top + this.bottom ) / 2
        }
    }

    /**
     * 放缩
     * @param x
     * @param y
     */
    scale(x, y) {
        if (this.width() > 0) {
            this.right += x;
            this.top += y;
            this.left -= x;
            this.min.Y -= y;
        }
        this.init(this.left, this.bottom, this.right, this.top);
    }

    /**
     * 扩展
     * @param x
     * @param y
     */
    expend(x, y) {
        if (this.width() > 0) {
            if (x < this.left)
                this.left = x;
            if (y < this.bottom)
                this.bottom = y;
            if (x > this.right)
                this.right = x;
            if (y > this.top)
                this.top = y;
        } else {
            this.left = x;
            this.bottom = y;
            this.right = x;
            this.top = y;
        }
    }

    /**
     * 平移
     * @param x
     * @param y
     */
    translate(x, y) {
        if (this.width() > 0) {
            this.right += x;
            this.top += y;
            this.left += x;
            this.bottom += y;
        }
    }

    /**
     * 求相交点矩形
     * @param rect
     * @returns {Rect}
     */
    intersect(rect){
        if(this.width()<0 || rect.width()<0)return new Rect(0, 0, -1, -1);
        else {
            //todo max util
            var left = this.left <= rect.left ? rect.left : this.left;
            var bottom = this.bottom <= rect.bottom ? rect.bottom : this.bottom;
            var right = this.right >= rect.right ? rect.right : this.right;
            var top = this.top >= rect.top ? rect.top : this.top;
            return new Rect(left, bottom, right, top);
        }
    }

    /**
     * 判断两个矩形是否相等
     * @param rect
     * @returns {boolean}
     */
    eq(rect){
        if(this.width()<0 || rect.width()<0)return false;
        else return(
            rect.bottom === this.top
            && rect.top === this.bottom
            && rect.left === this.right
            && rect.right === this.left
        )
    }
    
    toString(){
        return `[object: Rect]`
    }


}