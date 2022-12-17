'use strict';
/**
 * @return {?}
 */
function slider() {
  var khover = $(".main-slider");
  var i = $(".nav-slider");
  var $scope = new TimelineLite;
  return {
    isDemoSlide: function () {
      return khover.hasClass("demo-3");
    },
    initSlider: function () {
      var tmp = khover.find(".slide-item");
      var parent = khover.find(".dsn-slider-content > .container");
      var component = this;
      /** @type {!Array} */
      var c = [];
      tmp.each(function (high) {
        var t = $(this);
        t.attr("data-dsn-id", high);
        var task = $(this).find(".slide-content");
        task.attr("data-dsn-id", high);
        if (0 === high) {
          task.addClass("dsn-active dsn-active-cat");
        }
        parent.append(task);
        var documentHeading = task.find(".title a");
        if (!component.isDemoSlide()) {
          c.push(component.nextSlide(documentHeading.text(), task.find(".metas").html(), $(this).find(".image-bg").clone()));
        }
        dsnGrid.convertTextLine(documentHeading, documentHeading);
        /** @type {null} */
        t = task = documentHeading = null;
      });
      if (!component.isDemoSlide()) {
        c.push(c.shift());
        $(".box-next > .swiper-wrapper").append(c);
      }
      /** @type {null} */
      c = component = parent = tmp = null;
    },
    swiperObject: function (selectable) {
      var isHorizontal = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      return new Swiper(".main-slider .slide-inner", {
        speed: 1500,
        grabCursor: true,
        allowTouchMove: true,
        direction: isHorizontal ? "vertical" : "horizontal",
        slidesPerView: selectable ? "auto" : 1,
        centeredSlides: selectable,
        slideToClickedSlide: selectable,
        loop: khover.hasClass("has-loop"),
        pagination: {
          el: ".main-slider .dsn-controls .dsn-numbers span:not(.full-number)",
          type: "custom",
          clickable: true,
          renderCustom: function (destroyable, i, l) {
            return $(".main-slider .dsn-controls .dsn-numbers span.full-number").html(dsnGrid.numberText(l)), TweenLite.to(".main-slider .dsn-controls .dsn-progress .dsn-progress-indicator", 1, {
              height: i / l * 100 + "%"
            }), dsnGrid.numberText(i);
          }
        },
        spaceBetween: 50,
        on: {
          init: function () {
            this.autoplay.stop();
            khover.find('[data-dsn="video"] video').each(function () {
              this.pause();
            });
          },
          imagesReady: function () {
            var e = $(this.slides[this.activeIndex]).find('[data-dsn="video"] video');
            if (e.length) {
              e.get(0).play();
            }
            /** @type {null} */
            e = null;
          }
        }
      });
    },
    progress: function (item) {
      var isVertical = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      item.on("progress", function () {
        var t = this;
        /** @type {number} */
        var i = 0;
        for (; i < t.slides.length; i++) {
          var articleArea = t.slides[i].progress;
          /** @type {number} */
          var MaximumContentImageAreaToArticleAreaRatio = .5 * (isVertical ? t.height : t.width);
          /** @type {number} */
          var maximumImageArea = articleArea * MaximumContentImageAreaToArticleAreaRatio;
          /** @type {string} */
          var axis = isVertical ? "Y" : "X";
          /** @type {string} */
          t.slides[i].querySelector(".image-bg").style.transform = "translate" + axis + "(" + maximumImageArea + "px) skew" + axis + "(" + maximumImageArea / 50 + "deg)";
          /** @type {null} */
          maximumImageArea = axis = MaximumContentImageAreaToArticleAreaRatio = articleArea = null;
        }
        /** @type {null} */
        t = null;
      });
    },
    touchStart: function (subscription) {
      subscription.on("touchStart", function () {
        $(this.slides).css("transition", "");
      });
    },
    setTransition: function (item) {
      item.on("setTransition", function (canCreateDiscussions) {
        $(this.slides).find(".image-bg").css("transition", canCreateDiscussions - 100 + "ms  ");
      });
    },
    slideChange: function (self) {
      var options = this;
      self.on("slideChange", function () {
        var last = khover.find(".dsn-slider-content .dsn-active");
        var e = last.data("dsn-id");
        var h = $(self.slides[self.activeIndex]);
        var b = h.data("dsn-id");
        if (e !== b) {
          khover.find('[data-dsn="video"] video').each(function () {
            this.pause();
          });
          var a = $(this.slides[this.activeIndex]).find('[data-dsn="video"] video');
          if (a.length) {
            a.get(0).play();
          }
          var digitStart = last.find(".dsn-chars-wrapper");
          last.removeClass("dsn-active-cat");
          var $tabSelector = khover.find('.dsn-slider-content [data-dsn-id="' + b + '"]');
          var index = $tabSelector.find(".dsn-chars-wrapper");
          /** @type {boolean} */
          var m = b < e;
          $scope.progress(1);
          ($scope = new TimelineLite).staggerFromTo(digitStart, .3, options.showText().title, options.hideText(m).title, .05, 0, function () {
            khover.find(".dsn-slider-content .slide-content").removeClass("dsn-active").removeClass("dsn-active-cat");
            $tabSelector.addClass("dsn-active");
            $tabSelector.addClass("dsn-active-cat");
          });
          $scope.staggerFromTo(dsnGrid.randomObjectArray(index, .8), .8, options.hideText(!m).title, options.showText().title, .05, "-=.1");
          /** @type {null} */
          last = e = h = b = a = digitStart = index = m = null;
        }
      });
    },
    showText: function () {
      return {
        title: {
          autoAlpha: 1,
          y: "0%",
          scale: 1,
          rotation: 0,
          ease: Back.easeOut.config(4),
          yoyo: true
        },
        subtitle: {
          autoAlpha: 1,
          y: "0%",
          ease: Elastic.easeOut
        }
      };
    },
    hideText: function (first) {
      return {
        title: {
          autoAlpha: 0,
          y: first ? "20%" : "-20%",
          rotation: 8,
          ease: Back.easeIn.config(4),
          yoyo: true
        },
        subtitle: {
          autoAlpha: 0,
          y: first ? "50%" : "-50%",
          ease: Elastic.easeOut
        }
      };
    },
    nextSlide: function (pagination, index, $container) {
      return ' <div class="swiper-slide">\n                    <div class="d-flex a-item-center h-100">\n                        <div class="content-box-next">\n                            <span>Next</span>\n                            <h3 class="title-next">' + pagination + '</h3>\n                            <div class="metas">\n' + index + '                            </div>\n                        </div>\n                        <div class="img-box-next p-relative h-100 overflow-hidden">\n' +
        $container.addClass("p-absolute").removeClass("hidden").get(0).outerHTML + '                            <div class="arrow v-middle">\n                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"\n                                     x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" class="">\n                            <g>\n                                <g>\n                                    <g>\n                                        <path\n                                                d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    "\n                                                data-original="#000000" class="active-path" data-old_color="#000000"\n                                                fill="#FFFFFF"/>\n                                    </g>\n                                </g>\n                            </g>\n                        </svg>\n                            </div>\n                        </div>\n                    </div>\n                </div>';
    },
    run: function () {
      if (!(khover.length <= 0)) {
        var hbar = khover.hasClass("has-horizontal");
        this.initSlider();
        var self = this.swiperObject(this.isDemoSlide(), !hbar);
        if (this.isDemoSlide() || (this.progress(self, !hbar), this.touchStart(self), this.setTransition(self)), this.slideChange(self), this.isDemoSlide() && !khover.hasClass("has-loop") && self.slideTo(1), i.length <= 0 || this.isDemoSlide()) {
          /** @type {null} */
          self = null;
        } else {
          var s = new Swiper(".nav-slider", {
            speed: 1500,
            centeredSlides: true,
            touchRatio: .2,
            slideToClickedSlide: true,
            direction: hbar ? "horizontal" : "vertical",
            resistanceRatio: .65,
            spaceBetween: 10,
            loop: khover.hasClass("has-loop")
          });
          (self.controller.control = s).controller.control = self;
          this.progress(s, !hbar);
          this.setTransition(s);
          i.on("click", function () {
            if (!$scope.isActive()) {
              if (s.slides.length === s.activeIndex + 1) {
                self.slideTo(0);
              } else {
                self.slideNext();
              }
            }
          });
          /** @type {null} */
          i = null;
        }
      }
    }
  };
}
/**
 * @return {undefined}
 */
