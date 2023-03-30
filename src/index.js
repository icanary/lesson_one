import data from './data'
import './index.scss'

const bg = document.querySelector('#bg')
const root = document.querySelector('#app')

let current_name = ''
let is_playing = false
const audio = document.querySelector('audio')
const audioSource = document.querySelector('source')

function renderItem(item) {
  const li = document.createElement('li')
  li.textContent = item.name
  li.classList.add('main-button')
  li.addEventListener('click', () => {
    bg.style.backgroundImage = 'url(' + item.image + ')'
    togglePlay(item.name)
  })
  li.style.backgroundImage = 'url(' + item.image + ')'
  root.append(li)
  if (!current_name) {
    bg.style.backgroundImage = 'url(' + item.image + ')'
    current_name = item.name
  }
}

data.forEach(renderItem)

audio.addEventListener('play', (event) => {
  is_playing = true
})
audio.addEventListener('playing', (event) => {
  is_playing = true
})
audio.addEventListener('ended', (event) => {
  is_playing = false
})
audio.addEventListener('pause', (event) => {
  is_playing = false
})

function togglePlay(name) {
  if (name === current_name) {
    if (is_playing) {
      audio.pause()
    } else {
      audio.play()
    }
  } else {
    audio.pause()
    audioSource.setAttribute('src', name)
    audio.load()
    audio.play()
  }
  current_name = name
}
