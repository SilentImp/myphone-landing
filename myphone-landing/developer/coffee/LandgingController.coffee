class LandgingController
  constructor: ()->
    $.mask.definitions['c'] = "[А-Яа-я]"
    $('input.tel').mask "(999) 999-99-99"
    $('input.cyr').mask "cc?cccccccccccccccccccc"
    $('input.code').mask "+9?999"
    
    this.form = $ '.register-form'
    this.message = $ '.ok-message'

    this.lang = $ 'nav.language'
    this.lang.find('a').on 'click', @selectLanguage

    this.form.find('button').on 'click', @trysubmit
    this.form.on 'submit', @submit

  selectLanguage: (event)=>
    event.preventDefault()
    link = $ event.currentTarget
    this.lang.find('.selected').removeClass 'selected'
    link.addClass 'selected'
    $('html').attr 'lang', link.attr('data-lang')

  submit: (event)=>
    event.preventDefault()
    $.post(this.form.attr('action'), this.form.serialize()).complete(@formSend)

  formSend: (responce)=>
    this.form.hide()
    this.message.show()

  trysubmit: (event)=>
    this.form.addClass('validation-start')


$(document).ready ()->
  new LandgingController()