(function($) {
    $(document).ready(function() {
        $(".moduletable#module_211>i.fa-user").click(function() {
            $(".moduletable#module_211").toggleClass("shown")
        })
    })
})(jQuery);
if (typeof acymailing == 'undefined') {
    var acymailing = Array();
}
acymailing['NAMECAPTION'] = 'Name';
acymailing['NAME_MISSING'] = 'Please enter your name';
acymailing['EMAILCAPTION'] = 'Enter Your Email';
acymailing['VALID_EMAIL'] = 'Please enter a valid e-mail address';
acymailing['ACCEPT_TERMS'] = 'Please check the Terms and Conditions';
acymailing['CAPTCHA_MISSING'] = 'The captcha is invalid, please try again';
acymailing['NO_LIST_SELECTED'] = 'Please select the lists you want to subscribe to';

jQuery(document).ready(function() {
    RESPONSIVEUI.responsiveTabs();
});

(function($, undefined) {
    $(window).load(function() {
        function isIE() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        };
        var o = $("#swiper-slider_208");
        if (o.length) {
            function getSwiperHeight(object, attr) {
                var val = object.attr("data-" + attr),
                    dim;
                if (!val) {
                    return undefined;
                }
                dim = val.match(/(px)|(%)|(vh)$/i);
                if (dim.length) {
                    switch (dim[0]) {
                        case "px":
                            return parseFloat(val);
                        case "vh":
                            return $(window).height() * (parseFloat(val) / 100);
                        case "%":
                            return object.width() * (parseFloat(val) / 100);
                    }
                } else {
                    return undefined;
                }
            }

            $(document).ready(function() {
                o.each(function() {
                    var s = $(this);
                    var pag = s.find(".swiper-pagination"),
                        next = s.find(".swiper-button-next"),
                        prev = s.find(".swiper-button-prev"),
                        bar = s.find(".swiper-scrollbar"),
                        h = getSwiperHeight(o, "height"),
                        mh = getSwiperHeight(o, "min-height");
                    s.find(".swiper-slide").each(function() {
                        var $this = $(this),
                            url;
                        if (url = $this.attr("data-slide-bg")) {
                            $this.css({
                                "background-image": "url(" + url + ")",
                                "background-size": "cover"
                            })
                        }
                    }).end().find("[data-caption-animate]").addClass("not-animated").end();

                    (function($, undefined) {
                        $(window).load(function() {
                            function isIE() {
                                var myNav = navigator.userAgent.toLowerCase();
                                return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
                            };
                            var o = $("#swiper-slider_208");
                            if (o.length) {
                                function getSwiperHeight(object, attr) {
                                    var val = object.attr("data-" + attr),
                                        dim;
                                    if (!val) {
                                        return undefined;
                                    }
                                    dim = val.match(/(px)|(%)|(vh)$/i);
                                    if (dim.length) {
                                        switch (dim[0]) {
                                            case "px":
                                                return parseFloat(val);
                                            case "vh":
                                                return $(window).height() * (parseFloat(val) / 100);
                                            case "%":
                                                return object.width() * (parseFloat(val) / 100);
                                        }
                                    } else {
                                        return undefined;
                                    }
                                }

                                $(document).ready(function() {
                                    o.each(function() {
                                        var s = $(this);
                                        var pag = s.find(".swiper-pagination"),
                                            next = s.find(".swiper-button-next"),
                                            prev = s.find(".swiper-button-prev"),
                                            bar = s.find(".swiper-scrollbar"),
                                            h = getSwiperHeight(o, "height"),
                                            mh = getSwiperHeight(o, "min-height");
                                        s.find(".swiper-slide").each(function() {
                                            var $this = $(this),
                                                url;
                                            if (url = $this.attr("data-slide-bg")) {
                                                $this.css({
                                                    "background-image": "url(" + url + ")",
                                                    "background-size": "cover"
                                                })
                                            }
                                        }).end().find("[data-caption-animate]").addClass("not-animated").end();

                                        
                                        $(window).on("resize", function() {
                                            var mh = getSwiperHeight(s, "min-height"),
                                                h = getSwiperHeight(s, "height");
                                            if (h) {
                                                s.css("height", mh ? mh > h ? mh : h : h);
                                            }
                                        }).load(function() {
                                            s.find("video").each(function() {
                                                if (!$(this).parents(".swiper-slide-active").length) {
                                                    this.pause();
                                                }
                                            });
                                        }).trigger("resize");
                                    });
                                });
                            }
                        });
                    })(jQuery);
            
                    jQuery(function($) {
                        var e = $(window).width();
                        $("#icemegamenu").find(".icesubMenu").each(function(a) {
                            var b = $(this).offset();
                            var c = b.left + $(this).width();
                            if (c >= e) {
                                $(this).addClass("ice_righttoleft")
                            }
                        });
                        $(window).resize(function() {
                            var d = $(window).width();
                            $("#icemegamenu").find(".icesubMenu").removeClass("ice_righttoleft").each(function(a) {
                                var b = $(this).offset();
                                var c = b.left + $(this).width();
                                if (c >= d) {
                                    $(this).addClass("ice_righttoleft")
                                }
                            })
                        })
                    });

                    
        
        