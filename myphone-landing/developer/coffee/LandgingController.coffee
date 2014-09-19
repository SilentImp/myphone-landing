class LandgingController
  constructor: ->

    @itype = 'click';
    @html = $ 'html'
    if @html.hasClass('touch')
      @itype = 'touchstart'

    @form = $('.register-form')
    
    @timer = $('.time')
    @moment = new moment()
    @ti = 0
    window.setInterval @timerUpdate, 1000


    $.mask.definitions['c'] = "[А-Яа-я]"
    @form.find('input.tel').mask "(999) 999-99-99"
    @form.find('input.cyr').mask "cc?cccccccccccccccccccc"
    @form.find('input.code').mask "+9?999"
    
    
    @message = this.form.prev()

    @lang = $ 'nav.language'
    @lang.on this.itype, @selectLanguage
    @lang.find('a').on this.itype, @selectLanguage

    @form.find('button').on this.itype, @trysubmit
    @form.on 'submit', @submit

  timerUpdate: =>
    if (@ti%2)==0
      sepator = ":"
    else
      sepator = " "
    @ti++
    @timer.text(@moment.format("h"+sepator+"mm"))

  selectLanguage: (event)=>
    event.preventDefault()
    event.stopPropagation()
    @lang.find('a').toggleClass 'selected'
    @html.attr 'lang', @lang.find('.selected').attr('data-lang')

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