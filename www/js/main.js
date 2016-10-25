function parseComponent(elem, scope){
    scope = scope || {};
    var htmlElement = elem;

    if($(htmlElement).attr("data-init") == "false") { return; }

    require([$(htmlElement).attr("data-component")], function(component){
        if(typeof component == 'function'){
            var comp = new component(htmlElement, scope);
        }
    });
}

function deferImagesLoad(container, callBack){
    $(container).each(function(){
        var sup = this;
        var images = $(this).find("img");
        var imagesNr = $(images).length;
        var loaded = 0;

        $(images).one("load", function() {
          loaded ++;
          if(loaded >= imagesNr){
            //console.log('all images loaded');
            callBack(sup);
          }
        }).each(function() {
          if(this.complete) $(this).load();
        });
    });
}

(function($){
    $(document).ready(function(){

        console.log('js running');

    });
})(jQuery);