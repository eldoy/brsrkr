function $(s, r, fn) {
  if (typeof r == 'function') { fn = r; r = undefined }
  r = typeof r == 'string' ? document.querySelector(r) : r || document
  s = typeof s == 'string' ? r.querySelectorAll(s) : s
  if (s instanceof Element || s instanceof HTMLDocument) s = [s]
  if (typeof fn == 'function' && s.length)
    for (let i = 0; i < s.length; i++) fn(s[i])
  return {
    get(n) {
      return Number.isInteger(n) ? s[n] : s
    },
    get length() {
      return s.length
    },
    html(str, mod) {
      if (str) {
        for (let i = 0; i < s.length; i++) {
          !mod && (s[i].innerHTML = str) ||
          mod[0] == 'r' && (s[i].outerHTML = str) ||
          s[0].insertAdjacentHTML(
            mod[0] == 'b' && 'beforebegin' ||
            mod[0] == 'a' && 'afterend' ||
            mod[0] == 't' && 'afterbegin' ||
            mod[0] == 'e' && 'beforeend', str)
        }
        return this
      }
      return s[0] && s[0].innerHTML
    },
    text(str) {
      if (str) {
        for (let i = 0; i < s.length; i++)
          s[i].textContent = str
        return this
      }
      return s[0].textContent
    }
  }
}
module.exports = $
