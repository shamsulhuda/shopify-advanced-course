$(document).ready(function(){
    function selectedVariant(param, value){
       var url = new URL(window.location.href);

       url.searchParams.set(param, value);
       window.history.replaceState({},'',url);
    }
    function updateSelection(){
        var selectedValues = "";
        $('.product-options input[type="radio"]:checked').each(function(){
            selectedValues += (selectedValues ? " / " : "") + $(this).val();
        });

        // select the main variant
        $(".variants option").each(function(){
            if($(this).text() == selectedValues){
                $(this).prop("selected", true);
                return false;
            }
        });
    }

    $('.product-options input[type="radio"]').change(function(){
        updateSelection();

        var currentVariant = $('.variants').val();
        console.log(currentVariant);
        selectedVariant('variant', currentVariant);
    });
    updateSelection();
})