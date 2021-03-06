var cards = [
  {
    title: 'fläk Chat',
    image: 'assets/images/flak-logo-birdonly-transparent.png',
    siteURL: 'https://sarashunter.github.io/flakmessenger/index.html',
    sourceURL: 'https://github.com/sarashunter/flakmessenger'
  },
  {
    title: 'Food Truck Sniffer',
    image: 'assets/images/fts_logo.png',
    siteURL: 'https://ftsreact.herokuapp.com/',
    sourceURL: 'https://github.com/aotolbert/foodtruck_sniffer_2.0'
  },
  {
    title: 'Friend Finder',
    image: 'assets/images/friends.jpg',
    siteURL: 'https://friend-finder-powch.herokuapp.com/',
    sourceURL: 'https://github.com/powch/FriendFinder'
  },
  {
    title: 'Memory Game',
    image: 'assets/images/clickygame.PNG',
    siteURL: 'https://powch.github.io/clickygame/',
    sourceURL: 'https://github.com/powch/clickygame'
  },
  {
    title: 'Mongo News Scraper',
    image: 'assets/images/news-icon.jpg',
    siteURL: 'https://news-sniffer.herokuapp.com/',
    sourceURL: 'https://github.com/powch/news-scraper'
  }
];

var funcs = {
  cardGen: function() {
    var $row1 = $("#row1");
    var $row2 = $("#row2");

    cards.forEach(function(data, idx) {
      var $newCol = $("<div>").addClass("col-sm-3 text-center");
      var $newCard = $("<div>").addClass("card");
      var $cardBody = $("<div>")
        .addClass("card-body")
        .attr("data-link", data.siteURL);
      var $title = $("<h5>")
        .addClass("title text-left")
        .text(data.title);
      var $img = $("<img>")
        .addClass("img-fluid")
        .attr("src", data.image)
        .attr("height", "200px")
        .attr("width", "200px");
      var $footer = $("<div>").addClass("card-footer");
      var $footerRow = $("<div>").addClass("row");
      var $siteDiv = $("<div>").addClass("col-sm-6 col-6 cardBtnDiv");
      var $sourceDiv = $("<div>").addClass("col-sm-6 col-6");
      var $siteLink = $("<a>")
        .addClass("cardBtn")
        .attr("href", data.siteURL)
        .attr("target", "_blank");
      var $sourceLink = $("<a>")
        .addClass("cardBtn")
        .attr("href", data.sourceURL)
        .attr("target", "_blank");
      var $siteIcon = $("<i>").addClass("fas fa-external-link-alt");
      var $sourceIcon = $("<i>").addClass("far fa-file-code");

      $newCol.append(
        $newCard.append(
          $cardBody.append($title, $img),
          $footer.append(
            $footerRow.append(
              $siteDiv.append($siteLink.html($siteIcon)),
              $sourceDiv.append($sourceLink.html($sourceIcon))
            )
          )
        )
      );

      if (idx < 2) {
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
};

funcs.cardGen();

$(".card-body").click(function() {
  var url = $(this).attr("data-link");

  window.open(url, "_blank");
});

$(window).scroll(function() {
  var pos = $(window).scrollTop();

  if (pos >= 150) {
    funcs.fade("#navSpy", 1);
    funcs.fade("#topBtn", 1);
  } else {
    funcs.fade("#navSpy", 0);
    funcs.fade("#topBtn", 0);
  }
});
