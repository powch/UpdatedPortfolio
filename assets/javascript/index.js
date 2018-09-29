var $nav = $("nav");

var cards = [
    {
        title: 'fläk Chat',
        image: 'assets/images/flak-logo-birdonly-transparent.png',
        siteURL: 'https://sarashunter.github.io/flakmessenger/index.html',
        sourceURL: 'https://github.com/sarashunter/flakmessenger'
    },
    {
        title: 'Word Guess',
        image: 'assets/images/hangman.jpg',
        siteURL: 'https://powch.github.io/word-guess-game/',
        sourceURL: 'https://github.com/powch/word-guess-game'
    },
    {
        title: 'Trivia Game',
        image: 'assets/images/trivia.png',
        siteURL: 'https://powch.github.io/TriviaGame/',
        sourceURL: 'https://github.com/powch/TriviaGame'
    },
    {
        title: 'StarWars RPG',
        image: 'assets/images/rey.jpeg',
        siteURL: 'https://powch.github.io/unit-4-game/',
        sourceURL: 'https://github.com/powch/unit-4-game/'
    },
    {
        title: 'Train Scheduler',
        image: 'assets/images/swordfish.jpeg',
        siteURL: 'https://powch.github.io/TrainScheduler/',
        sourceURL: 'https://github.com/powch/TrainScheduler'
    },
    {
        title: 'Friend Finder',
        image: 'assets/images/friends.jpg',
        siteURL: 'https://friend-finder-powch.herokuapp.com/',
        sourceURL: 'https://github.com/powch/FriendFinder'
    }
];

var funcs = {
    cardGen: function () {
        var $row1 = $('#row1');
        var $row2 = $('#row2');

        cards.forEach(function (data, idx) {
            var $newCol = $('<div>').addClass('col-sm-3 text-center');
            var $newCard = $('<div>').addClass('card');
            var $cardBody = $('<div>').addClass('card-body').attr('data-link', data.siteURL);
            var $title = $('<h5>').addClass('title text-left').text(data.title);
            var $img = $('<img>').addClass('img-fluid').attr('src', data.image).attr('height', '200px').attr('width', '200px');
            var $footer = $('<div>').addClass('card-footer');
            var $footerRow = $('<div>').addClass('row');
            var $siteDiv = $('<div>').addClass('col-sm-6 col-6 cardBtnDiv');
            var $sourceDiv = $('<div>').addClass('col-sm-6 col-6');
            var $siteLink = $('<a>').addClass('cardBtn').attr('href', data.siteURL).attr('target', '_blank');
            var $sourceLink = $('<a>').addClass('cardBtn').attr('href', data.sourceURL).attr('target', '_blank');
            var $siteIcon = $('<i>').addClass('fas fa-external-link-alt');
            var $sourceIcon = $('<i>').addClass('far fa-file-code');

            $newCol.append(
                $newCard.append(
                    $cardBody.append(
                        $title,
                        $img
                    ),
                    $footer.append(
                        $footerRow.append(
                            $siteDiv.append(
                                $siteLink.html($siteIcon)
                            ),
                            $sourceDiv.append(
                                $sourceLink.html($sourceIcon)
                            )
                        )
                    )
                )
            );

            if (idx < 3) {
                $row1.append($newCol);
            } else {
                $row2.append($newCol);
            }


        });
    },
    fade: function(elem, val) {
        $(elem)
            .stop()
            .animate({
                opacity: val
            });
    }
}

funcs.cardGen();

$('.card-body').click(function() {
    var url = $(this).attr('data-link');

    window.open(url, '_blank');
});

$(window).scroll(function() {
    var pos = $(window).scrollTop();

    if (pos >= 150) {
        funcs.fade('#navSpy', 1);
        funcs.fade('#topBtn', 1);
    } else {
        funcs.fade('#navSpy', 0);
        funcs.fade('#topBtn', 0);
    }
});