class LandgingController
  constructor: ->
    @itype = 'click';
    @html = $ 'html'
    if @html.hasClass('touch')
      @itype = 'touchstart'
    @form = $('.register-form')
    @timer = $('.time')
    @ti = 0
    window.setInterval @timerUpdate, 1000
    @timerUpdate()

    @form.find('input.tel').mask "(999) 999-99-99"
    @form.find('input.code').mask "+9?999"

    $('.rules .close').on @itype, @closeRules
    $('.show-rules').on @itype, @showRules
    
    @message = this.form.prev()

    @lang = $ 'nav.language'
    @lang.on this.itype, @selectLanguage
    @lang.find('a').on this.itype, @selectLanguage

    @form.find('button').on this.itype, @trysubmit
    @form.on 'submit', @submit

    @language = localStorage.language || null


    if @language == null
      $.getJSON("http://www.telize.com/geoip", @ip2Country)
    else if @language == 'AZ'
      @lang.trigger(this.itype)

  ip2Country: (obj)=>
    switch obj.country_code
      when 'AZ' 
        @language = 'AZ'
        @lang.trigger(this.itype)
      else
        @language = 'RU'
    localStorage.language = @language

  showRules: (event)=>
    event.preventDefault()
    event.stopPropagation()
    if event.gesture
      event.gesture.stopPropagation()
      event.gesture.preventDefault()
    @html.addClass 'rules'
    $(event.currentTarget).closest('.page').find('.rules').show()
    window.scrollTo 0, 0
    return false

  closeRules: (event)=>
    event.preventDefault()
    event.stopPropagation()
    if event.gesture
      event.gesture.stopPropagation()
      event.gesture.preventDefault()
    @html.removeClass 'rules'
    $(event.currentTarget.parentNode).hide()
    window.scrollTo 0, 0
    return false

  timerUpdate: =>
    if (@ti%2)==0
      sepator = ":"
    else
      sepator = " "
    @ti++
    @timer.text(moment().format("HH"+sepator+"mm"))

  selectLanguage: (event)=>
    event.preventDefault()
    event.stopPropagation()
    if event.gesture
      event.gesture.stopPropagation()
      event.gesture.preventDefault()
    @lang.find('a').toggleClass 'selected'
    @language = @lang.find('.selected').attr('data-lang')
    localStorage.language = @language
    @html.attr 'lang', @language
    return false

  submit: (event)=>
    event.preventDefault()
    event.stopPropagation()
    if event.gesture
      event.gesture.stopPropagation()
      event.gesture.preventDefault()
    form = $ event.currentTarget
    if form.find('input:invalid').length==0
      $.post(form.attr('action'), form.serialize()).complete(@formSend)
    return false

  formSend: (responce)=>
    @form.hide()
    @message.show()

  trysubmit: (event)=>
    button = $ event.currentTarget
    form = button.closest('form.register-form')
    form.addClass('validation-start')

$(document).ready ()->
  new LandgingController()