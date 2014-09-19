class LandgingController
  constructor: ->

    @itype = 'click';
    @html = $ 'html'
    if @html.hasClass('touch')
      @itype = 'touchstart'

    @form = $('.register-form')


    $.mask.definitions['c'] = "[А-Яа-я]"
    @form.find('input.tel').mask "(999) 999-99-99"
    @form.find('input.cyr').mask "cc?cccccccccccccccccccc"
    @form.find('input.code').mask "+9?999"
    
    
    @message = this.form.prev()

    @lang = $ 'nav.language'
    @lang.find('a').on this.itype, @selectLanguage

    @form.find('button').on this.itype, @trysubmit
    @form.on 'submit', @submit

  selectLanguage: (event)=>
    event.preventDefault()
    link = $ event.currentTarget
    @lang.find('.selected').removeClass 'selected'
    link.addClass 'selected'
    @html.attr 'lang', link.attr('data-lang')

  submit: (event)=>
    event.preventDefault()
    form = $ event.currentTarget
    $.post(form.attr('action'), form.serialize()).complete(@formSend)

  formSend: (responce)=>
    @form.hide()
    @message.show()

  trysubmit: (event)=>
    button = $ event.currentTarget
    form = button.closest('form.register-form')
    form.addClass('validation-start')


$(document).ready ()->
  new LandgingController()