var LandgingController,__bind=function(t,i){return function(){return t.apply(i,arguments)}};LandgingController=function(){function t(){this.trysubmit=__bind(this.trysubmit,this),this.formSend=__bind(this.formSend,this),this.submit=__bind(this.submit,this),this.selectLanguage=__bind(this.selectLanguage,this),this.timerUpdate=__bind(this.timerUpdate,this),this.itype="click",this.html=$("html"),this.html.hasClass("touch")&&(this.itype="touchstart"),this.form=$(".register-form"),this.timer=$(".time"),this.ti=0,window.setInterval(this.timerUpdate,1e3),this.timerUpdate(),$.mask.definitions.c="[А-Яа-я]",this.form.find("input.tel").mask("(999) 999-99-99"),this.form.find("input.cyr").mask("cc?cccccccccccccccccccc"),this.form.find("input.code").mask("+9?999"),this.message=this.form.prev(),this.lang=$("nav.language"),this.lang.on(this.itype,this.selectLanguage),this.lang.find("a").on(this.itype,this.selectLanguage),this.form.find("button").on(this.itype,this.trysubmit),this.form.on("submit",this.submit)}return t.prototype.timerUpdate=function(){var t;return t=this.ti%2===0?":":" ",this.ti++,this.timer.text(moment().format("h"+t+"mm"))},t.prototype.selectLanguage=function(t){return t.preventDefault(),t.stopPropagation(),this.lang.find("a").toggleClass("selected"),this.html.attr("lang",this.lang.find(".selected").attr("data-lang"))},t.prototype.submit=function(t){var i;return t.preventDefault(),i=$(t.currentTarget),$.post(i.attr("action"),i.serialize()).complete(this.formSend)},t.prototype.formSend=function(){return this.form.hide(),this.message.show()},t.prototype.trysubmit=function(t){var i,e;return i=$(t.currentTarget),e=i.closest("form.register-form"),e.addClass("validation-start")},t}(),$(document).ready(function(){return new LandgingController});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmRnaW5nQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQSxvQkFBQSxPQUFBLFNBQUEsRUFBQSxHQUFBLE1BQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLFlBQUEsb0JBQUEsV0FDZSxRQUFBLEtBRVgsS0FBQSxVQUFBLE9BQUEsS0FBQSxVQUFBLE1BQUEsS0FBQSxTQUFBLE9BQUEsS0FBQSxTQUFBLE1BQUEsS0FBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLE1BQUEsS0FBQSxlQUFBLE9BQUEsS0FBQSxlQUFBLE1BQUEsS0FBQSxZQUFBLE9BQUEsS0FBQSxZQUFBLE1BQUEsS0FBQyxNQUFRLFFBQ1QsS0FBQyxLQUFPLEVBQUUsUUFDUCxLQUFDLEtBQUssU0FBUyxXQUNoQixLQUFDLE1BQVEsY0FFWCxLQUFDLEtBQU8sRUFBRSxrQkFFVixLQUFDLE1BQVEsRUFBRSxTQUNYLEtBQUMsR0FBSyxFQUNOLE9BQU8sWUFBWSxLQUFDLFlBQWEsS0FDakMsS0FBQyxjQUdELEVBQUUsS0FBSyxZQUFZLEVBQU8sV0FDMUIsS0FBQyxLQUFLLEtBQUssYUFBYSxLQUFLLG1CQUM3QixLQUFDLEtBQUssS0FBSyxhQUFhLEtBQUssMkJBQzdCLEtBQUMsS0FBSyxLQUFLLGNBQWMsS0FBSyxVQUc5QixLQUFDLFFBQVUsS0FBSyxLQUFLLE9BRXJCLEtBQUMsS0FBTyxFQUFFLGdCQUNWLEtBQUMsS0FBSyxHQUFHLEtBQUssTUFBTyxLQUFDLGdCQUN0QixLQUFDLEtBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxNQUFPLEtBQUMsZ0JBRWhDLEtBQUMsS0FBSyxLQUFLLFVBQVUsR0FBRyxLQUFLLE1BQU8sS0FBQyxXQUNyQyxLQUFDLEtBQUssR0FBRyxTQUFVLEtBQUMsY0E1QnRCLEdBQUEsVUE4QkEsWUFBYSxXQUNYLEdBQUEsU0FDRSxHQURFLEtBQUMsR0FBRyxJQUFJLEVBQ0EsSUFFQSxJQUNaLEtBQUMsS0FDRCxLQUFDLE1BQU0sS0FBSyxTQUFTLE9BQU8sSUFBSSxFQUFRLFFBcEMxQyxFQUFBLFVBc0NBLGVBQWdCLFNBQUMsU0FDZixHQUFNLGlCQUNOLEVBQU0sa0JBQ04sS0FBQyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQzVCLEtBQUMsS0FBSyxLQUFLLE9BQVEsS0FBQyxLQUFLLEtBQUssYUFBYSxLQUFLLGVBMUNsRCxFQUFBLFVBNENBLE9BQVEsU0FBQyxHQUNQLEdBQUEsU0FBQSxHQUFNLGlCQUNOLEVBQU8sRUFBRSxFQUFNLGVBQ2YsRUFBRSxLQUFLLEVBQUssS0FBSyxVQUFXLEVBQUssYUFBYSxTQUFTLEtBQUMsV0EvQzFELEVBQUEsVUFpREEsU0FBVSxpQkFDUixNQUFDLEtBQUssT0FDTixLQUFDLFFBQVEsUUFuRFgsRUFBQSxVQXFEQSxVQUFXLFNBQUMsR0FDVixHQUFBLEdBQUEsUUFBQSxHQUFTLEVBQUUsRUFBTSxlQUNqQixFQUFPLEVBQU8sUUFBUSxzQkFDdEIsRUFBSyxTQUFTLDBCQXpEbEIsRUE0REUsVUFBVSxNQUFNLGlCQUNaLElBQUEiLCJmaWxlIjoiTGFuZGdpbmdDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGFuZGdpbmdDb250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gICAgQGl0eXBlID0gJ2NsaWNrJztcbiAgICBAaHRtbCA9ICQgJ2h0bWwnXG4gICAgaWYgQGh0bWwuaGFzQ2xhc3MoJ3RvdWNoJylcbiAgICAgIEBpdHlwZSA9ICd0b3VjaHN0YXJ0J1xuXG4gICAgQGZvcm0gPSAkKCcucmVnaXN0ZXItZm9ybScpXG4gICAgXG4gICAgQHRpbWVyID0gJCgnLnRpbWUnKVxuICAgIEB0aSA9IDBcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwgQHRpbWVyVXBkYXRlLCAxMDAwXG4gICAgQHRpbWVyVXBkYXRlKClcblxuXG4gICAgJC5tYXNrLmRlZmluaXRpb25zWydjJ10gPSBcIlvQkC3Qr9CwLdGPXVwiXG4gICAgQGZvcm0uZmluZCgnaW5wdXQudGVsJykubWFzayBcIig5OTkpIDk5OS05OS05OVwiXG4gICAgQGZvcm0uZmluZCgnaW5wdXQuY3lyJykubWFzayBcImNjP2NjY2NjY2NjY2NjY2NjY2NjY2NjXCJcbiAgICBAZm9ybS5maW5kKCdpbnB1dC5jb2RlJykubWFzayBcIis5Pzk5OVwiXG4gICAgXG4gICAgXG4gICAgQG1lc3NhZ2UgPSB0aGlzLmZvcm0ucHJldigpXG5cbiAgICBAbGFuZyA9ICQgJ25hdi5sYW5ndWFnZSdcbiAgICBAbGFuZy5vbiB0aGlzLml0eXBlLCBAc2VsZWN0TGFuZ3VhZ2VcbiAgICBAbGFuZy5maW5kKCdhJykub24gdGhpcy5pdHlwZSwgQHNlbGVjdExhbmd1YWdlXG5cbiAgICBAZm9ybS5maW5kKCdidXR0b24nKS5vbiB0aGlzLml0eXBlLCBAdHJ5c3VibWl0XG4gICAgQGZvcm0ub24gJ3N1Ym1pdCcsIEBzdWJtaXRcblxuICB0aW1lclVwZGF0ZTogPT5cbiAgICBpZiAoQHRpJTIpPT0wXG4gICAgICBzZXBhdG9yID0gXCI6XCJcbiAgICBlbHNlXG4gICAgICBzZXBhdG9yID0gXCLCoFwiXG4gICAgQHRpKytcbiAgICBAdGltZXIudGV4dChtb21lbnQoKS5mb3JtYXQoXCJoXCIrc2VwYXRvcitcIm1tXCIpKVxuXG4gIHNlbGVjdExhbmd1YWdlOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBAbGFuZy5maW5kKCdhJykudG9nZ2xlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBodG1sLmF0dHIgJ2xhbmcnLCBAbGFuZy5maW5kKCcuc2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWxhbmcnKVxuXG4gIHN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGZvcm0gPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAkLnBvc3QoZm9ybS5hdHRyKCdhY3Rpb24nKSwgZm9ybS5zZXJpYWxpemUoKSkuY29tcGxldGUoQGZvcm1TZW5kKVxuXG4gIGZvcm1TZW5kOiAocmVzcG9uY2UpPT5cbiAgICBAZm9ybS5oaWRlKClcbiAgICBAbWVzc2FnZS5zaG93KClcblxuICB0cnlzdWJtaXQ6IChldmVudCk9PlxuICAgIGJ1dHRvbiA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGZvcm0gPSBidXR0b24uY2xvc2VzdCgnZm9ybS5yZWdpc3Rlci1mb3JtJylcbiAgICBmb3JtLmFkZENsYXNzKCd2YWxpZGF0aW9uLXN0YXJ0JylcblxuXG4kKGRvY3VtZW50KS5yZWFkeSAoKS0+XG4gIG5ldyBMYW5kZ2luZ0NvbnRyb2xsZXIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==