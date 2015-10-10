(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-14355f66-2404-48fc-a5fd-c6e083fa3a43 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-abbf570d-8795-46c6-ac05-58f32e93e24e .ui-page").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-bec90758-6901-497e-ab8b-7f3ea62618c7 .ui-page").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-b17dd099-f52c-4ad8-b08a-a96c0ae21ea1 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-994c76f9-29db-4916-87d8-444e6a04cdee .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);