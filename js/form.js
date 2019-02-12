$(document).ready(function() {
    $('#submit-form').click(function(e) {
        var ggFrm = $("#test-form");
        var name = ggFrm.find("#name").val();
        var location = ggFrm.find("#location").val();
        var wishes = ggFrm.find("#wishes").val();
        e.preventDefault();
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "https://script.google.com/macros/s/AKfycbz31omycey5JpbaN92Ygu4xeNqc9m3Qmidn7o_ko5FuNeEIFF8/exec",
            data: {
                name: name,
                local: location,
                wishes: wishes
            },
            success: function (data) {
              window.location = 'https://zoluvcuc.github.io/wishes';
            }
          });
        
    });
});