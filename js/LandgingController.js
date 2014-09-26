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
    this.codeChange = __bind(this.codeChange, this);
    this.closeRules = __bind(this.closeRules, this);
    this.showRules = __bind(this.showRules, this);
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
    $('.code-widget').find('input').on('change', this.codeChange);
    $.mask.definitions['c'] = "[А-Яа-я]";
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
  }

  LandgingController.prototype.showRules = function(event) {
    event.preventDefault();
    this.html.addClass('rules');
    $(event.currentTarget).closest('.page').find('.rules').show();
    return window.scrollTo(0, 0);
  };

  LandgingController.prototype.closeRules = function(event) {
    this.html.removeClass('rules');
    $(event.currentTarget.parentNode).hide();
    return window.scrollTo(0, 0);
  };

  LandgingController.prototype.codeChange = function(event) {
    var current, element, wrapper;
    element = $(event.currentTarget);
    wrapper = element.closest('.code-widget');
    current = wrapper.find('.current');
    current.text(element.val());
    wrapper.addClass('changed');
    return window.setTimeout(function() {
      return wrapper.removeClass('changed');
    }, 500);
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
    this.lang.find('a').toggleClass('selected');
    return this.html.attr('lang', this.lang.find('.selected').attr('data-lang'));
  };

  LandgingController.prototype.submit = function(event) {
    var form;
    event.preventDefault();
    form = $(event.currentTarget);
    return $.post(form.attr('action'), form.serialize()).complete(this.formSend);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmRnaW5nQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxrQkFBQTtFQUFBLGtGQUFBOztBQUFBO0FBQ2UsRUFBQSw0QkFBQSxHQUFBO0FBRVgsaURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSwyQ0FBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsT0FBVCxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsQ0FBRSxNQUFGLENBRFIsQ0FBQTtBQUVBLElBQUEsSUFBRyxJQUFDLENBQUEsSUFBSSxDQUFDLFFBQU4sQ0FBZSxPQUFmLENBQUg7QUFDRSxNQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsWUFBVCxDQURGO0tBRkE7QUFBQSxJQUtBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBQSxDQUFFLGdCQUFGLENBTFIsQ0FBQTtBQUFBLElBT0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUFBLENBQUUsT0FBRixDQVBULENBQUE7QUFBQSxJQVFBLElBQUMsQ0FBQSxFQUFELEdBQU0sQ0FSTixDQUFBO0FBQUEsSUFTQSxNQUFNLENBQUMsV0FBUCxDQUFtQixJQUFDLENBQUEsV0FBcEIsRUFBaUMsSUFBakMsQ0FUQSxDQUFBO0FBQUEsSUFVQSxJQUFDLENBQUEsV0FBRCxDQUFBLENBVkEsQ0FBQTtBQUFBLElBWUEsQ0FBQSxDQUFFLGNBQUYsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixPQUF2QixDQUErQixDQUFDLEVBQWhDLENBQW1DLFFBQW5DLEVBQTZDLElBQUMsQ0FBQSxVQUE5QyxDQVpBLENBQUE7QUFBQSxJQWVBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBWSxDQUFBLEdBQUEsQ0FBbkIsR0FBMEIsVUFmMUIsQ0FBQTtBQUFB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QSxHQUFPLENBQUEsQ0FBRSxLQUFLLENBQUMsYUFBUixDQURQLENBQUE7V0FFQSxDQUFDLENBQUMsSUFBRixDQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsUUFBVixDQUFQLEVBQTRCLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBNUIsQ0FBNkMsQ0FBQyxRQUE5QyxDQUF1RCxJQUFDLENBQUEsUUFBeEQsRUFITTtFQUFBLENBeEVSLENBQUE7O0FBQUEsK0JBNkVBLFFBQUEsR0FBVSxTQUFDLFFBQUQsR0FBQTtBQUNSLElBQUEsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQUEsQ0FBQSxDQUFBO1dBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQUEsRUFGUTtFQUFBLENBN0VWLENBQUE7O0FBQUEsK0JBaUZBLFNBQUEsR0FBVyxTQUFDLEtBQUQsR0FBQTtBQUNULFFBQUEsWUFBQTtBQUFBLElBQUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxLQUFLLENBQUMsYUFBUixDQUFULENBQUE7QUFBQSxJQUNBLElBQUEsR0FBTyxNQUFNLENBQUMsT0FBUCxDQUFlLG9CQUFmLENBRFAsQ0FBQTtXQUVBLElBQUksQ0FBQyxRQUFMLENBQWMsa0JBQWQsRUFIUztFQUFBLENBakZYLENBQUE7OzRCQUFBOztJQURGLENBQUE7O0FBQUEsQ0F3RkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUEsR0FBQTtTQUNaLElBQUEsa0JBQUEsQ0FBQSxFQURZO0FBQUEsQ0FBbEIsQ0F4RkEsQ0FBQSIsImZpbGUiOiJMYW5kZ2luZ0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMYW5kZ2luZ0NvbnRyb2xsZXJcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICBAaXR5cGUgPSAnY2xpY2snO1xuICAgIEBodG1sID0gJCAnaHRtbCdcbiAgICBpZiBAaHRtbC5oYXNDbGFzcygndG91Y2gnKVxuICAgICAgQGl0eXBlID0gJ3RvdWNoc3RhcnQnXG5cbiAgICBAZm9ybSA9ICQoJy5yZWdpc3Rlci1mb3JtJylcbiAgICBcbiAgICBAdGltZXIgPSAkKCcudGltZScpXG4gICAgQHRpID0gMFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCBAdGltZXJVcGRhdGUsIDEwMDBcbiAgICBAdGltZXJVcGRhdGUoKVxuXG4gICAgJCgnLmNvZGUtd2lkZ2V0JykuZmluZCgnaW5wdXQnKS5vbiAnY2hhbmdlJywgQGNvZGVDaGFuZ2VcblxuXG4gICAgJC5tYXNrLmRlZmluaXRpb25zWydjJ10gPSBcIlvQkC3Qr9CwLdGPXVwiXG4gICAgQGZvcm0uZmluZCgnaW5wdXQudGVsJykubWFzayBcIig5OTkpIDk5OS05OS05OVwiXG4gICAgIyBAZm9ybS5maW5kKCdpbnB1dC5jeXInKS5tYXNrIFwiY2M/Y2NjY2NjY2NjY2NjY2NjY2NjY2NcIlxuICAgIEBmb3JtLmZpbmQoJ2lucHV0LmNvZGUnKS5tYXNrIFwiKzk/OTk5XCJcblxuICAgICQoJy5ydWxlcyAuY2xvc2UnKS5vbiBAaXR5cGUsIEBjbG9zZVJ1bGVzXG4gICAgJCgnLnNob3ctcnVsZXMnKS5vbiBAaXR5cGUsIEBzaG93UnVsZXNcbiAgICBcbiAgICBcbiAgICBAbWVzc2FnZSA9IHRoaXMuZm9ybS5wcmV2KClcblxuICAgIEBsYW5nID0gJCAnbmF2Lmxhbmd1YWdlJ1xuICAgIEBsYW5nLm9uIHRoaXMuaXR5cGUsIEBzZWxlY3RMYW5ndWFnZVxuICAgIEBsYW5nLmZpbmQoJ2EnKS5vbiB0aGlzLml0eXBlLCBAc2VsZWN0TGFuZ3VhZ2VcblxuICAgIEBmb3JtLmZpbmQoJ2J1dHRvbicpLm9uIHRoaXMuaXR5cGUsIEB0cnlzdWJtaXRcbiAgICBAZm9ybS5vbiAnc3VibWl0JywgQHN1Ym1pdFxuXG4gIHNob3dSdWxlczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBodG1sLmFkZENsYXNzICdydWxlcydcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJy5wYWdlJykuZmluZCgnLnJ1bGVzJykuc2hvdygpXG4gICAgd2luZG93LnNjcm9sbFRvIDAsIDBcblxuICBjbG9zZVJ1bGVzOiAoZXZlbnQpPT5cbiAgICBAaHRtbC5yZW1vdmVDbGFzcyAncnVsZXMnXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUpLmhpZGUoKVxuICAgIHdpbmRvdy5zY3JvbGxUbyAwLCAwXG4gICAgXG5cbiAgY29kZUNoYW5nZTogKGV2ZW50KT0+XG4gICAgZWxlbWVudCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHdyYXBwZXIgPSBlbGVtZW50LmNsb3Nlc3QoJy5jb2RlLXdpZGdldCcpXG4gICAgY3VycmVudCA9IHdyYXBwZXIuZmluZCgnLmN1cnJlbnQnKVxuICAgIGN1cnJlbnQudGV4dChlbGVtZW50LnZhbCgpKVxuICAgIHdyYXBwZXIuYWRkQ2xhc3MgJ2NoYW5nZWQnXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCktPlxuICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcyAnY2hhbmdlZCdcbiAgICAsIDUwMClcblxuXG4gIHRpbWVyVXBkYXRlOiA9PlxuICAgIGlmIChAdGklMik9PTBcbiAgICAgIHNlcGF0b3IgPSBcIjpcIlxuICAgIGVsc2VcbiAgICAgIHNlcGF0b3IgPSBcIsKgXCJcbiAgICBAdGkrK1xuICAgIEB0aW1lci50ZXh0KG1vbWVudCgpLmZvcm1hdChcIkhIXCIrc2VwYXRvcitcIm1tXCIpKVxuXG4gIHNlbGVjdExhbmd1YWdlOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBAbGFuZy5maW5kKCdhJykudG9nZ2xlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBodG1sLmF0dHIgJ2xhbmcnLCBAbGFuZy5maW5kKCcuc2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWxhbmcnKVxuXG4gIHN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGZvcm0gPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAkLnBvc3QoZm9ybS5hdHRyKCdhY3Rpb24nKSwgZm9ybS5zZXJpYWxpemUoKSkuY29tcGxldGUoQGZvcm1TZW5kKVxuXG4gIGZvcm1TZW5kOiAocmVzcG9uY2UpPT5cbiAgICBAZm9ybS5oaWRlKClcbiAgICBAbWVzc2FnZS5zaG93KClcblxuICB0cnlzdWJtaXQ6IChldmVudCk9PlxuICAgIGJ1dHRvbiA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGZvcm0gPSBidXR0b24uY2xvc2VzdCgnZm9ybS5yZWdpc3Rlci1mb3JtJylcbiAgICBmb3JtLmFkZENsYXNzKCd2YWxpZGF0aW9uLXN0YXJ0JylcblxuXG4kKGRvY3VtZW50KS5yZWFkeSAoKS0+XG4gIG5ldyBMYW5kZ2luZ0NvbnRyb2xsZXIoKSJdfQ==