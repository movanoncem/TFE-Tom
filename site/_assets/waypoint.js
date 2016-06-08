function waypoint(){
  var waypoint = new Waypoint({
    element: document.getElementById('container2'),
    handler: function() {
      $(".menu-two").addClass('activetwo');
      $(".menu-one").removeClass('active');
      $(".menu-three").removeClass('activethree');

      $(".menu-Two-Mobile").addClass('activeMobile');
      $(".menu-One-Mobile").removeClass('activeMobile');
      $(".menu-Three-Mobile").removeClass('activeMobile');
    }, offset: '0%'
  })
  var waypoint = new Waypoint({
    element: document.getElementById('container4'),
    handler: function() {
      $(".menu-two").addClass('activetwo');
      $(".menu-one").removeClass('active');
      $(".menu-three").removeClass('activethree');

      $(".menu-Two-Mobile").addClass('activeMobile');
      $(".menu-One-Mobile").removeClass('activeMobile');
      $(".menu-Three-Mobile").removeClass('activeMobile');
    },
    offset:'100%'
  })
  var waypoint = new Waypoint({
    element: document.getElementById('container4'),
    handler: function() {
      $(".menu-three").addClass('activethree');
      $(".menu-one").removeClass('active');
      $(".menu-two").removeClass('activetwo');

      $(".menu-Two-Mobile").removeClass('activeMobile');
      $(".menu-One-Mobile").removeClass('activeMobile');
      $(".menu-Three-Mobile").addClass('activeMobile');
    }
  })
  var waypoint = new Waypoint({
    element: document.getElementById('container1'),
    handler: function() {
      $(".menu-three").removeClass('activethree');
      $(".menu-one").addClass('active');
      $(".menu-two").removeClass('activetwo');

      $(".menu-Two-Mobile").removeClass('activeMobile');
      $(".menu-One-Mobile").addClass('activeMobile');
      $(".menu-Three-Mobile").removeClass('activeMobile');
    }, offset:'bottom-in-view'
  })
}


