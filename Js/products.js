//perfectscroll
var scrollEl = document.querySelectorAll('#categories-list .card-text');

scrollEl.forEach(function(el){
  new PerfectScrollbar(el);
});

// slick carousel
$(document).ready(function(){
  $('#categories-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px'
  });
});

$('button[name="delProd"]').click(function(){
  // confirm dialog
  var $this = $(this);
  var val = $this.val();

  alertify.confirm("Voulez-vous vraiment Supprimer ce produit?",
  function () {
    $.ajax({
      type: 'POST',
      url: '../PHP/Script/deleteProd.php',
      data: { delProd: val },
      success: function (data) {
        bootstrapNotify(data.text, data.type);

        if(data.type === 'success'){
          $this.parents('tr').fadeOut();
        }
      },
      error: function (err) {
        console.log(err.responseText);
      },
      dataType: "json"
    });

  },
  function() {
    console.log('canceled');
  });
  return false;
});

$('button[name="delCat"]').click(function(){
  // confirm dialog
  var $this = $(this);
  var val = $this.val();

  alertify.confirm("Voulez-vous vraiment Supprimer cette categorie?",
  function () {
    $.ajax({
      type: 'POST',
      url: '../PHP/Script/deleteCat.php',
      data: { delCat: val },
      success: function (data) {
        bootstrapNotify(data.text, data.type);
        
        if(data.type === 'success'){
          $this.parents('.slick-slide.col').fadeOut();
        }
      },
      error: function (err) {
        console.log(err.responseText);
      },
      dataType: "json"
    });

  },
  function() {
    console.log('canceled');
  });
  return false;
});
