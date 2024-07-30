jQuery(document).ready(function($) 
{
  if($('body').hasClass("template-product-thbc-product"))
  {
    var image_src = $(".product__media img").attr("src");
    $("#shopify-section-template--22159668773159__rich_text_x9xWnD").css("background-image",`url(${image_src})`);
    $("#hamper_sku_list li").click(function(){
      $("#related_sku .popup-heading").html(" ");
      $("#related_sku .popup-text").html(" ");
      var title = $(this).children(".sku_title").text();
      var description = $(this).children(".sku_description").text();
      var img = $(this).children("img").attr("src");
      $("#related_sku .popup-heading").html(title);
      $("#related_sku .popup-text").html(description);
      $("#related_sku .popup-thumbnail img").attr('src', img);
      $("#related_sku").addClass("popup-open");
    });
    $("#hamper_inside div.box").click(function(){
      $("#related_sku .popup-heading").html(" ");
      $("#related_sku .popup-text").html(" ");
      var title = $(this).children(".box_right").children(".include_title").text();
      var description = $(this).children(".box_right").children(".include_description").text();
      var img = $(this).children(".box_left").children("img").attr("src");
      $("#related_sku .popup-heading").html(title);
      $("#related_sku .popup-text").html(description);
      $("#related_sku .popup-thumbnail img").attr('src', img);
      $("#related_sku").addClass("popup-open");
    });

    $("#product_tab ul li, #product_tab a.button_accordion").click(function(){
      var selected = $(this).attr("for");     
      $("#product_tab [for]").removeClass("selected");
      $(".product_tab_containers .section_tab").addClass("hidden");
      $(".product_tab_containers ."+selected).removeClass("hidden");
      $('#product_tab [for="'+selected+'"]').addClass("selected");
    });
  }
  if($(".product__main .swiper-wrapper .product__media-subitem .product__media img").length < 2)
  {
    $(".product__main .product__media-sublist").remove()
  }



    $("#message_data .category-button").click(function(){
      $("#message_data .category-button").removeClass("active");
      $(this).addClass('active');
      $('.message_box').addClass('hidden');
      var data_category = $(this).attr('data-category');
      if(data_category == "all")
      {
        $('.message_box').removeClass('hidden');
      }
      else
      {
        $(`.message_box[category_id="${data_category}"]`).removeClass('hidden');  
      }
  });
  $("#message_data .message_box i").click(function(){
      var text_id = $(this).attr('for');
      var old_caption = $(this).html();
      var text = $(`.message_box[text_id="${text_id}"] .message`).text();
      if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        return;
      }
      navigator.clipboard.writeText(text).then(function() {
          console.log('Copying to clipboard was successful!');
          if($(`.message_box i[for="${text_id}"] span`).length == 0)
          {
            $(`.message_box i[for="${text_id}"]`).append("<span style='color:Green'> Done</span>");  
          }
          setTimeout(function() 
          {
            $(`.message_box i[for="${text_id}"] span`).remove('span');
          }, 1000)
      }, function(err) {
          console.error('Could not copy text: ', err);
      });
  });
  $("#message_data .message_box .message").click(function(){
      var text_id = $(this).attr('for');
      var old_caption = $(this).html();
      var text = $(`.message_box[text_id="${text_id}"] .message`).text();
      if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        return;
      }
      navigator.clipboard.writeText(text).then(function() {
          console.log('Copying to clipboard was successful!');
          if($(`.message_box i[for="${text_id}"] span`).length == 0)
          {
            $(`.message_box i[for="${text_id}"]`).append("<span style='color:Green'> Done</span>");  
          }
          setTimeout(function() 
          {
            $(`.message_box i[for="${text_id}"] span`).remove('span');
          }, 1000)
      }, function(err) {
          console.error('Could not copy text: ', err);
      });
  });  
  $("#compare_packaging_link").click(function(){
    $("#compare_packaging_modal").addClass("popup-open");
  });  
  $("#variant-radios-template--22159668773159__main legend").click(function(){
    $("#compare_packaging_modal").addClass("popup-open");
  });  

  
  
});

      $('.tpo_radio-buttons-wrapper').on('click', 'a', function(e) {
        e.preventDefault();
        if($(this).attr('href') == "https://#btn_inc_2"){$("#hamper_inside div.box#inc_2").click();  }
        else if($(this).attr('href') == "https://#btn_inc_1"){$("#hamper_inside div.box#inc_1").click();}
    })
