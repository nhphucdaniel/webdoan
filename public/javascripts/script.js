jQuery.noConflict(),

jQuery(window).load(function() {
    "use strict";
    jQuery("#sequence").sequence( {
        nextButton: !0, prevButton: !0, pagination: !1, animateStartingFrameIn: !0, autoPlay: !0, autoPlayDelay: 2e3, preloader: !0, preloadTheseFrames: [1], navigationSkip: !1
    }
    ).data("sequence"), jQuery(".flexslider").flexslider( {
        animation:"slide", directionNav:!1, start:function() {
            jQuery("body").removeClass("loading")
        }
    }
    ), jQuery("#bannerslide").flexslider( {
        animation:"slide", directionNav:!1, controlNav:!1, start:function() {
            jQuery(".banner").removeClass("loading")
        }
    }
    )
}

);


jQuery.noConflict(),
jQuery(document).ready(function() {
    "use strict";
    if(jQuery(".tab-box .tab-content").hide(), jQuery("#tabnav ul li:first").addClass("active").show(), jQuery(".tab-content:first").show(), jQuery("#tabnav ul li").click(function() {
        jQuery("#tabnav ul li").removeClass("active"), jQuery(this).addClass("active"), jQuery(".tab-content").hide();
        var e=$(this).find("a").attr("href");
        return jQuery(e).fadeIn(), !1
    }
    ), jQuery("#featured").carouFredSel( {
        auto:!1, prev:"#prev_featured", next:"#next_featured", mousewheel:!1, swipe: {
            onMouse: !0, onTouch: !0
        }
        , responsive:!0, width:"variable", height:"variable", scroll:1, items: {
            width:270, height:"variable", visible: {
                min: 1, max: 1
            }
        }
    }
    ), jQuery("#hot").carouFredSel( {
        auto:!1, prev:"#prev_hot", next:"#next_hot", mousewheel:!1, swipe: {
            onMouse: !0, onTouch: !0
        }
        , responsive:!0, width:"100%", height:"variable", scroll:1, items: {
            width:270, height:"variable", visible: {
                min: 1, max: 1
            }
        }
    }
    ), jQuery("#braldLogo").carouFredSel( {
        auto:!1, prev:"#prev_brand", next:"#next_brand", mousewheel:!1, swipe: {
            onMouse: !0, onTouch: !0
        }
        , responsive:!0, width:"100%", height:"variable", scroll:1, items: {
            width:270, height:"variable", visible: {
                min: 1, max: 1
            }
        }
    }
    ), jQuery("#gallery_01").carouFredSel( {
        auto:!1, prev:"#thum-prev", next:"#thum-next", mousewheel:!0, swipe: {
            onMouse: !0, onTouch: !0
        }
        , responsive:!0, width:"100%", scroll:1, items: {
            width:55, height:55, visible: {
                min: 1, max: 4
            }
        }
    }
    ), jQuery(".tool").tooltip(), jQuery(window).width()>767) {
        jQuery(".nav li.dropdown").hover(function() {
            jQuery(this).addClass("dropdown-hover");
            var e=150*jQuery(this).find(".dropdown-menu:first ul").size()+"px";
            jQuery(".dropdown-menu").css("width", e)
        }
        , function() {
            jQuery(this).removeClass("dropdown-hover")
        }
        )
    }
    jQuery(window).width()<480&&(jQuery(".featured-products").find(".col-xs-6").removeClass("col-xs-6"), jQuery(".hot-products").find(".col-xs-6").removeClass("col-xs-6")), jQuery(window).width()>760?jQuery("#zoom_03").elevateZoom( {
        gallery: "gallery_01", cursor: "move", galleryActiveClass: "active", imageCrossfade: !0, loadingIcon: "images/loading.gif", scrollZoom: !0
    }
    ):jQuery(window).width()<490?jQuery("#zoom_03").elevateZoom( {
        gallery: "gallery_01", cursor: "move", galleryActiveClass: "active", imageCrossfade: !0, loadingIcon: "images/loading.gif", zoomWindowWidth: 100, zoomWindowHeight: 200, scrollZoom: !0
    }
    ):jQuery("#zoom_03").elevateZoom( {
        gallery: "gallery_01", cursor: "move", galleryActiveClass: "active", imageCrossfade: !0, loadingIcon: "images/loading.gif", zoomWindowWidth: 250, zoomWindowHeight: 250, scrollZoom: !0
    }
    )
}

);

/*price range*/

 $('#sl2').slider();

    var RGBChange = function() {
      $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
};  

//Account Information
$(document).ready(function(){
    $("#ChangeInfo").click(function(){
        $("#ChangeInfo").hide();
        $("#CancelChange").show();
        $("#SaveChange").show();
        //$("input" ).prop( "disabled", false );
        $("#emailaddress" ).prop( "disabled", false );
        $("#fullname" ).prop( "disabled", false );
        $("#sex" ).prop( "disabled", false );
        $("#phonenumber").prop( "disabled", false );
        $("#address").prop( "disabled", false );
    })
    $("#CancelChange").click(function(){
        $("#ChangeInfo").show();
        $("#CancelChange").hide();
        $("#SaveChange").hide();
        $("#emailaddress" ).prop( "disabled", true );
        $("#fullname" ).prop( "disabled", true );
        $("#sex" ).prop( "disabled", true );
        $("#phonenumber").prop( "disabled", true );
        $("#address").prop( "disabled", true );
    })
    $("#SaveChange").click(function(){
        $("#ChangeInfo").show();
        $("#CancelChange").hide();
        $("#SaveChange").hide();
        $("#emailaddress" ).prop( "disabled", true );
        $("#fullname" ).prop( "disabled", true );
        $("#sex" ).prop( "disabled", true );
        $("#phonenumber").prop( "disabled", true );
        $("#address").prop( "disabled", true );
    })
})