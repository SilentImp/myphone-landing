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
    this.form.find('.code-widget input').on('change', this.codeChange);
    this.form.find('select').on('change', this.codeSelectChange);
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
    $.ajax({
      url: "http://www.telize.com/geoip",
      jsonp: "document.landing.ip2Country",
      dataType: "jsonp"
    });
  }

  LandgingController.prototype.ip2Country = function(obj) {
    console.log(obj);
    switch (obj.country_code) {
      case 'AZ':
        return console.log('AZ');
      default:
        return console.log('RU');
    }
  };

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
    current = wrapper.find('.current .value');
    current.text(value);
    return wrapper.find('input[type="radio"][name="code"][value="' + value + '"]').trigger('click');
  };

  LandgingController.prototype.codeChange = function(event) {
    var current, element, wrapper;
    element = $(event.currentTarget);
    wrapper = element.closest('.code-widget');
    current = wrapper.find('.current .value');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmRnaW5nQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxrQkFBQTtFQUFBLGtGQUFBOztBQUFBO0FBQ2UsRUFBQSw0QkFBQSxHQUFBO0FBRVgsaURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSwyQ0FBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsK0RBQUEsQ0FBQTtBQUFBLG1EQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLElBQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxPQUFULENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBQSxDQUFFLE1BQUYsQ0FEUixDQUFBO0FBRUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxJQUFJLENBQUMsUUFBTixDQUFlLE9BQWYsQ0FBSDtBQUNFLE1BQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxZQUFULENBREY7S0FGQTtBQUFBLElBS0EsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFBLENBQUUsZ0JBQUYsQ0FMUixDQUFBO0FBQUEsSUFPQSxJQUFDLENBQUEsS0FBRCxHQUFTLENBQUEsQ0FBRSxPQUFGLENBUFQsQ0FBQTtBQUFBLElBUUEsSUFBQyxDQUFBLEVBQUQsR0FBTSxDQVJOLENBQUE7QUFBQSxJQVNBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLElBQUMsQ0FBQSxXQUFwQixFQUFpQyxJQUFqQyxDQVRBLENBQUE7QUFBQSxJQVVBLElBQUMsQ0FBQSxXQUFELENBQUEsQ0FWQSxDQUFBO0FBQUEsSUFZQSxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxvQkFBWCxDQUFnQyxDQUFDLEVBQWpDLENBQW9DLFFBQXBDLEVBQThDLElBQUMsQ0FBQSxVQUEvQyxDQVpBLENBQUE7QUFBQSxJQWFBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLFFBQVgsQ0FB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LEdBQVIsQ0FBWSxJQUFJLENBQUMsU0FBTCxDQUFBLENBQVosQ0FGQSxDQUFBO1dBR0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFFBQVYsQ0FBUCxFQUE0QixJQUFJLENBQUMsU0FBTCxDQUFBLENBQTVCLENBQTZDLENBQUMsUUFBOUMsQ0FBdUQsSUFBQyxDQUFBLFFBQXhELEVBSk07RUFBQSxDQS9GUixDQUFBOztBQUFBLCtCQXFHQSxRQUFBLEdBQVUsU0FBQyxRQUFELEdBQUE7QUFDUixJQUFBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFBLENBQUEsQ0FBQTtXQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFBLEVBRlE7RUFBQSxDQXJHVixDQUFBOztBQUFBLCtCQXlHQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxRQUFBLFlBQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsS0FBSyxDQUFDLGFBQVIsQ0FBVCxDQUFBO0FBQUEsSUFDQSxJQUFBLEdBQU8sTUFBTSxDQUFDLE9BQVAsQ0FBZSxvQkFBZixDQURQLENBQUE7V0FFQSxJQUFJLENBQUMsUUFBTCxDQUFjLGtCQUFkLEVBSFM7RUFBQSxDQXpHWCxDQUFBOzs0QkFBQTs7SUFERixDQUFBOztBQUFBLENBZ0hBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGtCQUFBLENBQUEsRUFEWTtBQUFBLENBQWxCLENBaEhBLENBQUEiLCJmaWxlIjoiTGFuZGdpbmdDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGFuZGdpbmdDb250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gICAgQGl0eXBlID0gJ2NsaWNrJztcbiAgICBAaHRtbCA9ICQgJ2h0bWwnXG4gICAgaWYgQGh0bWwuaGFzQ2xhc3MoJ3RvdWNoJylcbiAgICAgIEBpdHlwZSA9ICd0b3VjaHN0YXJ0J1xuXG4gICAgQGZvcm0gPSAkKCcucmVnaXN0ZXItZm9ybScpXG4gICAgXG4gICAgQHRpbWVyID0gJCgnLnRpbWUnKVxuICAgIEB0aSA9IDBcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwgQHRpbWVyVXBkYXRlLCAxMDAwXG4gICAgQHRpbWVyVXBkYXRlKClcblxuICAgIEBmb3JtLmZpbmQoJy5jb2RlLXdpZGdldCBpbnB1dCcpLm9uICdjaGFuZ2UnLCBAY29kZUNoYW5nZVxuICAgIEBmb3JtLmZpbmQoJ3NlbGVjdCcpLm9uICdjaGFuZ2UnLCBAY29kZVNlbGVjdENoYW5nZVxuXG4gICAgIyAkLm1hc2suZGVmaW5pdGlvbnNbJ2MnXSA9IFwiW15cXGRcXHMuLDohQF4lJipfKz3CscKnIyReKClcXFwiXFwnXVwiXG4gICAgIyBAZm9ybS5maW5kKCdpbnB1dC53b3JkJykubWFzayBcImNjP2NjY2NjY2NjY2NjY2NjY2NjY2NjXCJcblxuICAgIEBmb3JtLmZpbmQoJ2lucHV0LnRlbCcpLm1hc2sgXCIoOTk5KSA5OTktOTktOTlcIlxuICAgIEBmb3JtLmZpbmQoJ2lucHV0LmNvZGUnKS5tYXNrIFwiKzk/OTk5XCJcblxuICAgICQoJy5ydWxlcyAuY2xvc2UnKS5vbiBAaXR5cGUsIEBjbG9zZVJ1bGVzXG4gICAgJCgnLnNob3ctcnVsZXMnKS5vbiBAaXR5cGUsIEBzaG93UnVsZXNcbiAgICBcbiAgICBcbiAgICBAbWVzc2FnZSA9IHRoaXMuZm9ybS5wcmV2KClcblxuICAgIEBsYW5nID0gJCAnbmF2Lmxhbmd1YWdlJ1xuICAgIEBsYW5nLm9uIHRoaXMuaXR5cGUsIEBzZWxlY3RMYW5ndWFnZVxuICAgIEBsYW5nLmZpbmQoJ2EnKS5vbiB0aGlzLml0eXBlLCBAc2VsZWN0TGFuZ3VhZ2VcblxuICAgIEBmb3JtLmZpbmQoJ2J1dHRvbicpLm9uIHRoaXMuaXR5cGUsIEB0cnlzdWJtaXRcbiAgICBAZm9ybS5vbiAnc3VibWl0JywgQHN1Ym1pdFxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogXCJodHRwOi8vd3d3LnRlbGl6ZS5jb20vZ2VvaXBcIixcbiAgICAgIGpzb25wOiBcImRvY3VtZW50LmxhbmRpbmcuaXAyQ291bnRyeVwiLFxuICAgICAgZGF0YVR5cGU6IFwianNvbnBcIlxuICAgICAgfSlcblxuICBpcDJDb3VudHJ5OiAob2JqKT0+XG4gICAgY29uc29sZS5sb2cgb2JqXG4gICAgc3dpdGNoIG9iai5jb3VudHJ5X2NvZGVcbiAgICAgIHdoZW4gJ0FaJyBcbiAgICAgICAgY29uc29sZS5sb2cgJ0FaJ1xuICAgICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyAnUlUnXG5cblxuICBzaG93UnVsZXM6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAaHRtbC5hZGRDbGFzcyAncnVsZXMnXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcucGFnZScpLmZpbmQoJy5ydWxlcycpLnNob3coKVxuICAgIHdpbmRvdy5zY3JvbGxUbyAwLCAwXG5cbiAgY2xvc2VSdWxlczogKGV2ZW50KT0+XG4gICAgQGh0bWwucmVtb3ZlQ2xhc3MgJ3J1bGVzJ1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlKS5oaWRlKClcbiAgICB3aW5kb3cuc2Nyb2xsVG8gMCwgMFxuICAgIFxuICBjb2RlU2VsZWN0Q2hhbmdlOiAoZXZlbnQpPT5cbiAgICBlbGVtZW50ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgdmFsdWUgPSBlbGVtZW50LnZhbCgpXG4gICAgd3JhcHBlciA9IGVsZW1lbnQuY2xvc2VzdCgnLmNvZGUtd2lkZ2V0JylcbiAgICBjdXJyZW50ID0gd3JhcHBlci5maW5kKCcuY3VycmVudCAudmFsdWUnKVxuICAgIGN1cnJlbnQudGV4dCB2YWx1ZVxuICAgIHdyYXBwZXIuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJjb2RlXCJdW3ZhbHVlPVwiJyt2YWx1ZSsnXCJdJykudHJpZ2dlciAnY2xpY2snXG5cbiAgY29kZUNoYW5nZTogKGV2ZW50KT0+XG4gICAgZWxlbWVudCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHdyYXBwZXIgPSBlbGVtZW50LmNsb3Nlc3QoJy5jb2RlLXdpZGdldCcpXG4gICAgY3VycmVudCA9IHdyYXBwZXIuZmluZCgnLmN1cnJlbnQgLnZhbHVlJylcbiAgICBjdXJyZW50LnRleHQoZWxlbWVudC52YWwoKSlcbiAgICB3cmFwcGVyLmFkZENsYXNzICdjaGFuZ2VkJ1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpLT5cbiAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MgJ2NoYW5nZWQnXG4gICAgLCA1MDApXG5cblxuICB0aW1lclVwZGF0ZTogPT5cbiAgICBpZiAoQHRpJTIpPT0wXG4gICAgICBzZXBhdG9yID0gXCI6XCJcbiAgICBlbHNlXG4gICAgICBzZXBhdG9yID0gXCLCoFwiXG4gICAgQHRpKytcbiAgICBAdGltZXIudGV4dChtb21lbnQoKS5mb3JtYXQoXCJISFwiK3NlcGF0b3IrXCJtbVwiKSlcblxuICBzZWxlY3RMYW5ndWFnZTogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgQGxhbmcuZmluZCgnYScpLnRvZ2dsZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAaHRtbC5hdHRyICdsYW5nJywgQGxhbmcuZmluZCgnLnNlbGVjdGVkJykuYXR0cignZGF0YS1sYW5nJylcblxuICBzdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBmb3JtID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgY29uc29sZS5sb2coZm9ybS5zZXJpYWxpemUoKSlcbiAgICAkLnBvc3QoZm9ybS5hdHRyKCdhY3Rpb24nKSwgZm9ybS5zZXJpYWxpemUoKSkuY29tcGxldGUoQGZvcm1TZW5kKVxuXG4gIGZvcm1TZW5kOiAocmVzcG9uY2UpPT5cbiAgICBAZm9ybS5oaWRlKClcbiAgICBAbWVzc2FnZS5zaG93KClcblxuICB0cnlzdWJtaXQ6IChldmVudCk9PlxuICAgIGJ1dHRvbiA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGZvcm0gPSBidXR0b24uY2xvc2VzdCgnZm9ybS5yZWdpc3Rlci1mb3JtJylcbiAgICBmb3JtLmFkZENsYXNzKCd2YWxpZGF0aW9uLXN0YXJ0JylcblxuXG4kKGRvY3VtZW50KS5yZWFkeSAoKS0+XG4gIG5ldyBMYW5kZ2luZ0NvbnRyb2xsZXIoKSJdfQ==