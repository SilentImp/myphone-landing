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

    @form.find('.code-widget input').on 'change', @codeChange
    @form.find('select').on 'change', @codeSelectChange

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
      @lang.find('a').trigger 'click'

  ip2Country: (obj)=>
    switch obj.country_code
      when 'AZ' 
        @language = 'AZ'
        @lang.find('a').trigger 'click'
      else
        @language = 'RU'
    localStorage.language = @language

  showRules: (event)=>
    event.preventDefault()
    @html.addClass 'rules'
    $(event.currentTarget).closest('.page').find('.rules').show()
    window.scrollTo 0, 0

  closeRules: (event)=>
    @html.removeClass 'rules'
    $(event.currentTarget.parentNode).hide()
    window.scrollTo 0, 0
    
  codeSelectChange: (event)=>
    element = $ event.currentTarget
    value = element.val()
    wrapper = element.closest('.code-widget')
    current = wrapper.find('.current .value')
    current.text value
    wrapper.find('input[type="radio"][name="code"][value="'+value+'"]').trigger 'click'

  codeChange: (event)=>
    element = $ event.currentTarget
    wrapper = element.closest('.code-widget')
    current = wrapper.find('.current .value')
    current.text(element.val())
    wrapper.addClass 'changed'
    window.setTimeout(()->
      wrapper.removeClass 'changed'
    , 500)


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
    @lang.find('a').toggleClass 'selected'
    @language = @lang.find('.selected').attr('data-lang')
    localStorage.language = @language
    @html.attr 'lang', @language

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
  document.landing = new LandgingController()