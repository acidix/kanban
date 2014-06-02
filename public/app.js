$( function() {
    $('#refresh').on('click', function (e) {
         window.location.href = '/refresh';
    })
})

function toggleItems(key) {
  $('.' + key).toggle(400);
  $('#btn-' + key).toggleClass('btn-inactive');
}
function toggleHanging() {
  $('.hanging').toggle(400);
  $('.toggle-hanging').toggleClass('glyphicon-plus-sign glyphicon-minus-sign')
}
