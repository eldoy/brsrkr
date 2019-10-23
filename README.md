# BRSRKR
Tiny Javascript HTML and DOM manipulation library, encapsulation style.

### Install
`npm i brsrkr`

### Usage
```javascript
// Get HTML
$('#app').html()

// Insert HTML
$('#app').html('<div>Before</div>')

// Insert HTML before element
$('#app').html('<div>hello</div>', 'before')

// Insert HTML after element
$('#app').html('<div>hello</div>', 'after')

// Insert HTML at top of element
$('#app').html('<div>hello</div>', 'top')

// Insert HTML at end of element
$('#app').html('<div>hello</div>', 'end')

// Get text
$('#app').text()

// Insert text
$('#app').text('hello')

// Query DOM, uses callback
$('#app', el => el.textContent = 'hello')

// Function body applies to all matches
$('li', el => {
  el.style.color = 'yellow'
  el.textContent = 'hello'

  // Can use brsrkr here too
  $(el).html('<span>Nice!</span>')

  // Query only inside el
  $('span', el, span => {
    span.style.display = 'none'
  })
})

// Find all span inside '#el'
$('span', '#el', span => {
  span.style.opacity = 1
})

// Get by index
$('li').get(0)

// Get number of matches
$('li').length

```
ISC licensed. Enjoy!
