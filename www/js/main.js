$(document).ready(function () {


  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  /*[ File Input Config ]
      ===========================================================*/

  try {

    var file_input_container = $('.js-input-file');

    if (file_input_container[0]) {

      file_input_container.each(function () {

        var that = $(this);

        var fileInput = that.find(".input-file");
        var info = that.find(".input-file__info");

        fileInput.on("change", function () {

          var fileName;
          fileName = $(this).val();

          if (fileName.substring(3, 11) == 'fakepath') {
            fileName = fileName.substring(12);
          }

          if (fileName == "") {
            info.text("No file chosen");
          } else {
            info.text(fileName);
          }

        })

      });

    }



  }
  catch (e) {
    console.log(e);
  }

  var cardTextContent = $('.card-text').text();
  if (cardTextContent.length > 60) {
    var newCardTextContent = cardTextContent.substr(0, 60)+'...';
    $('.card-text').text(newCardTextContent);
  }


});
