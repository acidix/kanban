$( function() {
    $('#refresh').on('click', function (e) {
         window.location.href = '/refresh';
    })

    $( "#active-content" ).sortable();
    $( "#active-content" ).disableSelection();
    $( "#backburner-content" ).sortable();
    $( "#backburner-content" ).disableSelection();
    $( "#completed-content" ).sortable();
    $( "#completed-content" ).disableSelection();

    $('.persist-state').persistState();
    $('#reset').click(function(){
      $(':ow-persistState').persistState('clear');
      window.location.href = '/';
    });

});


function switchActiveClass(classes) {
  $('#active').toggleClass(classes);
  $('#active-content').toggleClass(classes);
}

function resizeActive(action) {
    if (action=='enlarge') {
      if ($('#active').hasClass('col-md-6')) {
        switchActiveClass('col-md-6 col-md-8');
      } else {
        switchActiveClass('col-md-8 col-md-10');
      }
    } else {
      if ($('#active').hasClass('col-md-10')) {
        switchActiveClass('col-md-10 col-md-8');
      } else {
        switchActiveClass('col-md-8 col-md-6');
      }
    }
}
function toggleItems(key) {
  $('.' + key).toggle(400);
  $('#btn-' + key).toggleClass('btn-inactive', 400);
}
function toggleHanging() {
  $('.hanging').toggle(400);
  $('.toggle-hanging').toggleClass('glyphicon-plus-sign glyphicon-minus-sign', 400)
}
function toggleSidebar(kind) {
  if ($('#' + kind).hasClass('col-md-3')) {
    $('#' + kind + '-content').children().css('visibility','hidden');
    resizeActive('enlarge');
  } else {
    $('#' + kind + '-content').children().css('visibility','visible');
    resizeActive('reduce');
  }

  $('#' + kind).children().first().toggle();
  $('#' + kind).toggleClass('col-md-3 col-md-1');
  $('#' + kind).children().last().toggleClass('glyphicon-indent-right glyphicon-indent-left');

  $('#' + kind + '-content').toggleClass('col-md-3 col-md-1');
}
function expandViewport() {
  $('#main').toggleClass('container container-fluid', 400);
  $('#expandicon').toggleClass('glyphicon-resize-full glyphicon-resize-small', 400);
}

$.ow.persistState.elementPersistence['div.collapsible'] = {
    saveState: function($el) {
        return { hidden: $el.hasClass('col-md-1') };
    },
    restoreState: function($el, state) {
        if(!state) return;
        if ( state.hidden )
          toggleSidebar($el.attr('id'));
    }
};

$.ow.persistState.elementPersistence['div#main'] = {
    saveState: function($el) {
        return { expanded: $el.hasClass('container-fluid') };
    },
    restoreState: function($el, state) {
        if(!state) return;
        if ( state.expanded )
          expandViewport();
    }
};

$.ow.persistState.elementPersistence['span.toggle-hanging'] = {
    saveState: function($el) {
        return { hidden: $el.hasClass('glyphicon-plus-sign') };
    },
    restoreState: function($el, state) {
        if(!state) return;
        if ( state.hidden )
          toggleHanging();
    }
};

$.ow.persistState.elementPersistence['button'] = {
    saveState: function($el) {
        return { hidden: $el.hasClass('btn-inactive')};
    },
    restoreState: function($el, state) {
        if(!state) return;
        if ( state.hidden ) {
          toggleItems($el.html())
        }
    }
};
