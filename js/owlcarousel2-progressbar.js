var owlCarousel2Progressbar = function (r) {
    var s = {};

    function e(o) {
        if (s[o]) return s[o].exports;
        var t = s[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return r[o].call(t.exports, t, t.exports, e), t.l = !0, t.exports
    }
    return e.m = r, e.c = s, e.d = function (r, s, o) {
        e.o(r, s) || Object.defineProperty(r, s, {
            enumerable: !0,
            get: o
        })
    }, e.r = function (r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }, e.t = function (r, s) {
        if (1 & s && (r = e(r)), 8 & s) return r;
        if (4 & s && "object" == typeof r && r && r.__esModule) return r;
        var o = Object.create(null);
        if (e.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: r
            }), 2 & s && "string" != typeof r)
            for (var t in r) e.d(o, t, function (s) {
                return r[s]
            }.bind(null, t));
        return o
    }, e.n = function (r) {
        var s = r && r.__esModule ? function () {
            return r.default
        } : function () {
            return r
        };
        return e.d(s, "a", s), s
    }, e.o = function (r, s) {
        return Object.prototype.hasOwnProperty.call(r, s)
    }, e.p = "", e(e.s = 0)
}([function (r, s) {
    class e {
        constructor(r, s) {
            this.carousel = r, this.$carousel = $(r), this.$carouselNamespace = "owl.carousel", this.$carouselLoopDisabled = null, this.$carouselLoopWarningMessage = 'Please disable "loop" option for Owl Carousel instance, we don\'t support it yet.', this.progressBarEl = null, this.progressBarElScroller = null, this.progressBarSize = s.size || "2px", this.progressBarForegroundColor = s.foregroundColor || "#f0f0f0", this.progressBarColor = s.color || "#313131", this.progressBarBorderRadius = s.borderRadius || "5px", this.progressBarTransitionInterval = s.transitionInterval || "0.25", this.progressBarMargins = s.margin || "10px 0", this.progressBarClassName = s.progressBarClassName || "owl-carousel-progress-bar", this.scrollerClassName = s.scrollerClassName || "owl-carousel-progress-bar-scroller", this.destroy = this.destroy.bind(this), this.handleProgressBarChange = this.handleProgressBarChange.bind(this), this.checkForLoopMode = this.checkForLoopMode.bind(this), this.initialize()
        }
        createAndAppendProgressBarEl() {
            this.progressBarEl = document.createElement("div"), this.progressBarElScroller = document.createElement("span"), this.progressBarEl.appendChild(this.progressBarElScroller), this.progressBarEl.className = this.progressBarClassName, this.progressBarElScroller.className = this.scrollerClassName, this.styleProgressBarElements(), this.carousel.parentNode.insertBefore(this.progressBarEl, this.carousel.nextSibling)
        }
        styleProgressBarElements() {
            this.progressBarEl.style.height = this.progressBarSize, this.progressBarEl.style.backgroundColor = this.progressBarForegroundColor, this.progressBarEl.style.borderRadius = this.progressBarBorderRadius, this.progressBarEl.style.margin = this.progressBarMargins, this.progressBarEl.style.position = "relative", this.progressBarElScroller.style.height = this.progressBarSize, this.progressBarElScroller.style.backgroundColor = this.progressBarColor, this.progressBarElScroller.style.borderRadius = this.progressBarBorderRadius, this.progressBarElScroller.style.transition = "margin-left " + this.progressBarTransitionInterval + "s ease-in-out", this.progressBarElScroller.style.position = "absolute", this.progressBarElScroller.style.top = "0", this.progressBarElScroller.style.right = "0", this.progressBarElScroller.style.left = "0", this.progressBarElScroller.style.maxWidth = "100%"
        }
        reactToCarouselChanges() {
            this.$carousel.on("initialized.owl.carousel resized.owl.carousel translate.owl.carousel", this.handleProgressBarChange), this.$carousel.on("translate.owl.carousel", this.checkForLoopMode)
        }
        checkForLoopMode() {
            if (this.$carouselLoopDisabled) return;
            this.$carousel.data()[this.$carouselNamespace].options.loop ? (console.warn(this.$carouselLoopWarningMessage), this.$carouselLoopDisabled = !1) : this.$carouselLoopDisabled = !0
        }
        handleProgressBarChange(r) {
            this.progressBarElScroller.style.width = `${100/r.item.count*r.page.size}%`, this.progressBarElScroller.style.marginLeft = `${r.item.index/r.item.count*100}%`
        }
        initialize() {
            this.createAndAppendProgressBarEl(), this.reactToCarouselChanges()
        }
        destroy() {
            this.$carousel.off("initialized.owl.carousel resized.owl.carousel translate.owl.carousel", this.handleProgressBarChange), this.$carousel.off("translate.owl.carousel", this.checkForLoopMode), this.progressBarEl.parentNode.removeChild(this.progressBarEl)
        }
    }! function (r) {
        r.fn.owlCarouselProgressBar = function (s) {
            const o = r.extend({}, s);
            return r.each(this, function () {
                this.progressBarLoaded && this.destroyProgressBar();
                const r = new e(this, o);
                this.destroyProgressBar = r.destroy, this.progressBarLoaded = !0
            }), this
        }
    }(jQuery)
}]);