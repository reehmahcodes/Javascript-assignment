$(document).ready(function() {
    // Attach click event listeners to thumbnails
    $('.thumbnail-list li').on('click', function() {
      
      var thumbnailId = $(this).find('img').attr('id');
      
      
      var largeImagePath = 'large_' + thumbnailId + '.jpg';
      transitionToLargeImage(largeImagePath);
    });
  });
  
  // Function to handle image transition
  function transitionToLargeImage(imagePath) {
    
    $('#largeImage').fadeOut(300, function() {
    
      $(this).attr('src', imagePath);
      
      // Fade in the new large image
      $(this).fadeIn(300);
    });
  }
  