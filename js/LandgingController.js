var LandgingController,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

LandgingController = (function() {
  function LandgingController() {
    this.trysubmit = __bind(this.trysubmit, this);
    this.formSend = __bind(this.formSend, this);
    this.submit = __bind(this.submit, this);
    this.selectLanguage = __bind(this.selectLanguage, this);
    this.timerUpdate = __bind(this.timerUpdate, this);
    this.closeRules = __bind(this.closeRules, this);
    this.showRules = __bind(this.showRules, this);
    this.ip2Country = __bind(this.ip2Country, this);
    this.itype = 'click';
    this.html = $('html');
    if (this.html.hasClass('touch')) {
      this.itype = 'touchstart';
    }
    this.form = $('.register-form');
    this.timer = $('.time');
    this.ti = 0;
    window.setInterval(this.timerUpdate, 1000);
    this.timerUpdate();
    this.form.find('input.tel').mask("(999) 999-99-99");
    this.form.find('input.code').mask("+9?999");
    $('.rules .close').on(this.itype, this.closeRules);
    $('.show-rules').on(this.itype, this.showRules);
    this.message = this.form.prev();
    this.lang = $('nav.language');
    this.lang.on(this.itype, this.selectLanguage);
    this.lang.find('a').on(this.itype, this.selectLanguage);
    this.form.find('button').on(this.itype, this.trysubmit);
    this.form.on('submit', this.submit);
    this.language = localStorage.language || null;
    if (this.language === null) {
      $.getJSON("http://www.telize.com/geoip", this.ip2Country);
    } else if (this.language === 'AZ') {
      this.lang.find('a').trigger('click');
    }
  }

  LandgingController.prototype.ip2Country = function(obj) {
    switch (obj.country_code) {
      case 'AZ':
        this.language = 'AZ';
        this.lang.find('a').trigger('click');
        break;
      default:
        this.language = 'RU';
    }
    return localStorage.language = this.language;
  };

  LandgingController.prototype.showRules = function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.gesture) {
      event.gesture.stopPropagation();
      event.gesture.preventDefault();
    }
    this.html.addClass('rules');
    $(event.currentTarget).closest('.page').find('.rules').show();
    window.scrollTo(0, 0);
    return false;
  };

  LandgingController.prototype.closeRules = function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.gesture) {
      event.gesture.stopPropagation();
      event.gesture.preventDefault();
    }
    this.html.removeClass('rules');
    $(event.currentTarget.parentNode).hide();
    window.scrollTo(0, 0);
    return false;
  };

  LandgingController.prototype.timerUpdate = function() {
    var sepator;
    if ((this.ti % 2) === 0) {
      sepator = ":";
    } else {
      sepator = " ";
    }
    this.ti++;
    return this.timer.text(moment().format("HH" + sepator + "mm"));
  };

  LandgingController.prototype.selectLanguage = function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.gesture) {
      event.gesture.stopPropagation();
      event.gesture.preventDefault();
    }
    this.lang.find('a').toggleClass('selected');
    this.language = this.lang.find('.selected').attr('data-lang');
    localStorage.language = this.language;
    this.html.attr('lang', this.language);
    return false;
  };

  LandgingController.prototype.submit = function(event) {
    var form;
    event.preventDefault();
    event.stopPropagation();
    if (event.gesture) {
      event.gesture.stopPropagation();
      event.gesture.preventDefault();
    }
    form = $(event.currentTarget);
    console.log(form);
    console.log(form.willValidate);
    console.log(form.valid);
    $.post(form.attr('action'), form.serialize()).complete(this.formSend);
    return false;
  };

  LandgingController.prototype.formSend = function(responce) {
    this.form.hide();
    return this.message.show();
  };

  LandgingController.prototype.trysubmit = function(event) {
    var button, form;
    button = $(event.currentTarget);
    form = button.closest('form.register-form');
    return form.addClass('validation-start');
  };

  return LandgingController;

})();

