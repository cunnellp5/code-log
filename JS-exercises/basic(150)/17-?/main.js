(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
    var header = document.createElement('script');
    header.src = 'header.js';
    var sidenav = document.createElement('script');
    sidenav.src = 'sidenav.js'
    var seventeen = document.createElement('script');
    seventeen.src = '17.js';
    var eighteen = document.createElement('script');
    eighteen.src = '18.js';
    var ninteen = document.createElement('script');
    ninteen.src = '19.js';
    var twenty = document.createElement('script');
    twenty.src = '20.js';
    var twentyone = document.createElement('script');
    twentyone.src = '21.js';
    var twentytwo = document.createElement('script');
    twentytwo.src = '22.js';
    var twentythree = document.createElement('script');
    twentythree.src = '23.js';
    var twentyfour = document.createElement('script');
    twentyfour.src = '24.js';

    document.head.append(
      header,
      sidenav,
      seventeen,
      eighteen,
      ninteen,
      twenty,
      twentyone,
      twentytwo,
      twentythree,
      twentyfour
    );
  });

}());
