/*!
 *  Echo v1.4.0
 *  Lazy-loading with data-* attributes, offsets and throttle options
 *  Project: https://github.com/toddmotto/echo
 *  by Todd Motto: http://toddmotto.com
 *  Copyright. MIT licensed.
 */

/*
window.Echo = (function(root, document, undefined) {

	'use strict';

	var store = [],
	offset,
	throttle,
	poll;

	console.log('root.innerHeight: ', window.innerHeight);

	var elemH = root === window? (root.innerHeight || document.documentElement.clientHeight) : root.offsetHeight;

	var _inView = function(el) {
		var coords = el.getBoundingClientRect();
		return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= elemH + parseInt(offset));
	};

	var _pollImages = function() {
		for (var i = store.length; i--;) {
			var self = store[i];
			if (_inView(self)) {
				self.src = self.getAttribute('data-echo');
				store.splice(i, 1);
			}
		}
	};

	var _throttle = function() {
		clearTimeout(poll);
		poll = setTimeout(_pollImages, throttle);
	};

	var init = function(obj) {
		var nodes = document.querySelectorAll('[data-echo]');
		var opts = obj || {};
		offset = opts.offset || 0;
		throttle = opts.throttle || 250;

		for (var i = 0; i < nodes.length; i++) {
			store.push(nodes[i]);
		}

		_throttle();

		if (document.addEventListener) {
            root.addEventListener('scroll', _throttle, false);
		} else {
            root.attachEvent('onscroll', _throttle);
		}
	};

	return {
		init: init,
		render: _throttle
	};

})(document.getElementById("demo"), document);*/


(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory;   // factory(root)
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        global.Echo = factory;
    }
})(typeof window !== "undefined" ? window : this, function (root) {

    'use strict';

    var store = [],
        offset,
        throttle,
        poll;

    var elemH = root === window? (root.innerHeight || document.documentElement.clientHeight) : root.offsetHeight;

    var _inView = function(el) {
        var coords = el.getBoundingClientRect();
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= elemH + parseInt(offset));
    };

    var _pollImages = function() {
        for (var i = store.length; i--;) {
            var self = store[i];
            if (_inView(self)) {
                self.src = self.getAttribute('data-echo');
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function() {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function(obj) {
        var nodes = document.querySelectorAll('[data-echo]');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 250;

        for (var i = 0; i < nodes.length; i++) {
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            root.addEventListener('scroll', _throttle, false);
        } else {
            root.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

});
