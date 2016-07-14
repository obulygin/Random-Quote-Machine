$(document).ready(function() {
  newColor();
  newQuote();
  $('#newQuote').on('click', function() {
    newColor();
    newQuote();
  });
});

var newColor = function() {
  colors = ['gray', 'rosybrown', 'lightcoral', 'maroon', 'salmon', 'darksalmon', 'lightsalmon', 'sienna', 'chocolate', 'black', 'dimgray', 'peru', 'tan', 'orange', 'goldenrod', 'darkgoldenrod', 'darkkhaki', 'olive', 'olivedrab', 'darkolivegreen', 'darkseagreen', 'forestgreen', 'darkgreen', 'green', 'seagreen', 'mediumseagreen', 'lightseagreen', 'darkslategray', 'teal', 'darkcyan', 'darkturquoise', 'cadetblue', 'deepskyblue', 'steelblue', 'slategray', 'lightslategray', 'dodgerblue', 'cornflowerblue', 'royalblue', 'midnightblue', 'navy', 'darkblue', 'mediumblue', 'blue', 'darkslateblue', 'slateblue', 'mediumslateblue', 'blueviolet', 'indigo', 'darkorchid', 'darkviolet', 'purple', 'darkmagenta', 'mediumvioletred', 'palevioletred', 'crimson'];
  rndColor = colors[Math.floor(Math.random() * colors.length)];
  $('body, #newQuote').css('backgroundColor', rndColor);
  $('.quoteBlock').css('color', rndColor);
};

function newQuote() {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    success: function(data) {
      var quote = JSON.stringify(data.quoteText).slice(1, -1);
      if (JSON.stringify(data.quoteAuthor).slice(1, -1) == '') {
        var author = '–Anonymous';
      } else {
        var author = ' –' + JSON.stringify(data.quoteAuthor).slice(1, -1);
      }
      var shareQuote = quote + author;
      $('blockquote p').html(quote);
      $('blockquote cite').html(author);
      a2a_config.templates = {
        twitter: shareQuote
      };
    }
  });
};