$(document).ready(function() {
  return new LandgingController();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmRnaW5nQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxrQkFBQTtFQUFBLGtGQUFBOztBQUFBO0FBQ2UsRUFBQSw0QkFBQSxHQUFBO0FBQ1gsaURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSwyQ0FBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLG1EQUFBLENBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsT0FBVCxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsQ0FBRSxNQUFGLENBRFIsQ0FBQTtBQUVBLElBQUEsSUFBRyxJQUFDLENBQUEsSUFBSSxDQUFDLFFBQU4sQ0FBZSxPQUFmLENBQUg7QUFDRSxNQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsWUFBVCxDQURGO0tBRkE7QUFBQSxJQUlBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBQSxDQUFFLGdCQUFGLENBSlIsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUFBLENBQUUsT0FBRixDQUxULENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxFQUFELEdBQU0sQ0FOTixDQUFBO0FBQUEsSUFPQSxNQUFNLENBQUMsV0FBUCxDQUFtQixJQUFDLENBQUEsV0FBcEIsRUFBaUMsSUFBakMsQ0FQQSxDQUFBO0FBQUEsSUFRQSxJQUFDLENBQUEsV0FBRCxDQUFBLENBUkEsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsV0FBWCxDQUF1QixDQUFDLElBQXhCLENBQTZCLGlCQUE3QixDQVZBLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLFlBQVgsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixRQUE5QixDQVhBLENBQUE7QUFBQSxJQWFBLENBQUEsQ0FB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YUFBUixDQUxQLENBQUE7QUFBQSxJQU1BLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWixDQU5BLENBQUE7QUFBQSxJQU9BLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFDLFlBQWpCLENBUEEsQ0FBQTtBQUFBLElBUUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUMsS0FBakIsQ0FSQSxDQUFBO0FBQUEsSUFTQSxDQUFDLENBQUMsSUFBRixDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsUUFBVixDQUFQLEVBQTRCLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBNUIsQ0FBNkMsQ0FBQyxRQUE5QyxDQUF1RCxJQUFDLENBQUEsUUFBeEQsQ0FUQSxDQUFBO0FBVUEsV0FBTyxLQUFQLENBWE07RUFBQSxDQXBGUixDQUFBOztBQUFBLCtCQWlHQSxRQUFBLEdBQVUsU0FBQyxRQUFELEdBQUE7QUFDUixJQUFBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFBLENBQUEsQ0FBQTtXQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFBLEVBRlE7RUFBQSxDQWpHVixDQUFBOztBQUFBLCtCQXFHQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxRQUFBLFlBQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsS0FBSyxDQUFDLGFBQVIsQ0FBVCxDQUFBO0FBQUEsSUFDQSxJQUFBLEdBQU8sTUFBTSxDQUFDLE9BQVAsQ0FBZSxvQkFBZixDQURQLENBQUE7V0FFQSxJQUFJLENBQUMsUUFBTCxDQUFjLGtCQUFkLEVBSFM7RUFBQSxDQXJHWCxDQUFBOzs0QkFBQTs7SUFERixDQUFBOztBQUFBLENBMkdBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGtCQUFBLENBQUEsRUFEWTtBQUFBLENBQWxCLENBM0dBLENBQUEiLCJmaWxlIjoiTGFuZGdpbmdDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGFuZGdpbmdDb250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBpdHlwZSA9ICdjbGljayc7XG4gICAgQGh0bWwgPSAkICdodG1sJ1xuICAgIGlmIEBodG1sLmhhc0NsYXNzKCd0b3VjaCcpXG4gICAgICBAaXR5cGUgPSAndG91Y2hzdGFydCdcbiAgICBAZm9ybSA9ICQoJy5yZWdpc3Rlci1mb3JtJylcbiAgICBAdGltZXIgPSAkKCcudGltZScpXG4gICAgQHRpID0gMFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCBAdGltZXJVcGRhdGUsIDEwMDBcbiAgICBAdGltZXJVcGRhdGUoKVxuXG4gICAgQGZvcm0uZmluZCgnaW5wdXQudGVsJykubWFzayBcIig5OTkpIDk5OS05OS05OVwiXG4gICAgQGZvcm0uZmluZCgnaW5wdXQuY29kZScpLm1hc2sgXCIrOT85OTlcIlxuXG4gICAgJCgnLnJ1bGVzIC5jbG9zZScpLm9uIEBpdHlwZSwgQGNsb3NlUnVsZXNcbiAgICAkKCcuc2hvdy1ydWxlcycpLm9uIEBpdHlwZSwgQHNob3dSdWxlc1xuICAgIFxuICAgIEBtZXNzYWdlID0gdGhpcy5mb3JtLnByZXYoKVxuXG4gICAgQGxhbmcgPSAkICduYXYubGFuZ3VhZ2UnXG4gICAgQGxhbmcub24gdGhpcy5pdHlwZSwgQHNlbGVjdExhbmd1YWdlXG4gICAgQGxhbmcuZmluZCgnYScpLm9uIHRoaXMuaXR5cGUsIEBzZWxlY3RMYW5ndWFnZVxuXG4gICAgQGZvcm0uZmluZCgnYnV0dG9uJykub24gdGhpcy5pdHlwZSwgQHRyeXN1Ym1pdFxuICAgIEBmb3JtLm9uICdzdWJtaXQnLCBAc3VibWl0XG5cbiAgICBAbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UubGFuZ3VhZ2UgfHwgbnVsbFxuXG4gICAgaWYgQGxhbmd1YWdlID09IG51bGxcbiAgICAgICQuZ2V0SlNPTihcImh0dHA6Ly93d3cudGVsaXplLmNvbS9nZW9pcFwiLCBAaXAyQ291bnRyeSlcbiAgICBlbHNlIGlmIEBsYW5ndWFnZSA9PSAnQVonXG4gICAgICBAbGFuZy5maW5kKCdhJykudHJpZ2dlciAnY2xpY2snXG5cbiAgaXAyQ291bnRyeTogKG9iaik9PlxuICAgIHN3aXRjaCBvYmouY291bnRyeV9jb2RlXG4gICAgICB3aGVuICdBWicgXG4gICAgICAgIEBsYW5ndWFnZSA9ICdBWidcbiAgICAgICAgQGxhbmcuZmluZCgnYScpLnRyaWdnZXIgJ2NsaWNrJ1xuICAgICAgZWxzZVxuICAgICAgICBAbGFuZ3VhZ2UgPSAnUlUnXG4gICAgbG9jYWxTdG9yYWdlLmxhbmd1YWdlID0gQGxhbmd1YWdlXG5cbiAgc2hvd1J1bGVzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiBldmVudC5nZXN0dXJlXG4gICAgICBldmVudC5nZXN0dXJlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5nZXN0dXJlLnByZXZlbnREZWZhdWx0KClcbiAgICBAaHRtbC5hZGRDbGFzcyAncnVsZXMnXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcucGFnZScpLmZpbmQoJy5ydWxlcycpLnNob3coKVxuICAgIHdpbmRvdy5zY3JvbGxUbyAwLCAwXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY2xvc2VSdWxlczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgZXZlbnQuZ2VzdHVyZVxuICAgICAgZXZlbnQuZ2VzdHVyZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQuZ2VzdHVyZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGh0bWwucmVtb3ZlQ2xhc3MgJ3J1bGVzJ1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlKS5oaWRlKClcbiAgICB3aW5kb3cuc2Nyb2xsVG8gMCwgMFxuICAgIHJldHVybiBmYWxzZVxuXG4gIHRpbWVyVXBkYXRlOiA9PlxuICAgIGlmIChAdGklMik9PTBcbiAgICAgIHNlcGF0b3IgPSBcIjpcIlxuICAgIGVsc2VcbiAgICAgIHNlcGF0b3IgPSBcIsKgXCJcbiAgICBAdGkrK1xuICAgIEB0aW1lci50ZXh0KG1vbWVudCgpLmZvcm1hdChcIkhIXCIrc2VwYXRvcitcIm1tXCIpKVxuXG4gIHNlbGVjdExhbmd1YWdlOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiBldmVudC5nZXN0dXJlXG4gICAgICBldmVudC5nZXN0dXJlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5nZXN0dXJlLnByZXZlbnREZWZhdWx0KClcbiAgICBAbGFuZy5maW5kKCdhJykudG9nZ2xlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBsYW5ndWFnZSA9IEBsYW5nLmZpbmQoJy5zZWxlY3RlZCcpLmF0dHIoJ2RhdGEtbGFuZycpXG4gICAgbG9jYWxTdG9yYWdlLmxhbmd1YWdlID0gQGxhbmd1YWdlXG4gICAgQGh0bWwuYXR0ciAnbGFuZycsIEBsYW5ndWFnZVxuICAgIHJldHVybiBmYWxzZVxuXG4gIHN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgZXZlbnQuZ2VzdHVyZVxuICAgICAgZXZlbnQuZ2VzdHVyZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQuZ2VzdHVyZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZm9ybSA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGNvbnNvbGUubG9nIGZvcm1cbiAgICBjb25zb2xlLmxvZyBmb3JtLndpbGxWYWxpZGF0ZVxuICAgIGNvbnNvbGUubG9nIGZvcm0udmFsaWRcbiAgICAkLnBvc3QoZm9ybS5hdHRyKCdhY3Rpb24nKSwgZm9ybS5zZXJpYWxpemUoKSkuY29tcGxldGUoQGZvcm1TZW5kKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGZvcm1TZW5kOiAocmVzcG9uY2UpPT5cbiAgICBAZm9ybS5oaWRlKClcbiAgICBAbWVzc2FnZS5zaG93KClcblxuICB0cnlzdWJtaXQ6IChldmVudCk9PlxuICAgIGJ1dHRvbiA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGZvcm0gPSBidXR0b24uY2xvc2VzdCgnZm9ybS5yZWdpc3Rlci1mb3JtJylcbiAgICBmb3JtLmFkZENsYXNzKCd2YWxpZGF0aW9uLXN0YXJ0JylcblxuJChkb2N1bWVudCkucmVhZHkgKCktPlxuICBuZXcgTGFuZGdpbmdDb250cm9sbGVyKCkiXX0=