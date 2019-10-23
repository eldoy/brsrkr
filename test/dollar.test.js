const $ = require('../dollar.js')

describe('haka', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should get the inner HTML', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    expect($('#app').html()).toBe('Hello')
  })

  it('should not get the inner HTML if does not exist', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    expect($('#pp').html()).toBeUndefined()
  })

  it('should insert into element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<span>Bye</span>')
    expect($('#app').html()).toBe('<span>Bye</span>')
  })

  it('should insert before element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>Before</div>', 'before')
    expect(document.body.innerHTML).toBe('<div>Before</div><div id="app">Hello</div>')
  })

  it('should insert before element short', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>Before</div>', 'b')
    expect(document.body.innerHTML).toBe('<div>Before</div><div id="app">Hello</div>')
  })

  it('should insert after element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>After</div>', 'after')
    expect(document.body.innerHTML).toBe('<div id=\"app\">Hello</div><div>After</div>')
  })

  it('should insert after element short', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>After</div>', 'a')
    expect(document.body.innerHTML).toBe('<div id=\"app\">Hello</div><div>After</div>')
  })

  it('should insert at top of element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>Top</div>', 'top')
    expect(document.body.innerHTML).toBe('<div id=\"app\"><div>Top</div>Hello</div>')
  })

  it('should insert at top of element short', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>Top</div>', 'top')
    expect(document.body.innerHTML).toBe('<div id=\"app\"><div>Top</div>Hello</div>')
  })

  it('should insert at end of element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>End</div>', 'end')
    expect(document.body.innerHTML).toBe('<div id=\"app\">Hello<div>End</div></div>')
  })

  it('should insert at end of element short', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>End</div>', 'e')
    expect(document.body.innerHTML).toBe('<div id=\"app\">Hello<div>End</div></div>')
  })

  it('should replace the element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>Replace</div>', 'replace')
    expect(document.body.innerHTML).toBe('<div>Replace</div>')
  })

  it('should replace the element short', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').html('<div>Replace</div>', 'r')
    expect(document.body.innerHTML).toBe('<div>Replace</div>')
  })

  it('should get the text of an element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    expect($('#app').text()).toBe('Hello')
  })

  it('should set the text of an element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app').text('Bye')
    $('#app', el => expect(el.textContent).toBe('Bye'))
  })

  it('should query an element', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    $('#app', x => expect(x.innerHTML).toBe('Hello'))
  })

  it('should query an element', async () => {
    document.body.innerHTML = `<ul><li>Hello</li><li>Bye</li></ul>`
    expect($('li').length).toBe(2)
    expect($('li').get(0).innerHTML).toBe('Hello')
    expect($('li').get(1).innerHTML).toBe('Bye')
  })

  it('should work with HTMLElements', async () => {
    document.body.innerHTML = `<div id="app">Hello</div>`
    let app = document.querySelector('#app')
    expect($(app).get(0).innerHTML).toBe('Hello')
  })

  it('should query from element as string', async () => {
    document.body.innerHTML = `<div id="app"><span>Hello</span></div>`
    expect($('span', '#app').get(0).textContent).toBe('Hello')
  })

  it('should query from element as element', async () => {
    document.body.innerHTML = `<div id="app"><span>Hello</span></div>`
    const app = document.getElementById('app')
    expect($('span', app).get(0).textContent).toBe('Hello')
  })

  it('should query all from element as string', async () => {
    document.body.innerHTML = `<div id="app"><span>Hello</span></div>`
    expect($('span', '#app').get(0).textContent).toBe('Hello')
  })

  it('should query all from element as string', async () => {
    document.body.innerHTML = `<div id="app"><span>Hello</span></div>`
    const app = document.getElementById('app')
    expect($('span', '#app').get(0).textContent).toBe('Hello')
  })
})
