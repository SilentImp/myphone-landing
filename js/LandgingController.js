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
    this.codeSelectChange = __bind(this.codeSelectChange, this);
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
    this.form.find('.code-widget input').on('change', this.codeChange);
    this.form.find('select').on('change', this.codeSelectChange);
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

  LandgingController.prototype.codeSelectChange = function(event) {
    var current, element, value, wrapper;
    element = $(event.currentTarget);
    value = element.val();
    wrapper = element.closest('.code-widget');
    current = wrapper.find('.current');
    current.text(value);
    wrapper.find('input[type="radio"][name="code"][value="' + value + '"]').trigger('click');
    return console.log(wrapper.find('input[type="radio"][name="code"][value="' + value + '"]'));
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
    console.log(form.serialize());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmRnaW5nQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxrQkFBQTtFQUFBLGtGQUFBOztBQUFBO0FBQ2UsRUFBQSw0QkFBQSxHQUFBO0FBRVgsaURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSwyQ0FBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsK0RBQUEsQ0FBQTtBQUFBLG1EQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEsSUFBQSxJQUFDLENBQUEsS0FBRCxHQUFTLE9BQVQsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFBLENBQUUsTUFBRixDQURSLENBQUE7QUFFQSxJQUFBLElBQUcsSUFBQyxDQUFBLElBQUksQ0FBQyxRQUFOLENBQWUsT0FBZixDQUFIO0FBQ0UsTUFBQSxJQUFDLENBQUEsS0FBRCxHQUFTLFlBQVQsQ0FERjtLQUZBO0FBQUEsSUFLQSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsQ0FBRSxnQkFBRixDQUxSLENBQUE7QUFBQSxJQU9BLElBQUMsQ0FBQSxLQUFELEdBQVMsQ0FBQSxDQUFFLE9BQUYsQ0FQVCxDQUFBO0FBQUEsSUFRQSxJQUFDLENBQUEsRUFBRCxHQUFNLENBUk4sQ0FBQTtBQUFBLElBU0EsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsSUFBQyxDQUFBLFdBQXBCLEVBQWlDLElBQWpDLENBVEEsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLFdBQUQsQ0FBQSxDQVZBLENBQUE7QUFBQSxJQVlBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLG9CQUFYLENBQWdDLENBQUMsRUFBakMsQ0FBb0MsUUFBcEMsRUFBOEMsSUFBQyxDQUFBLFVBQS9DLENBWkEsQ0FBQTtBQUFBLElBYUEsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsUUFBWCxDQUFvQixDQUFDLEVBQXJCLENB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QXVGQSxRQUFBLEdBQVUsU0FBQyxRQUFELEdBQUE7QUFDUixJQUFBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFBLENBQUEsQ0FBQTtXQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFBLEVBRlE7RUFBQSxDQXZGVixDQUFBOztBQUFBLCtCQTJGQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxRQUFBLFlBQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsS0FBSyxDQUFDLGFBQVIsQ0FBVCxDQUFBO0FBQUEsSUFDQSxJQUFBLEdBQU8sTUFBTSxDQUFDLE9BQVAsQ0FBZSxvQkFBZixDQURQLENBQUE7V0FFQSxJQUFJLENBQUMsUUFBTCxDQUFjLGtCQUFkLEVBSFM7RUFBQSxDQTNGWCxDQUFBOzs0QkFBQTs7SUFERixDQUFBOztBQUFBLENBa0dBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGtCQUFBLENBQUEsRUFEWTtBQUFBLENBQWxCLENBbEdBLENBQUEiLCJmaWxlIjoiTGFuZGdpbmdDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGFuZGdpbmdDb250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gICAgQGl0eXBlID0gJ2NsaWNrJztcbiAgICBAaHRtbCA9ICQgJ2h0bWwnXG4gICAgaWYgQGh0bWwuaGFzQ2xhc3MoJ3RvdWNoJylcbiAgICAgIEBpdHlwZSA9ICd0b3VjaHN0YXJ0J1xuXG4gICAgQGZvcm0gPSAkKCcucmVnaXN0ZXItZm9ybScpXG4gICAgXG4gICAgQHRpbWVyID0gJCgnLnRpbWUnKVxuICAgIEB0aSA9IDBcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwgQHRpbWVyVXBkYXRlLCAxMDAwXG4gICAgQHRpbWVyVXBkYXRlKClcblxuICAgIEBmb3JtLmZpbmQoJy5jb2RlLXdpZGdldCBpbnB1dCcpLm9uICdjaGFuZ2UnLCBAY29kZUNoYW5nZVxuICAgIEBmb3JtLmZpbmQoJ3NlbGVjdCcpLm9uICdjaGFuZ2UnLCBAY29kZVNlbGVjdENoYW5nZVxuXG5cbiAgICAkLm1hc2suZGVmaW5pdGlvbnNbJ2MnXSA9IFwiW9CQLdCv0LAt0Y9dXCJcbiAgICBAZm9ybS5maW5kKCdpbnB1dC50ZWwnKS5tYXNrIFwiKDk5OSkgOTk5LTk5LTk5XCJcbiAgICAjIEBmb3JtLmZpbmQoJ2lucHV0LmN5cicpLm1hc2sgXCJjYz9jY2NjY2NjY2NjY2NjY2NjY2NjY1wiXG4gICAgQGZvcm0uZmluZCgnaW5wdXQuY29kZScpLm1hc2sgXCIrOT85OTlcIlxuXG4gICAgJCgnLnJ1bGVzIC5jbG9zZScpLm9uIEBpdHlwZSwgQGNsb3NlUnVsZXNcbiAgICAkKCcuc2hvdy1ydWxlcycpLm9uIEBpdHlwZSwgQHNob3dSdWxlc1xuICAgIFxuICAgIFxuICAgIEBtZXNzYWdlID0gdGhpcy5mb3JtLnByZXYoKVxuXG4gICAgQGxhbmcgPSAkICduYXYubGFuZ3VhZ2UnXG4gICAgQGxhbmcub24gdGhpcy5pdHlwZSwgQHNlbGVjdExhbmd1YWdlXG4gICAgQGxhbmcuZmluZCgnYScpLm9uIHRoaXMuaXR5cGUsIEBzZWxlY3RMYW5ndWFnZVxuXG4gICAgQGZvcm0uZmluZCgnYnV0dG9uJykub24gdGhpcy5pdHlwZSwgQHRyeXN1Ym1pdFxuICAgIEBmb3JtLm9uICdzdWJtaXQnLCBAc3VibWl0XG5cbiAgc2hvd1J1bGVzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGh0bWwuYWRkQ2xhc3MgJ3J1bGVzJ1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLnBhZ2UnKS5maW5kKCcucnVsZXMnKS5zaG93KClcbiAgICB3aW5kb3cuc2Nyb2xsVG8gMCwgMFxuXG4gIGNsb3NlUnVsZXM6IChldmVudCk9PlxuICAgIEBodG1sLnJlbW92ZUNsYXNzICdydWxlcydcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZSkuaGlkZSgpXG4gICAgd2luZG93LnNjcm9sbFRvIDAsIDBcbiAgICBcbiAgY29kZVNlbGVjdENoYW5nZTogKGV2ZW50KT0+XG4gICAgZWxlbWVudCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHZhbHVlID0gZWxlbWVudC52YWwoKVxuICAgIHdyYXBwZXIgPSBlbGVtZW50LmNsb3Nlc3QoJy5jb2RlLXdpZGdldCcpXG4gICAgY3VycmVudCA9IHdyYXBwZXIuZmluZCgnLmN1cnJlbnQnKVxuICAgIGN1cnJlbnQudGV4dCB2YWx1ZVxuICAgIHdyYXBwZXIuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJjb2RlXCJdW3ZhbHVlPVwiJyt2YWx1ZSsnXCJdJykudHJpZ2dlciAnY2xpY2snXG4gICAgY29uc29sZS5sb2cod3JhcHBlci5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImNvZGVcIl1bdmFsdWU9XCInK3ZhbHVlKydcIl0nKSlcblxuICBjb2RlQ2hhbmdlOiAoZXZlbnQpPT5cbiAgICBlbGVtZW50ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgd3JhcHBlciA9IGVsZW1lbnQuY2xvc2VzdCgnLmNvZGUtd2lkZ2V0JylcbiAgICBjdXJyZW50ID0gd3JhcHBlci5maW5kKCcuY3VycmVudCcpXG4gICAgY3VycmVudC50ZXh0KGVsZW1lbnQudmFsKCkpXG4gICAgd3JhcHBlci5hZGRDbGFzcyAnY2hhbmdlZCdcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKS0+XG4gICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzICdjaGFuZ2VkJ1xuICAgICwgNTAwKVxuXG5cbiAgdGltZXJVcGRhdGU6ID0+XG4gICAgaWYgKEB0aSUyKT09MFxuICAgICAgc2VwYXRvciA9IFwiOlwiXG4gICAgZWxzZVxuICAgICAgc2VwYXRvciA9IFwiwqBcIlxuICAgIEB0aSsrXG4gICAgQHRpbWVyLnRleHQobW9tZW50KCkuZm9ybWF0KFwiSEhcIitzZXBhdG9yK1wibW1cIikpXG5cbiAgc2VsZWN0TGFuZ3VhZ2U6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIEBsYW5nLmZpbmQoJ2EnKS50b2dnbGVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGh0bWwuYXR0ciAnbGFuZycsIEBsYW5nLmZpbmQoJy5zZWxlY3RlZCcpLmF0dHIoJ2RhdGEtbGFuZycpXG5cbiAgc3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZm9ybSA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGNvbnNvbGUubG9nKGZvcm0uc2VyaWFsaXplKCkpXG4gICAgJC5wb3N0KGZvcm0uYXR0cignYWN0aW9uJyksIGZvcm0uc2VyaWFsaXplKCkpLmNvbXBsZXRlKEBmb3JtU2VuZClcblxuICBmb3JtU2VuZDogKHJlc3BvbmNlKT0+XG4gICAgQGZvcm0uaGlkZSgpXG4gICAgQG1lc3NhZ2Uuc2hvdygpXG5cbiAgdHJ5c3VibWl0OiAoZXZlbnQpPT5cbiAgICBidXR0b24gPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICBmb3JtID0gYnV0dG9uLmNsb3Nlc3QoJ2Zvcm0ucmVnaXN0ZXItZm9ybScpXG4gICAgZm9ybS5hZGRDbGFzcygndmFsaWRhdGlvbi1zdGFydCcpXG5cblxuJChkb2N1bWVudCkucmVhZHkgKCktPlxuICBuZXcgTGFuZGdpbmdDb250cm9sbGVyKCkiXX0=