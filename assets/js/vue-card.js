/* eslint-env browser */

/**
 * vue-based card support
 * Used on any individual post/page
 *
 * Detects when a vue-based card has been used and applies vue to make sure it works.
 */

(function (window, document) {
    var applyVueForCards = function applyVueForCards() {
        var cards = document.querySelectorAll('.kg-vue-based-card');
        cards.forEach(function (card) {
            new Vue({el: card});
        });
    };

    document.addEventListener('DOMContentLoaded', applyVueForCards);
})(window, document);
