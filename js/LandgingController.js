var LandgingController,__bind=function(t,i){return function(){return t.apply(i,arguments)}};LandgingController=function(){function t(){this.trysubmit=__bind(this.trysubmit,this),this.formSend=__bind(this.formSend,this),this.submit=__bind(this.submit,this),this.selectLanguage=__bind(this.selectLanguage,this),this.itype="click",this.html=$("html"),this.html.hasClass("touch")&&(this.itype="touchstart"),this.form=$(".register-form"),$.mask.definitions.c="[А-Яа-я]",this.form.find("input.tel").mask("(999) 999-99-99"),this.form.find("input.cyr").mask("cc?cccccccccccccccccccc"),this.form.find("input.code").mask("+9?999"),this.message=this.form.prev(),this.lang=$("nav.language"),this.lang.on(this.itype,this.selectLanguage),this.lang.find("a").on(this.itype,this.selectLanguage),this.form.find("button").on(this.itype,this.trysubmit),this.form.on("submit",this.submit)}return t.prototype.selectLanguage=function(t){return t.preventDefault(),t.stopPropagation(),this.lang.find("a").toggleClass("selected"),this.html.attr("lang",this.lang.find(".selected").attr("data-lang"))},t.prototype.submit=function(t){var i;return t.preventDefault(),i=$(t.currentTarget),$.post(i.attr("action"),i.serialize()).complete(this.formSend)},t.prototype.formSend=function(){return this.form.hide(),this.message.show()},t.prototype.trysubmit=function(t){var i,n;return i=$(t.currentTarget),n=i.closest("form.register-form"),n.addClass("validation-start")},t}(),$(document).ready(function(){return new LandgingController});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhbmRnaW5nQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQSxvQkFBQSxPQUFBLFNBQUEsRUFBQSxHQUFBLE1BQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLFlBQUEsb0JBQUEsV0FDZSxRQUFBLEtBRVgsS0FBQSxVQUFBLE9BQUEsS0FBQSxVQUFBLE1BQUEsS0FBQSxTQUFBLE9BQUEsS0FBQSxTQUFBLE1BQUEsS0FBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLE1BQUEsS0FBQSxlQUFBLE9BQUEsS0FBQSxlQUFBLE1BQUEsS0FBQyxNQUFRLFFBQ1QsS0FBQyxLQUFPLEVBQUUsUUFDUCxLQUFDLEtBQUssU0FBUyxXQUNoQixLQUFDLE1BQVEsY0FFWCxLQUFDLEtBQU8sRUFBRSxrQkFHVixFQUFFLEtBQUssWUFBWSxFQUFPLFdBQzFCLEtBQUMsS0FBSyxLQUFLLGFBQWEsS0FBSyxtQkFDN0IsS0FBQyxLQUFLLEtBQUssYUFBYSxLQUFLLDJCQUM3QixLQUFDLEtBQUssS0FBSyxjQUFjLEtBQUssVUFHOUIsS0FBQyxRQUFVLEtBQUssS0FBSyxPQUVyQixLQUFDLEtBQU8sRUFBRSxnQkFDVixLQUFDLEtBQUssR0FBRyxLQUFLLE1BQU8sS0FBQyxnQkFDdEIsS0FBQyxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssTUFBTyxLQUFDLGdCQUVoQyxLQUFDLEtBQUssS0FBSyxVQUFVLEdBQUcsS0FBSyxNQUFPLEtBQUMsV0FDckMsS0FBQyxLQUFLLEdBQUcsU0FBVSxLQUFDLGNBdkJ0QixHQUFBLFVBeUJBLGVBQWdCLFNBQUMsU0FDZixHQUFNLGlCQUNOLEVBQU0sa0JBQ04sS0FBQyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQzVCLEtBQUMsS0FBSyxLQUFLLE9BQVEsS0FBQyxLQUFLLEtBQUssYUFBYSxLQUFLLGVBN0JsRCxFQUFBLFVBK0JBLE9BQVEsU0FBQyxHQUNQLEdBQUEsU0FBQSxHQUFNLGlCQUNOLEVBQU8sRUFBRSxFQUFNLGVBQ2YsRUFBRSxLQUFLLEVBQUssS0FBSyxVQUFXLEVBQUssYUFBYSxTQUFTLEtBQUMsV0FsQzFELEVBQUEsVUFvQ0EsU0FBVSxpQkFDUixNQUFDLEtBQUssT0FDTixLQUFDLFFBQVEsUUF0Q1gsRUFBQSxVQXdDQSxVQUFXLFNBQUMsR0FDVixHQUFBLEdBQUEsUUFBQSxHQUFTLEVBQUUsRUFBTSxlQUNqQixFQUFPLEVBQU8sUUFBUSxzQkFDdEIsRUFBSyxTQUFTLDBCQTVDbEIsRUErQ0UsVUFBVSxNQUFNLGlCQUNaLElBQUEiLCJmaWxlIjoiTGFuZGdpbmdDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGFuZGdpbmdDb250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gICAgQGl0eXBlID0gJ2NsaWNrJztcbiAgICBAaHRtbCA9ICQgJ2h0bWwnXG4gICAgaWYgQGh0bWwuaGFzQ2xhc3MoJ3RvdWNoJylcbiAgICAgIEBpdHlwZSA9ICd0b3VjaHN0YXJ0J1xuXG4gICAgQGZvcm0gPSAkKCcucmVnaXN0ZXItZm9ybScpXG5cblxuICAgICQubWFzay5kZWZpbml0aW9uc1snYyddID0gXCJb0JAt0K/QsC3Rj11cIlxuICAgIEBmb3JtLmZpbmQoJ2lucHV0LnRlbCcpLm1hc2sgXCIoOTk5KSA5OTktOTktOTlcIlxuICAgIEBmb3JtLmZpbmQoJ2lucHV0LmN5cicpLm1hc2sgXCJjYz9jY2NjY2NjY2NjY2NjY2NjY2NjY1wiXG4gICAgQGZvcm0uZmluZCgnaW5wdXQuY29kZScpLm1hc2sgXCIrOT85OTlcIlxuICAgIFxuICAgIFxuICAgIEBtZXNzYWdlID0gdGhpcy5mb3JtLnByZXYoKVxuXG4gICAgQGxhbmcgPSAkICduYXYubGFuZ3VhZ2UnXG4gICAgQGxhbmcub24gdGhpcy5pdHlwZSwgQHNlbGVjdExhbmd1YWdlXG4gICAgQGxhbmcuZmluZCgnYScpLm9uIHRoaXMuaXR5cGUsIEBzZWxlY3RMYW5ndWFnZVxuXG4gICAgQGZvcm0uZmluZCgnYnV0dG9uJykub24gdGhpcy5pdHlwZSwgQHRyeXN1Ym1pdFxuICAgIEBmb3JtLm9uICdzdWJtaXQnLCBAc3VibWl0XG5cbiAgc2VsZWN0TGFuZ3VhZ2U6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIEBsYW5nLmZpbmQoJ2EnKS50b2dnbGVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGh0bWwuYXR0ciAnbGFuZycsIEBsYW5nLmZpbmQoJy5zZWxlY3RlZCcpLmF0dHIoJ2RhdGEtbGFuZycpXG5cbiAgc3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZm9ybSA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgICQucG9zdChmb3JtLmF0dHIoJ2FjdGlvbicpLCBmb3JtLnNlcmlhbGl6ZSgpKS5jb21wbGV0ZShAZm9ybVNlbmQpXG5cbiAgZm9ybVNlbmQ6IChyZXNwb25jZSk9PlxuICAgIEBmb3JtLmhpZGUoKVxuICAgIEBtZXNzYWdlLnNob3coKVxuXG4gIHRyeXN1Ym1pdDogKGV2ZW50KT0+XG4gICAgYnV0dG9uID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgZm9ybSA9IGJ1dHRvbi5jbG9zZXN0KCdmb3JtLnJlZ2lzdGVyLWZvcm0nKVxuICAgIGZvcm0uYWRkQ2xhc3MoJ3ZhbGlkYXRpb24tc3RhcnQnKVxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5ICgpLT5cbiAgbmV3IExhbmRnaW5nQ29udHJvbGxlcigpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9