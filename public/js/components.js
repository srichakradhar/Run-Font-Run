angular.module('components', [])

    .directive('div', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $interval) {

                let counter = 0;

                let font_families = [
                    "Josefin Sans, sans-serif",
                    'Bilbo Swash Caps, cursive',
                    'Courier Prime, monospace',
                    'Exo, sans-serif',
                    'Josefin Sans, sans-serif',
                    'Lato, sans-serif',
                    'Luckiest Guy, cursive',
                    'Satisfy, cursive'
                ]

                $interval(function () {
                    if (counter >= font_families.length) counter = 0
                    document.getElementsByClassName('world')[0].style.fontFamily = font_families[counter];
                    console.log("Counter:", counter);
                    counter++;
                }, 1000);

            },
            template: "<p><span class='hello'>Hello </span><span class='world'>world</span></p>",
            replace: true
        };
    })
