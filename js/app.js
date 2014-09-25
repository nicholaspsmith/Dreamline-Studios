// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
  var spaces = $('.space');
  spaces.height(window.innerHeight);

  verticallyCenter($('.dreamlogo').parent());
  verticallyCenter($('.caption').parent());

  $('#fullpage').fullpage({
    anchors: ['space-1', 'space-2', 'space-3', 'space-4', 'space-5']
  });

});

function verticallyCenter($el) {
  var top = ($el.parent().height() - $el.height()) / 2;
  $el.css('margin-top', top);
}