function data_overlay() {
  $("[data-overlay-color]").each(function (i) {
    var value = $(this);
    var checkBox = dsnGrid.removeAttr(value, "data-overlay-color");
    value.addClass("dsn-overlay-" + i);
    $("body").append("<style>.dsn-overlay-" + i + "[data-overlay]:before{background: " + checkBox + ";}</style>");
  });
}
/**
 * @return {undefined}
 */
function background() {
  $(".cover-bg, section , [data-image-src]").each(function () {
    var value = $(this).attr("data-image-src");
    if ("undefined" !== (void 0 === value ? "undefined" : _typeof(value)) && false !== value) {
      $(this).css("background-image", "url(" + value + ")");
    }
  });
}
/**
 * @return {undefined}
 */
function initMap() {
  toggleButton();
  var o = $(".map-custom");
  if (o.length) {
    if (!$("#map_api").length) {
      /** @type {string} */
      var identityLoginURL = "AIzaSyA5bpEs3xlB8vhxNFErwoo3MXR64uavf6Y";
      /** @type {!Element} */
      var child = document.createElement("script");
      /** @type {string} */
      child.type = "text/javascript";
      /** @type {string} */
      child.id = "map_api";
      /** @type {string} */
      child.src = "https://maps.googleapis.com/maps/api/js?key=" + identityLoginURL;
      document.body.appendChild(child);
      /** @type {null} */
      identityLoginURL = child = null;
    }
    setTimeout(function () {
      try {
        var lat = o.data("dsn-lat");
        var lng = o.data("dsn-len");
        var urlZoom = o.data("dsn-zoom");
        var latLng = new google.maps.LatLng(lat, lng);
        var view = new google.maps.Map(o.get(0), {
          center: {
            lat: lat,
            lng: lng
          },
          mapTypeControl: false,
          scrollwheel: false,
          draggable: true,
          streetViewControl: false,
          navigationControl: false,
          zoom: urlZoom,
          styles: [{
            featureType: "water",
            elementType: "geometry",
            stylers: [{
              color: "#e9e9e9"
            }, {
              lightness: 17
            }]
          }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
              color: "#f5f5f5"
            }, {
              lightness: 20
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 17
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 29
            }, {
              weight: .2
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 18
            }]
          }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 16
            }]
          }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
              color: "#f5f5f5"
            }, {
              lightness: 21
            }]
          }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
              color: "#dedede"
            }, {
              lightness: 21
            }]
          }, {
            elementType: "labels.text.stroke",
            stylers: [{
              visibility: "on"
            }, {
              color: "#ffffff"
            }, {
              lightness: 16
            }]
          }, {
            elementType: "labels.text.fill",
            stylers: [{
              saturation: 36
            }, {
              color: "#333333"
            }, {
              lightness: 40
            }]
          }, {
            elementType: "labels.icon",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
              color: "#f2f2f2"
            }, {
              lightness: 19
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
              color: "#fefefe"
            }, {
              lightness: 20
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#fefefe"
            }, {
              lightness: 17
            }, {
              weight: 1.2
            }]
          }]
        });
        google.maps.event.addDomListener(window, "resize", function () {
          var newCenterCoords = view.getCenter();
          google.maps.event.trigger(view, "resize");
          view.setCenter(newCenterCoords);
          /** @type {null} */
          newCenterCoords = null;
        });
        new google.maps.Marker({
          position: latLng,
          animation: google.maps.Animation.BOUNCE,
          icon: "assets/img/map-marker.png",
          title: "ASL",
          map: view
        });
        /** @type {null} */
        lat = lng = urlZoom = latLng = null;
      } catch (conv_reverse_sort) {
        console.log(conv_reverse_sort);
      }
    }, 100);
  } else {
    /** @type {null} */
    o = null;
  }
}
/**
 * @return {undefined}
 */
function toggleButton() {
  $(".image-head-contact").each(function () {
    var tl = new TimelineLite({
      paused: true
    });
    tl.to($(this).find(".box-overlay"), .5, {
      autoAlpha: 0
    });
    tl.staggerTo($(this).find(".contact-info-item"), .8, {
      y: 20,
      autoAlpha: 0,
      ease: Back.easeInOut.config(4)
    }, .3, 0);
    tl.to($(this).find(".box-text"), .5, {
      autoAlpha: 0
    }, "-=0.5");
    tl.reverse();
    $(this).find('input[type="checkbox"]').off("change");
    $(this).find('input[type="checkbox"]').on("change", function () {
      tl.reversed(!tl.reversed());
    });
  });
}
/**
 * @param {boolean} a22
 * @return {undefined}
 */
function services_tab(a22) {
  if (a22) {
    $(".services-about .link-click").off("click");
  }
  $(".services-about").each(function () {
    var $this = $(this);
    $this.on("click", ".link-click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      $this.find("#" + $(this).attr("id") + "-content").fadeIn(1E3).siblings().hide();
    });
  });
}
/**
 * @return {undefined}
 */
function contactValidator() {
  var form = $("#contact-form");
  if (!(form < 1)) {
    form.validator();
    form.on("submit", function (event) {
      if (!event.isDefaultPrevented()) {
        return $.ajax({
          type: "POST",
          url: "sendMail.php",
          data: $(this).serialize(),
          success: function (object) {
            /** @type {string} */
            var alert_id = "alert-success";
            var message = 'Email has been sent successfully.';
            /** @type {string} */
            var formattedChosenQuestion = '<div class="alert ' + alert_id + ' alert-dismissible" >' +
              '<strong>Success!</strong> ' + message + '</div>';
            if (alert_id && message) {
              form.find(".messages").html(formattedChosenQuestion);
              form[0].reset();
            }
            setTimeout(function () {
              form.find(".messages").html("");
            }, 5000);
          },
          error: function (e) {
            console.log(e);
          }
        }), false;
      }
    });
  }
}
/** @type {function(?): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (boundsMethod) {
  return typeof boundsMethod;
} : function (obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
! function ($) {
  /**
   * @param {boolean} e
   * @return {undefined}
   */
  function init(e) {
    $("[data-dsn-bg]").each(function () {
      var img = dsnGrid.getData(this, "bg");
      var color = dsnGrid.getData(this, "color");
      if (img) {
        $(this).css("background-color", img);
      }
      if (img) {
        $(this).css("color", color);
        $(this).addClass("section-dsn-color");
      }
      /** @type {null} */
      img = null;
    });
    that.start();
    S.allInt();
    slider().run();
    $(".gallery-portfolio").each(function () {
      var $image = $(this);
      $image.justifiedGallery({
        rowHeight: 300,
        margins: 15
      });
      var t = $image.parents(".work-masonry").find(".filterings-t");
      if (t.length) {
        t.find("button").off("click");
        t.find("button").on("click", function () {
          $(this).addClass("active").siblings().removeClass("active");
          var res = $(this).data("filter");
          $image.justifiedGallery({
            filter: function (e, index, localOnly) {
              return $(e).is(res) ? TweenLite.to(e, .6, {
                scale: 1,
                ease: Back.easeOut.config(1.2),
                delay: .1 * index
              }) : TweenLite.to(e, .1, {
                scale: 0,
                ease: Back.easeIn.config(1.2)
              }), $(e).is(res);
            }
          });
          /** @type {null} */
          res = null;
        });
      }
      /** @type {null} */
      t = null;
    });
    magnifPopup();
    (function () {
      var options = {
        delegate: "a:not(.effect-ajax)",
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom",
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 400,
          easing: "cubic-bezier(0.36, 0, 0.66, -0.56)",
          opener: function (openerElement) {
            return openerElement.find("img");
          }
        },
        callbacks: {
          open: function () {
            $("html").css({
              margin: 0
            });
          },
          close: function () {}
        }
      };
      $(".gallery-portfolio").each(function () {
        $(this).magnificPopup(options);
      });
      if ($(".has-popup .pop-up").length) {
        /** @type {string} */
        options.delegate = "a.pop-up";
      }
      $(".has-popup").magnificPopup(options);
    })();
    $("a.vid").YouTubePopUp();
    link().ajaxLoad();
    data_overlay();
    background();
    initMap();
    load(e);
    (function () {
      var s = $(".button-loadmore");
      if (!s.length) {
        return;
      }
      s.off("click");
      s.on("click", function () {
        var page = $(this).attr("data-page");
        var action = $(this).attr("data-layout");
        var label = s.find(".dsn-load-progress-ajax");
        var el = s.find(".progress-text.progress-load-more");
        var container = s.find(".progress-text.progress-no-more");
        var spy = el.text();
        $(this).attr("data-page", parseInt(page, 10) + 1);
        $.ajax({
          url: "ajax/" + action + "-" + page + ".html",
          beforeSend: function () {
            s.addClass("dsn-loading");
          },
          success: function (obj) {
            obj = $(obj).filter(".work-item-box");
            TweenLite.fromTo(obj, 1, {
              autoAlpha: 0,
              scale: 0
            }, {
              autoAlpha: 1,
              scale: 1,
              ease: Back.easeOut.config(1.7)
            });
            s.prev().append(obj);
            s.removeClass("dsn-loading");
            label.css("width", 0);
            s.find(".progress-text.progress-load-more").text(spy);
            container.hide();
            setTimeout(function () {
              S.parallaxImg();
              load(true);
              link().ajaxLoad();
              magnifPopup();
              move(true);
            }, 100);
          },
          error: function (deleted_model) {
            s.removeClass("dsn-loading");
            label.css("width", 0);
            el.text(spy);
            container.hide();
            s.off("click");
            el.hide();
            container.show();
          },
          xhrFields: {
            onprogress: function (event) {
              if (event.lengthComputable) {
                /** @type {number} */
                var x = event.loaded / event.total * 100;
                label.css("width", x + "%");
                el.text(x + "%");
              }
            }
          }
        }).done(function () {
          /** @type {null} */
          page = action = label = el = container = spy = null;
        });
      });
    })();
    interruptingTask.run();
    move(e);
    (function (a22) {
      var t = $(".accordion__question");
      if (!t.length) {
        return t = null;
      }
      if (a22) {
        t.off("click");
      }
      t.on("click", function () {
        var flyout = $(this).next();
        $(".accordion__answer").not(flyout).slideUp(400);
        $(".accordion__question").not(this).removeClass("expanded");
        $(this).toggleClass("expanded");
        flyout.slideToggle(400);
        /** @type {null} */
        flyout = null;
      });
    })(e);
    services_tab(e);
    contactValidator();
    $(".embed-3d-dimensions").on("click", function (canCreateDiscussions) {
      $(this).toggleClass("active-3d-dimensions");
    });
    $('[data-dsn-cutter="html"]').each(function () {
      dsnGrid.getData(this, "cutter");
      dsnGrid.cutterHtml(this);
    });
    $("[data-dsn-position]").each(function () {
      if ("IMG" === this.nodeName) {
        $(this).css("object-position", dsnGrid.getData(this, "position", "center"));
      } else {
        $(this).css("background-position", dsnGrid.getData(this, "position", "center"));
      }
    });
    setTimeout(function () {
      $('a[href="#"]').on("click", function (event) {
        event.preventDefault();
      });
      $('[href*="#"]:not([href="#"])').on("click", function (event) {
        event.preventDefault();
        var t = $($(this).attr("href"));
        if (!t.length) {
          return t = null, false;
        }
        dsnGrid.scrollTop(t.get(0).offsetTop, 1, -100);
        /** @type {null} */
        t = null;
      });
      if (window.location.hash.length) {
        $window.scrollTop(0);
        dsnGrid.scrollTop(window.location.hash, 1, -100);
      }
      S.dsnScrollTop();
      if (e) {
        if (_context4) {
          _context4.t1.kill();
          _context4.t2.kill();
          $(".site-header").css({
            paddingTop: "",
            paddingBottom: "",
            backgroundColor: "",
            top: ""
          });
          _context4 = update();
        }
      } else {
        _context4 = update();
      }
    }, 500);
  }
  /**
   * @param {boolean} width
   * @return {undefined}
   */
  function load(width) {
    var emoteIcon = $(".filterings");
    var e = $(".filters-content");
    var tl = void 0;
    if (width) {
      emoteIcon.off("click");
    }
    emoteIcon.on("click", function () {
      (tl = new TimelineLite).set(e, {
        y: "0%"
      });
      tl.to(e, 1, {
        autoAlpha: 1
      });
      tl.staggerFromTo(e.find("button"), .4, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut.config(1.7)
      }, .1);
      dsnGrid.scrollTop(".work-inner", 1);
    });
    if (width) {
      e.find("> .close-wind").off("click");
    }
    e.find("> .close-wind").on("click", function () {
      tl.reverse();
      tl.call(function () {
        /** @type {null} */
        tl = null;
      });
    });
    if (width) {
      e.find("button").off("click");
    }
    e.find("button").on("click", function () {
      $(this).siblings().removeClass("active");
      TweenMax.to(this, .5, {
        css: {
          className: "+=active"
        },
        ease: Back.easeOut.config(1.7)
      });
      $(".projects-list").isotope({
        filter: $(this).attr("data-filter")
      });
    });
    $(".projects-list , .our-work").find("video").each(function () {
      this.pause();
      var me = $(this);
      if (width) {
        me.off("mouseenter").off("mouseleave");
      }
      me.parents(".work-item").on("mouseenter", function () {
        $(this).find("video").get(0).play();
      }).on("mouseleave", function () {
        $(this).find("video").get(0).pause();
      });
      /** @type {null} */
      me = null;
    });
  }
  /**
   * @return {?}
   */
  function link() {
    /** @type {string} */
    var tmp = "main.main-root";
    /** @type {string} */
    var n = '[data-dsn-ajax="img"]';
    var item = void 0;
    var link = void 0;
    var tl = new TimelineLite;
    return {
      mainRoot: $(tmp),
      ajaxClick: $("a.effect-ajax "),
      effectAjax: function (isIron) {
        if (isIron) {
          node.addClass("dsn-ajax-effect");
        } else {
          if (false !== isIron) {
            return node.hasClass("dsn-ajax-effect");
          }
          node.removeClass("dsn-ajax-effect");
        }
      },
      setTitle: function (text) {
        var textLaterArray = text.match(/<title[^>]*>(.+)<\/title>/);
        if (textLaterArray) {
          $("head title").html(textLaterArray[1]);
        }
        /** @type {null} */
        textLaterArray = null;
      },
      setBodyClass: function (text) {
        var attr = text.match(/<body[^>]*class="(.+)">/);
        if (attr) {
          node.attr("class", attr[1]);
        }
        /** @type {null} */
        attr = null;
      },
      ajaxNormal: function () {
        var temp = $('<div class="dsn-ajax-loader dsn-ajax-normal"></div>');
        node.append(temp);
        tl.to(temp, .5, {
          scaleY: 1,
          ease: Circ.easeIn
        }, 0);
        /** @type {null} */
        temp = null;
      },
      ajaxSlider: function (event) {
        var $memoCell = event.parents(".slide-content");
        var n = $memoCell.data("dsn-id");
        var datasetDetailsRow = $('.main-slider .slide-item[data-dsn-id="' + n + '"] .cover-bg').first();
        var a = $memoCell.find(".title");
        datasetDetailsRow.removeClass("hidden");
        this.dsnCreateElement(datasetDetailsRow, $(".bg-container"), a, a.find("a"));
      },
      ajaxNextProject: function (event) {
        var origin = event.parents(".next-project");
        var pos = origin.find(".img-next-box");
        var i = origin.find(".title");
        origin.addClass("dsn-active");
        this.dsnCreateElement(pos, origin, i, i.find("a"));
        /** @type {null} */
        origin = pos = i = null;
      },
      ajaxWork: function (event) {
        var head = event.parents(".work-item");
        var j = head.find(".img-next-box");
        var r = head.find("h4").addClass("dsn-cutter");
        r.addClass("fw-600");
        j.addClass("before-z-index");
        head.addClass("dsn-active");
        this.dsnCreateElement(j, head, r, r.find("a"));
        tl.to(item.find("img"), 1, {
          height: "100%",
          top: "0%",
          y: "0"
        });
        /** @type {null} */
        head = j = r = null;
      },
      addElement: function (e, p, n) {
        if (!(void 0 === p || p.length <= 0)) {
          if (void 0 === n || n.length <= 0) {
            /** @type {!Array} */
            n = p;
          }
          var element = p.clone();
          var rootClientRect = n[0].getBoundingClientRect();
          return void 0 === rootClientRect && (rootClientRect = {
            left: 0,
            top: 0
          }), element.css({
            position: "absolute",
            display: "block",
            transform: "",
            transition: "",
            objectFit: "cover"
          }), element.css(dsnGrid.getBoundingClientRect(n[0])), e.append(element), element;
        }
      },
      dsnCreateElement: function (index, url, start, span) {
        var el = $('<div class="dsn-ajax-loader"></div>');
        el.css("background-color", node.css("background-color"));
        item = this.addElement(el, index, url);
        if ((link = this.addElement(el, start, span)).hasClass("dsn-cutter")) {
          dsnGrid.convertTextLine(link);
        }
        if (link) {
          link.css("width", "max-content");
          link.css("z-index", 2);
        }
        if (item) {
          item.css("z-index", 1);
        }
        node.append(el);
        tl.to(el, 1, {
          autoAlpha: 1,
          ease: Power4.easeInOut
        });
      },
      completeElement: function (g) {
        var f = $(n);
        var node = $('[data-dsn-ajax="title"]');
        if (f.length || node.length) {
          var targetOffset = (f = f.first()).offset();
          if (void 0 === targetOffset && (targetOffset = {
              top: 0,
              left: 0
            }), item.length && tl.to(item, .8, {
              top: targetOffset.top,
              left: targetOffset.left,
              width: f.width(),
              height: f.height(),
              objectFit: "cover",
              borderRadius: 0
            }), link.length && (void 0 === (targetOffset = (node = node.first()).offset()) && (targetOffset = {
              top: 0,
              left: 0
            }), tl.to(link, .8, {
              top: targetOffset.top,
              left: targetOffset.left
            }, "-=0.8"), tl.to(link, .8, {
              css: {
                className: "+=" + node.attr("class")
              }
            }, "-=0.8"), node.parents(".v-middle-horizontal").length ? link.css("width", "max-content") : link.css("width", node.width()), node.find(".dsn-chars-wrapper").length)) {
            var a = node.find(".dsn-chars-wrapper").css("transform").split(/[()]/)[1];
            if (a) {
              a = a.split(",")[5];
            }
            if (a) {
              tl.staggerTo(dsnGrid.randomObjectArray(link.find(".dsn-chars-wrapper"), .5), .6, {
                force3D: true,
                y: a,
                ease: Back.easeOut.config(1.7)
              }, .04, "-=0.8");
            }
          }
          var data = {
            value: "0%"
          };
          tl.to(data, .5, {
            value: "100%",
            onUpdate: function () {
              g.css("clip-path", "inset(0% 0% " + data.value + " 0%)");
            },
            onComplete: function () {
              /** @type {null} */
              data = null;
            },
            ease: Circ.easeIn
          });
        } else {
          var data = {
            value: "0%"
          };
          tl.to(data, 1, {
            value: "100%",
            onUpdate: function () {
              g.css("clip-path", "inset(0% 0% " + data.value + " 0%)");
            },
            onComplete: function () {
              /** @type {null} */
              data = null;
            },
            ease: Circ.easeIn
          });
        }
      },
      animateAjaxStart: function (_, rm) {
        tl = new TimelineMax;
        if ("slider" === _) {
          this.ajaxSlider(rm);
        } else {
          if ("next" === _) {
            this.ajaxNextProject(rm);
          } else {
            if ("work" === _) {
              this.ajaxWork(rm);
            } else {
              this.ajaxNormal();
            }
          }
        }
        that.locked();
        tl.call(function () {
          dsnGrid.scrollTop(0, .01);
        });
      },
      animateAjaxEnd: function (text) {
        this.setTitle(text);
        this.setBodyClass(text);
        this.mainRoot.html($(text).filter(tmp).html());
        init(true);
        setTimeout(function () {
          var e = $(".dsn-ajax-loader");
          if (e.hasClass("dsn-ajax-normal")) {
            tl.to(e, 1, {
              scaleY: 0
            });
          } else {
            this.completeElement(e);
          }
          tl.call(function () {
            e.remove();
            this.effectAjax(false);
            /** @type {null} */
            tl = n = tmp = null;
          }.bind(this));
        }.bind(this), 100);
      },
      backAnimate: function (loginUrl) {
        if (loginUrl) {
          var options = this;
          $.ajax({
            url: loginUrl,
            dataType: "html",
            beforeSend: options.animateAjaxStart.bind(options),
            success: function (data) {
              tl.call(options.animateAjaxEnd.bind(options, data), null, null, "+=0.2");
            },
            error: function (deleted_model) {
              /** @type {!Object} */
              window.location = loginUrl;
            }
          });
        }
      },
      ajaxLoad: function () {
        if (node.hasClass("dsn-ajax")) {
          var options = this;
          this.ajaxClick.off("click");
          this.ajaxClick.on("click", function (event) {
            event.preventDefault();
            var t = $(this);
            var p = t.attr("href");
            var target = t.data("dsn-ajax");
            if (0 <= p.indexOf("#") || void 0 === p) {
              /** @type {null} */
              t = p = target = null;
            } else {
              if (!options.effectAjax()) {
                options.effectAjax(true);
                $.ajax({
                  url: p,
                  dataType: "html",
                  beforeSend: options.animateAjaxStart.bind(options, target, t),
                  success: function (data) {
                    try {
                      history.pushState(null, "", p);
                      tl.call(options.animateAjaxEnd.bind(options, data), null, null, "+=0.2");
                    } catch (e) {
                      window.location = p;
                    }
                  },
                  error: function (deleted_model) {
                    window.location = p;
                  }
                });
              }
            }
          });
        }
      }
    };
  }
  /**
   * @return {?}
   */
  function update() {
    $(".site-header").removeClass("header-stickytop");
    /** @type {number} */
    var n = 0;
    var box = $(".wrapper").offset();
    var b = $(".header-single-post .containers").offset();
    var width = $(".post-full-content").offset();
    /** @type {number} */
    var v = 0;
    if (void 0 !== b) {
      box = b;
    } else {
      if (box.top <= 70) {
        box = width;
      }
    }
    var timeline = new TimelineMax({
      paused: true
    });
    var tl = new TimelineMax({
      paused: true
    });
    return timeline.to(".header-top .header-container, .site-header ", .5, {
      backgroundColor: "rgba(0,0,0,0.3)",
      paddingTop: 15,
      paddingBottom: 15
    }), timeline.reverse(), tl.to(".header-top .header-container,  .site-header , .dsn-multi-lang", .5, {
      margin: 0,
      backgroundColor: "rgba(0,0,0,0)"
    }), tl.play(), that.getListener(function (e) {
      n = "scroll" === e.type ? $window.scrollTop() : e.offset.y;
      /** @type {number} */
      var hits = 70;
      if (void 0 !== box) {
        /** @type {number} */
        hits = box.top - 100;
      }
      if (hits < n) {
        timeline.play();
        if (v < n) {
          tl.play();
        } else {
          tl.play();
        }
      } else {
        timeline.play();
      }
      v = n;
    }), {
      t1: timeline,
      t2: tl
    };
  }
  /**
   * @return {undefined}
   */
  function magnifPopup() {
    $(".zoom-gallery").magnificPopup({
      delegate: "a:not(.effect-ajax)",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return item.el.attr("title") + ' &middot; <a class="image-source-link" href="' + item.el.attr("data-source") + '" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function (openerElement) {
          return openerElement.find("img");
        }
      }
    });
  }
  /**
   * @param {boolean} width
   * @return {?}
   */
  function move(width) {
    /**
     * @return {undefined}
     */
    function bump() {
      dsnGrid.elementHover(self, "a:not(> img):not(.vid) , .dsn-button-sidebar,  button , .mfp-container", "cursor-scale-full");
      dsnGrid.elementHover(self, ".c-hidden", "no-scale");
      dsnGrid.elementHover(self, ".has-popup a , .work-item-box a:not(.effect-ajax)", "cursor-scale-half cursor-open");
      dsnGrid.elementHover(self, '[data-cursor="close"]', "cursor-scale-full cursor-close");
      dsnGrid.elementHover(self, "a.link-pop ", "cursor-scale-full cursor-view");
      dsnGrid.elementHover(self, ".proj-slider-image > .slick-list ,.our-work .slick-slider > .slick-list, .slider-project-swiper .swiper-wrapper ", "cursor-scale-half cursor-drag cursor-next cursor-prev");
      dsnGrid.elementHover(self, ".main-slider:not(.has-horizontal) .slide-item", "cursor-scale-half cursor-up-down cursor-drag cursor-next cursor-prev");
      dsnGrid.elementHover(self, ".main-slider.has-horizontal .slide-item", "cursor-scale-half cursor-drag cursor-next cursor-prev");
      dsnGrid.elementHover(self, '[data-cursor="next"]', "cursor-scale-half cursor-next");
      dsnGrid.elementHover(self, '[data-cursor="prev"]', "cursor-scale-half cursor-prev");
      dsnGrid.elementHover(self, ".our-work .work-item a ", "no-drag");
      dsnGrid.moveIcon(".img-box-parallax", ".title-popup");
    }
    var self = $(".cursor");
    return dsnGrid.isMobile() || !node.hasClass("dsn-cursor-effect") ? (self.length && (self.css("display", "none"), node.removeClass("dsn-cursor-effect")), void(self = null)) : (true === width ? self.attr("class", "cursor") : dsnGrid.mouseMove(self), void bump());
  }
  var el;
  var container;
  var parent;
  var data;
  var d;
  var c;
  var id;
  var $window = $(window);
  var node = $("body");
  el = $(".preloader");
  container = el.find(".percent");
  parent = el.find(".title .text-fill");
  data = {
    value: 0
  };
  d = el.find(".preloader-bar");
  c = d.find(".preloader-progress");
  id = dsnGrid.pageLoad(0, 100, 1E3, function (left) {
    container.text(left);
    /** @type {number} */
    data.value = left;
    parent.css("clip-path", "inset(" + (100 - left) + "% 0% 0% 0%)");
    c.css("width", left + "%");
  });
  $window.on("load", function () {
    clearInterval(id);
    (new TimelineLite).to(data, 1, {
      value: 100,
      onUpdate: function () {
        container.text(data.value.toFixed(0));
        parent.css("clip-path", "inset(" + (100 - data.value) + "% 0% 0% 0%)");
        c.css("width", data.value + "%");
      }
    }).set(c, {
      backgroundColor: "#090909"
    }).to(d, .5, {
      height: "100%"
    }).to(data, .4, {
      value: 0,
      onUpdate: function () {
        parent.css("clip-path", "inset(" + (100 - data.value) + "% 0% 0% 0%)");
      }
    }, "-=0.4").to(data, .8, {
      value: 100,
      onUpdate: function () {
        el.css("clip-path", "inset(" + data.value + "% 0% 0% 0%)");
      },
      ease: Power2.easeInOut
    }, "+=0.1").call(function () {
      el.remove();
      /** @type {null} */
      id = el = container = parent = data = d = c = null;
    });
  });
  var expectContainerIds;
  var CSS_RESIZE;
  var length;
  var a;
  var result;
  var glyphs;
  var parentDataGridNodes;
  var _context4;
  var that = (expectContainerIds = window.Scrollbar, CSS_RESIZE = "locked-scroll", length = document.querySelector("#dsn-scrollbar"), {
    isScroller: function (element) {
      if (element) {
        /** @type {(Element|null)} */
        length = document.querySelector("#dsn-scrollbar");
      }
      var removeContent = !node.hasClass("dsn-effect-scroll") || dsnGrid.isMobile() || null === length;
      return removeContent && element && node.addClass("dsn-mobile"), !removeContent;
    },
    locked: function () {
      if (node.addClass(CSS_RESIZE), this.isScroller()) {
        var barMenuParentTop = this.getScrollbar();
        if (void 0 !== barMenuParentTop) {
          barMenuParentTop.destroy();
        }
        /** @type {null} */
        barMenuParentTop = null;
      }
    },
    getScrollbar: function (id) {
      return void 0 === id ? expectContainerIds.get(length) : expectContainerIds.get(document.querySelector(id));
    },
    getListener: function (listener) {
      var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      if (void 0 !== listener) {
        var scroller = this;
        if (scroller.isScroller()) {
          scroller.getScrollbar().addListener(listener);
        } else {
          if (t) {
            $window.on("scroll", listener);
          }
        }
        /** @type {null} */
        scroller = null;
      }
    },
    scrollNavigate: function () {
      var offset = $(".wrapper").offset();
      offset = offset ? offset.top : 0;
      $(".scroll-top , .scroll-to-top").on("click", function () {
        dsnGrid.scrollTop(0, 2);
      });
      $(".scroll-d").on("click", function () {
        dsnGrid.scrollTop(offset, 2, -1 * $(".scrollmagic-pin-spacer").height() - 200 || -200);
      });
    },
    start: function () {
      node.removeClass(CSS_RESIZE);
      dsnGrid.scrollTop(0, 1);
      if (this.isScroller(true)) {
        expectContainerIds.init(length, {
          damping: .05
        });
      }
    }
  });
  var S = (a = new ScrollMagic.Controller, result = [], {
    clearControl: function () {
      a.destroy(true);
      a = new ScrollMagic.Controller;
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var t = false;
      var n = void 0;
      try {
        var $__6;
        var _iterator3 = result[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = $__6.value;
          item.destroy(true);
          /** @type {null} */
          item = null;
        }
      } catch (numInternals) {
        /** @type {boolean} */
        t = true;
        n = numInternals;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (t) {
            throw n;
          }
        }
      }
      /** @type {!Array} */
      result = [];
    },
    headerPages: function () {
      /** @type {string} */
      var i = '[data-dsn-header="parallax"]';
      if ($(i).length <= 0) {
        return false;
      }
      var e = $("#dsn-hero-parallax-img");
      var imageContainer = $("#dsn-hero-parallax-title");
      var nextImage = $(i).find('a[target="_blank"] , .scroll-d');
      var tl = new TimelineLite;
      if (0 < e.length) {
        tl.to(e, 1, {
          y: "30%",
          scale: 1
        }, 0);
      }
      if (0 < imageContainer.length) {
        tl.to(imageContainer, .8, {
          force3D: true,
          y: "100%",
          autoAlpha: 0,
          scale: e.hasClass("header-scale-hero") ? .9 : e.hasClass("header-no-scale-hero") ? 1 : 1.08
        }, 0);
      }
      if (0 < nextImage.length) {
        tl.to(nextImage, .8, {
          force3D: true,
          y: 60,
          autoAlpha: 0
        }, 0);
      }
      var subscription = dsnGrid.tweenMaxParallax(that, a).addParrlax({
        id: i,
        triggerHook: 0,
        tween: tl
      });
      var video = e.find("video");
      if (video.length) {
        subscription.on("enter", function () {
          if (video.length) {
            video.get(0).play();
          }
        });
        subscription.on("leave", function () {
          if (video.length) {
            video.get(0).pause();
          }
        });
        $(i).find(".icon-sound").on("click", function (event) {
          event.stopPropagation();
          if ($(this).hasClass("sound-no-mute")) {
            /** @type {boolean} */
            video.get(0).muted = true;
            TweenMax.to($(this).find("svg"), .8, {
              x: 4
            });
            TweenMax.staggerTo($(this).find(".wave-line"), .8, {
              autoAlpha: 0
            }, .2);
          } else {
            /** @type {boolean} */
            video.get(0).muted = false;
            TweenMax.to($(this).find("svg"), .8, {
              x: 0
            });
            TweenMax.staggerTo($(this).find(".wave-line"), .8, {
              autoAlpha: 1
            }, .2);
          }
          $(this).toggleClass("sound-no-mute");
        });
      } else {
        /** @type {null} */
        video = null;
      }
      if (subscription) {
        result.push(subscription);
      }
      /** @type {null} */
      i = tl = subscription = null;
    },
    parallaxImgHover: function () {
      var e = $('[data-dsn="parallax"]');
      if (e.length <= 0 || dsnGrid.isMobile()) {
        /** @type {null} */
        e = null;
      } else {
        e.each(function () {
          var i = $(this);
          var _j = (dsnGrid.removeAttr(i, "data-dsn"), dsnGrid.getData(i, "speed", .5));
          var board = dsnGrid.getData(i, "move", 20);
          dsnGrid.parallaxMoveElement(i, board, _j, i.find(".dsn-parallax-rev").get(0), i.hasClass("image-zoom"));
          /** @type {null} */
          i = _j = board = null;
        });
      }
    },
    headerProject: function () {
      /** @type {string} */
      var e = '[data-dsn-header="project"]';
      if ($(e).length <= 0 || $(e).hasClass("dsn-end-animate")) {
        return e = null, false;
      }
      var x = $("#dsn-hero-parallax-img");
      var j = $("#dsn-hero-title");
      var i = $("#dsn-hero-description");
      var t = $("#dsn-hero-desc-items");
      var s = t.find(".descrption-item");
      var pe = $(e).find(".scroll-d img");
      var timeline = new TimelineLite;
      if (0 < x.length && !dsnGrid.isMobile()) {
        timeline.to(x, 2, {
          width: "30%",
          left: "70%"
        });
      }
      if (j.length) {
        dsnGrid.convertTextLine(j.find(".title"));
        if (i.length) {
          TweenLite.set(j.find(".dsn-chars-wrapper , .metas"), {
            y: "+=" + i.height()
          });
        }
        if (t.length) {
          TweenLite.set(j.find(".dsn-chars-wrapper , .metas"), {
            y: "+=" + (t.height() - 30)
          });
        }
        timeline.to(j.find(".metas"), 1, {
          force3D: true,
          y: "0",
          ease: Back.easeOut.config(1.7)
        }, 0);
        timeline.staggerTo(dsnGrid.randomObjectArray(j.find(".dsn-chars-wrapper"), .8), 1.5, {
          force3D: true,
          y: "0",
          ease: Back.easeOut.config(1.7)
        }, .1, 0);
      }
      if (i.length) {
        timeline.fromTo(i, .8, {
          y: "15%",
          autoAlpha: 0
        }, {
          y: "0%",
          autoAlpha: 1
        });
      }
      if (t.length) {
        timeline.fromTo(t, .3, {
          y: "15%",
          autoAlpha: 0
        }, {
          y: "0%",
          autoAlpha: 1
        });
      }
      if (s.length) {
        timeline.staggerFromTo(s, 1, {
          y: "15%",
          autoAlpha: 0
        }, {
          y: "0%",
          autoAlpha: 1
        }, .2);
      }
      var area = dsnGrid.tweenMaxParallax(that, a).addParrlax({
        id: e,
        triggerHook: 0,
        duration: 2100,
        tween: timeline,
        _fixed: true
      });
      if (pe.length) {
        area.on("progress", function (_input) {
          TweenLite.to($('[data-dsn-header="project"]').find(".scroll-d img"), .3, {
            rotation: 500 * _input.progress
          });
        });
      }
      if (area) {
        result.push(area);
      }
      /** @type {null} */
      e = pe = pe = timeline = area = x = s = t = i = j = null;
    },
    nextProject: function () {
      var e = $('[data-dsn-footer="project"]');
      if (!e.length) {
        return false;
      }
      var items = $("#dsn-footer-title");
      var pictureContainer = e.find(".img-box-shadow");
      var tl = new TimelineLite;
      if (pictureContainer.length) {
        var data = {
          value: "20%"
        };
        tl.to(data, 2, {
          value: "75%",
          onUpdate: function () {
            pictureContainer.css("background-image", "linear-gradient(to left, #000 " + data.value + ", rgba(0, 0, 0, 0.26) 100%)");
          }
        }, 0);
      }
      if (items.length) {
        dsnGrid.convertTextLine(items);
        TweenLite.set(items.find(".dsn-chars-wrapper"), {
          y: 50,
          autoAlpha: 0
        });
        tl.staggerTo(dsnGrid.randomObjectArray(items.find(".dsn-chars-wrapper"), .8), 1, {
          force3D: true,
          y: "0",
          autoAlpha: 1,
          ease: Back.easeOut.config(1.7)
        }, .1, 0);
      }
      var record = dsnGrid.tweenMaxParallax(that, a).addParrlax({
        id: e,
        triggerHook: .7,
        duration: e.height() + 33,
        tween: tl
      });
      if (record) {
        result.push(record);
      }
      /** @type {null} */
      tl = record = items = null;
    },
    animateFade: function () {
      var $elem = $('[data-dsn-animate="section"]');
      dsnGrid.getData($elem, "animate");
      $elem.each(function () {
        var e = new ScrollMagic.Controller;
        var timeline = new TimelineLite({
          paused: true
        });
        var j = $(this);
        var i = j.find(".dsn-up");
        var l = j.find(".dsn-text");
        j.addClass("transform-3d overflow-hidden");
        if (j.hasClass("dsn-animate")) {
          timeline.fromTo(this, 1, {
            y: 50,
            opacity: 0
          }, {
            y: 0,
            opacity: 1
          });
        }
        if (l.length) {
          l.each(function () {
            dsnGrid.convertTextLine(this, this);
            $(this).addClass("overflow-hidden");
            timeline.staggerFromTo($(this).find(".dsn-word-wrapper"), .6, {
              willChange: "transform",
              transformOrigin: "0 100%",
              x: 8,
              y: 13,
              rotation: 20,
              opacity: 0
            }, {
              x: 0,
              y: 0,
              rotation: 0,
              opacity: 1,
              ease: Back.easeOut.config(2)
            }, .1);
          });
        }
        if (i.length) {
          timeline.staggerFromTo(i, .8, {
            y: 20,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            delay: j.hasClass("dsn-animate") ? .5 : 0,
            ease: Back.easeOut.config(1.7)
          }, .2, 0);
        }
        /** @type {number} */
        timeline._totalDuration = 1;
        dsnGrid.tweenMaxParallax(that, e).addParrlax({
          id: this,
          reverse: false,
          triggerHook: .5,
          duration: 0,
          tween: timeline
        });
        /** @type {null} */
        e = timeline = j = i = l = null;
      });
      /** @type {null} */
      $elem = null;
    },
    animateSkills: function () {
      var thread_rows = $(".skills-personal");
      thread_rows.each(function () {
        var t0 = new ScrollMagic.Controller;
        var tl = new TimelineLite({
          paused: true
        });
        var $imagesToLoad = $(this).find(".skills-item .fill");
        if ($imagesToLoad.length) {
          $imagesToLoad.each(function (stagger) {
            var e = $(this);
            tl.to(e, 1, {
              width: e.data("width"),
              ease: Power0.easeNone,
              onUpdate: function () {
                e.find(".number").text((e.width() / e.parent().width() * 100).toFixed(0) + "%");
              },
              onComplete: function () {
                /** @type {null} */
                e = null;
              }
            }, .2 * stagger);
          });
          /** @type {number} */
          tl._totalDuration = 1;
        }
        dsnGrid.tweenMaxParallax(that, t0).addParrlax({
          id: this,
          reverse: false,
          triggerHook: .5,
          duration: 0,
          tween: tl
        });
        /** @type {null} */
        t0 = tl = null;
      });
      /** @type {null} */
      thread_rows = null;
    },
    animateNumbers: function () {
      var thread_rows = $(".have-dsn-animate-number");
      thread_rows.each(function () {
        var $imagesToLoad = $(this).find(".has-animate-number");
        if ($imagesToLoad.length) {
          var tl = new TimelineLite({
            paused: true
          });
          $imagesToLoad.each(function (stagger) {
            var message = $(this);
            var data = {
              value: 0
            };
            tl.to(data, 4, {
              value: message.text(),
              ease: Back.easeOut.config(1.2),
              onUpdate: function () {
                message.text(dsnGrid.numberText(data.value.toFixed(0)));
              },
              onComplete: function () {
                /** @type {null} */
                message = data = null;
              }
            }, .2 * stagger);
          });
          /** @type {number} */
          tl._totalDuration = 1;
          dsnGrid.tweenMaxParallax(that, new ScrollMagic.Controller).addParrlax({
            id: this,
            reverse: false,
            triggerHook: .5,
            duration: 0,
            tween: tl
          });
          /** @type {null} */
          tl = null;
        } else {
          /** @type {null} */
          $imagesToLoad = null;
        }
      });
      /** @type {null} */
      thread_rows = null;
    },
    sectionWork: function () {
      var query = $('.work-container[data-dsn-animate="work"]');
      var options = query.find(".d-block");
      var p = options.find(".work-item");
      if (options.length) {
        /** @type {number} */
        var x = $window.width() / 2.5;
        if (dsnGrid.isMobile() && $window.width() < 768 && 576 <= $window.width()) {
          /** @type {number} */
          x = $window.width() / 1.5;
        } else {
          if (dsnGrid.isMobile() && $window.width() < 576) {
            /** @type {number} */
            x = $window.width() / 1.15;
          }
        }
        p.each(function () {
          $(this).css({
            width: x,
            float: "left",
            minHeight: 1
          });
        });
        options.css("width", x * p.length);
        /** @type {null} */
        x = null;
        var globalnewline = dsnGrid.tweenMaxParallax(that, a).addParrlax({
          id: query,
          triggerHook: 0,
          _fixed: true,
          duration: 350 * p.length,
          refreshParallax: true,
          tween: TweenLite.to(options, .5, {
            force3D: true,
            x: -1 * (p.last().offset().left - 1.5 * p.last().width()),
            ease: Linear.easeNone
          })
        });
        if (globalnewline) {
          result.push(globalnewline);
        }
        /** @type {null} */
        globalnewline = null;
      }
      /** @type {null} */
      query = options = p = null;
    },
    parallaxImg: function () {
      var ease = Linear.easeNone;
      /** @type {number} */
      var tween_duration = .01;
      $('[data-dsn-grid="move-up"]').each(function (canCreateDiscussions) {
        var current = $(this);
        current.attr("data-dsn-grid", "moveUp");
        var element = current.find("img:not(.hidden) , video");
        var self = dsnGrid.getData(this, "triggerhook", 1);
        var ret = dsnGrid.getData(this, "duration", "200%");
        var gradient = dsnGrid.getData(this, "top");
        if (0 < element.length) {
          if (gradient) {
            element.css("top", gradient);
          }
          var tween = void 0;
          var key = dsnGrid.getData(element, "y", element.hasClass("has-opposite-direction") ? "-20%" : "30%");
          var opts = {
            y: key,
            skewX: 0,
            ease: ease,
            scale: 1
          };
          if (!element.hasClass("has-top-bottom")) {
            opts.scale = dsnGrid.getData(element, "scale", 1.1);
          }
          tween = TweenMax.to(element, tween_duration, opts);
          element.css("perspective", 1E3 < current.width() ? 1E3 : current.width());
          var globalnewline = dsnGrid.tweenMaxParallax(that, a).addParrlax({
            id: this,
            triggerHook: self,
            duration: ret,
            tween: tween
          });
          if (globalnewline) {
            result.push(globalnewline);
          }
          /** @type {null} */
          globalnewline = tween = key = ret = self = element = current = opts = null;
        }
      });
      /** @type {null} */
      ease = tween_duration = null;
    },
    dsnScrollTop: function () {
      var items = $(".wrapper");
      if (items.length && $(".scroll-to-top").length) {
        TweenLite.to(".scroll-to-top", 1, {
          right: -100,
          autoAlpha: 0
        });
        TweenLite.to(".stories-sticky-footer", 1, {
          autoAlpha: 0
        });
        var record = dsnGrid.tweenMaxParallax(that, a).addParrlax({
          id: items,
          triggerHook: .5,
          duration: items.height() - .5 * $window.height() + ($(".next-project").outerHeight() || 0),
          tween: TweenLite.to(".scroll-to-top > img", .3, {
            rotation: items.height() / 2
          })
        });
        record.on("progress", function (_input) {
          $(".scroll-to-top .box-numper span").text((100 * _input.progress).toFixed(0) + "%");
        });
        record.on("enter", function (canCreateDiscussions) {
          TweenLite.to(".scroll-to-top", 1, {
            right: 20,
            autoAlpha: 1
          });
          TweenLite.to(".stories-sticky-footer", 1, {
            autoAlpha: 1
          });
        });
        record.on("leave", function (canCreateDiscussions) {
          TweenLite.to(".scroll-to-top", 1, {
            right: -100,
            autoAlpha: 0
          });
          TweenLite.to(".stories-sticky-footer", 1, {
            autoAlpha: 0
          });
        });
        if (record) {
          result.push(record);
        }
        /** @type {null} */
        record = items = null;
      } else {
        /** @type {null} */
        items = null;
      }
    },
    moveSection: function () {
      var e = $('[data-dsn-grid="move-section"]');
      var ei = Linear.easeNone;
      /** @type {number} */
      var startDuration = .01;
      e.each(function () {
        var el = $(this);
        if (el.removeAttr("data-dsn-grid"), el.addClass("dsn-move-section"), !("tablet" === el.data("dsn-responsive") && $window.width() < 992)) {
          var spy = dsnGrid.getData(el, "move", -100);
          var ctrl = dsnGrid.getData(el, "triggerhook", 1);
          var property = dsnGrid.getData(el, "opacity", el.css("opacity"));
          var duration = dsnGrid.getData(el, "duration", "150%");
          var globalnewline = dsnGrid.tweenMaxParallax(that, a).addParrlax({
            id: this,
            triggerHook: ctrl,
            duration: duration,
            tween: TweenMax.to(el, startDuration, {
              y: spy,
              autoAlpha: property,
              ease: ei
            })
          });
          result.push(globalnewline);
          /** @type {null} */
          el = spy = ctrl = property = duration = null;
        }
      });
      /** @type {null} */
      e = ei = startDuration = null;
    },
    changeColor: function () {
      $('[data-dsn="color"]').each(function () {
        var duration = dsnGrid.getData(this, "duration", $(this).outerHeight() + 50);
        var subscription = (new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: .05,
          duration: duration
        })).addTo(a);
        subscription.on("enter", function () {
          node.toggleClass("v-light");
        });
        subscription.on("leave", function () {
          node.toggleClass("v-light");
        });
        if (subscription) {
          result.push(subscription);
        }
      });
    },
    allInt: function () {
      this.clearControl();
      this.headerProject();
      this.nextProject();
      this.changeColor();
      this.headerPages();
      if (true === result) {
        this.animateFade();
      }
      this.animateSkills();
      this.animateNumbers();
      this.sectionWork();
      this.parallaxImg();
      this.parallaxImgHover();
      this.moveSection();
      that.scrollNavigate();
      that.getListener(function () {
        /** @type {boolean} */
        var _iteratorNormalCompletion3 = true;
        /** @type {boolean} */
        var t = false;
        var n = void 0;
        try {
          var item;
          var _iterator3 = result[Symbol.iterator]();
          for (; !(_iteratorNormalCompletion3 = (item = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            item.value.refresh();
          }
        } catch (numInternals) {
          /** @type {boolean} */
          t = true;
          n = numInternals;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (t) {
              throw n;
            }
          }
        }
      });
    }
  });
  var interruptingTask = (glyphs = [], parentDataGridNodes = [], {
    destory: function () {
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var t = false;
      var n = void 0;
      try {
        var $__1;
        var _iterator3 = parentDataGridNodes[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = ($__1 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var element = $__1.value;
          element.slick("unslick");
          /** @type {null} */
          element = null;
        }
      } catch (numInternals) {
        /** @type {boolean} */
        t = true;
        n = numInternals;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (t) {
            throw n;
          }
        }
      }
      /** @type {boolean} */
      var _iteratorNormalCompletion4 = true;
      /** @type {boolean} */
      var r = false;
      var l = void 0;
      try {
        var $__6;
        var _iterator4 = glyphs[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion4 = ($__6 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = $__6.value;
          item.destroy();
          /** @type {null} */
          item = null;
        }
      } catch (lightThemeBackground) {
        /** @type {boolean} */
        r = true;
        l = lightThemeBackground;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (r) {
            throw l;
          }
        }
      }
      /** @type {!Array} */
      glyphs = [];
      /** @type {!Array} */
      parentDataGridNodes = [];
    },
    bySwiper: function (entity, fullscreen_container_id) {
      dsnGrid.convertToJQuery(entity).each(function () {
        var s = new Swiper($(this).find(".swiper-container"), {
          slidesPerView: "auto",
          spaceBetween: 80,
          allowTouchMove: true,
          grabCursor: true,
          resistanceRatio: .65,
          watchSlidesProgress: true,
          slidesPerViewFit: false,
          roundLengths: "false",
          speed: 1E3,
          navigation: {
            nextEl: $(this).find('[data-cursor="next"]'),
            prevEl: $(this).find('[data-cursor="prev"]')
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
        glyphs.push(s);
        /** @type {null} */
        s = null;
      });
    },
    bySlick: function (toolbar_div, config) {
      dsnGrid.convertToJQuery(toolbar_div).each(function () {
        config = $.extend(true, {
          speed: 700,
          prevArrow: '<div data-cursor="prev"></div>',
          nextArrow: '<div data-cursor="next"></div>',
          responsive: [{
            breakpoint: 992,
            settings: {
              dots: !$(this).hasClass("dsn-not-dot")
            }
          }]
        }, config || {});
        if ($(this).hasClass("dsn-is-not-fade")) {
          /** @type {boolean} */
          config.fade = false;
        }
        var currentDataGridNode = $(this).slick(config);
        parentDataGridNodes.push(currentDataGridNode);
        /** @type {null} */
        currentDataGridNode = config = null;
      });
    },
    run: function () {
      this.destory();
      this.bySwiper(".slider-project-swiper");
      this.bySlick(".proj-slider-image");
      this.bySlick('[data-dsn-col="3"]:not(.dsn-not-dot) .slick-slider', {
        infinite: true,
        slidesToShow: 3,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }]
      });
      this.bySlick('[data-dsn-col="3"].dsn-not-dot .slick-slider', {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2E3,
        slidesToShow: 3,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        }, {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }]
      });
      this.bySlick(".testimonials-main-content", {
        slidesToShow: 1,
        asNavFor: ".testimonials-nav",
        loop: true,
        autoplay: false,
        centerMode: true,
        infinite: true,
        speed: 700,
        adaptiveHeight: true,
        fade: true,
        cssEase: "cubic-bezier(.9, .03, .41, .49)",
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>'
      });
      this.bySlick(".testimonials-nav", {
        slidesToShow: 3,
        asNavFor: ".testimonials-main-content",
        vertical: true,
        focusOnSelect: true,
        loop: true,
        autoplay: false,
        arrows: false,
        centerMode: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            vertical: false,
            centerMode: false,
            dots: false
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            vertical: false,
            centerMode: false
          }
        }, {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            vertical: true,
            centerMode: false
          }
        }]
      });
      this.bySlick(".testimonials-slider", {
        ariableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
      });
      this.bySlick('[data-dsn-col="1"] .slick-slider', {
        infinite: true,
        slidesToShow: 1
      });
      this.bySlick('[data-dsn-col="2"] .slick-slider', {
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        responsive: [{
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
      this.bySlick('[data-dsn-col="5"] .slick-slider', {
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        responsive: [{
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });
    }
  });
  $window.on("load", function () {
    var $institution;
    ($institution = $(".site-header"), {
      lineActive: function () {
        var areaSatBrightness = $institution.find("ul.extend-container > li.dsn-active");
        if (areaSatBrightness.length) {
          this.setLine(areaSatBrightness.offset().left);
        }
        /** @type {null} */
        areaSatBrightness = null;
      },
      lineMove: function () {
        var that = this;
        $institution.find("ul.extend-container > li").off("mouseenter");
        $institution.find("ul.extend-container > li").on("mouseenter", function () {
          if (!node.hasClass("hamburger-menu")) {
            var t = $(this);
            var b = t.find(" > ul");
            if (b.length) {
              that.setLine(b.offset().left, 65, b.width(), t.offset().left);
            } else {
              that.setLine($(this).offset().left);
            }
            /** @type {null} */
            b = t = null;
          }
        });
        $institution.find("ul.extend-container").off("mouseleave");
        $institution.find("ul.extend-container").on("mouseleave", function () {
          that.lineActive();
        });
      },
      setLine: function (x1) {
        var tabPadding = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 65;
        var neededWidth = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
        var l = arguments[3];
        TweenMax.to(".nav-border-bottom", .3, {
          left: x1,
          top: tabPadding,
          width: neededWidth,
          onComplete: function () {
            $(".nav-border-bottom").css({
              left: l || x1,
              width: 25
            });
          }
        });
      },
      cutterText: function () {
        var items = $institution.find(".menu-icon .text-menu");
        if (!(items.length <= 0)) {
          var i = items.find(".text-button");
          var _i = items.find(".text-open");
          var _ref = items.find(".text-close");
          dsnGrid.convertTextLine(i, i);
          dsnGrid.convertTextLine(_i, _i);
          dsnGrid.convertTextLine(_ref, _ref);
          /** @type {null} */
          items = i = _i = _ref = null;
        }
      },
      hamburgerOpen: function () {
        var temp = $institution.find(".menu-icon");
        var target = $institution.find(".main-navigation");
        var tl = new TimelineMax({
          paused: true,
          onReverseComplete: function () {
            setTimeout(function () {
              temp.find(".icon-top , .icon-bottom").css("transform", "").css("display", "");
            }, 50);
          }
        });
        var timeline = new TimelineMax;
        var ease = Power3.easeOut;
        tl.set(temp.find(".icon-center"), {
          display: "none"
        });
        tl.to(temp.find(".icon-top"), .5, {
          width: 23,
          rotation: 45,
          top: 6,
          ease: ease
        });
        tl.to(temp.find(".icon-bottom"), .5, {
          width: 23,
          rotation: -45,
          top: -5,
          ease: ease
        }, 0);
        tl.to(temp, .01, {
          css: {
            className: "+=nav-active"
          }
        }, 0);
        tl.to(node, .01, {
          css: {
            className: "+=over-hidden"
          }
        }, 0);
        tl.to(target, .5, {
          y: "0%",
          autoAlpha: 1,
          ease: ease
        }, 0);
        tl.fromTo(target, .5, {
          y: "-100%",
          autoAlpha: 0
        }, {
          y: "0%",
          autoAlpha: 1,
          ease: Expo.easeInOut
        }, 0);
        tl.staggerTo(target.find("ul.extend-container > li > a .dsn-title-menu"), .5, {
          autoAlpha: 1,
          y: 0,
          ease: Back.easeOut.config(1.7)
        }, .1);
        tl.to(target.find("ul.extend-container > li > a .dsn-meta-menu"), .5, {
          autoAlpha: 1,
          ease: ease
        });
        tl.to(target.find(".container-content"), 1, {
          autoAlpha: 1
        }, "-=1");
        tl.reverse();
        target.find("ul.extend-container > li.dsn-drop-down").on("click", function (event) {
          event.stopPropagation();
          if (!(0 < timeline._totalDuration)) {
            (timeline = new TimelineMax({
              onReverseComplete: function () {
                timeline = new TimelineMax;
              }
            })).set($(this).find("ul"), {
              display: "flex"
            });
            timeline.staggerTo(target.find("ul.extend-container > li > a .dsn-title-menu"), .5, {
              y: -30,
              autoAlpha: 0,
              ease: Back.easeIn.config(1.7)
            }, .1);
            timeline.to(target.find("ul.extend-container > li > a .dsn-meta-menu"), .5, {
              autoAlpha: 0
            }, .5);
            timeline.staggerFromTo($(this).find("ul li"), .5, {
              x: 50,
              autoAlpha: 0
            }, {
              x: 0,
              autoAlpha: 1,
              ease: Back.easeOut.config(1.7)
            }, .1);
          }
        });
        temp.off("click");
        temp.on("click", function () {
          timeline.reverse(-1);
          tl.reversed(!tl.reversed());
          timeline = new TimelineMax;
        });
        var emoteIcon = $(".dsn-back-menu");
        emoteIcon.off("click");
        emoteIcon.on("click", function () {
          timeline.reverse();
        });
        /** @type {null} */
        emoteIcon = null;
      },
      init: function () {
        if ($institution.length) {
          this.cutterText();
          if (991 < $window.width() && node.hasClass("classic-menu")) {
            $institution.find("ul.extend-container > li").off("mouseenter");
            $institution.find("ul.extend-container").off("mouseleave");
            this.lineMove();
            setTimeout(this.lineActive.bind(this), 500);
          }
          this.hamburgerOpen();
        }
      }
    }).init();
    dsnGrid.removeWhiteSpace(".site-header ul.extend-container li > a");
    $window.on("popstate", function (canCreateDiscussions) {
      if (window.location.hash.length) {
        return $window.scrollTop(0), void dsnGrid.scrollTop(window.location.hash, 1, -100);
      }
      if (!(-1 < document.location.href.indexOf("#"))) {
        setTimeout(function () {
          link().backAnimate(document.location);
        }, 100);
      }
    });
    init();
    $(".day-night").on("click", function () {
      node.toggleClass("v-light");
    });
  });
}(jQuery);
