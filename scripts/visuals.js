/**
 * Image to be changed
*/
const img = document.getElementById('mainImg');

/**
 * Button used to change the image
*/
const btnImg = document.getElementById('image-cycle');

/**
 * Dark mode toggle
 */
const darkToggle = document.getElementById('dark-mode-toggle')

/**
 * Images to be used
 */
const images = [
  'arkestar0.jpg', 
  'arkestar1.jpg', 
  'arkestar2.jpg', 
  'arkestar3.jpg', 
  'arkestar4.jpg', 
  'arkestar5.jpg',
  'arkestar6.jpg'
];

/**
 * Whether the dark mode is on. By default, dark mode is enabled.
 */
let isDark = localStorage.getItem('isDark') || 1

/**
 * Index of the image. Revert the the first image if nothing found
 * in the local storage.
 */
let imgIndex = localStorage.getItem('imgIndex') || 0

/*
 * Load image on page load.
 */
img.src = 'assets/img/arkestar/' + images[imgIndex]

/**
 * Load theme on page load.
 */
if (isDark == 1) toggleDarkMode(true)

/**
 * Change image when clicking the button.
 */
function changeImg() {
  imgIndex = (imgIndex + 1) % images.length
  img.src = 'assets/img/arkestar/' + images[imgIndex]
  localStorage.setItem('imgIndex', imgIndex)
}

/**
 * Toggles dark mode on or off.
 * @param {boolean} isDark true to set dark mode, false to set light mode.
 */
function toggleDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add('dark')
    localStorage.setItem('isDark', 1)
  } else {
    document.body.classList.remove('dark')
    localStorage.setItem('isDark', 0)
  }
}

/**
 * Listen for clicks on the image change button.
 */
btnImg.addEventListener('click', changeImg)

/**
 * Listen for clicks on the dark mode toggle.
 */
darkToggle.addEventListener('click', () => {
  isDark = localStorage.getItem('isDark')
  isDark == 1 ? toggleDarkMode(false) 
              : toggleDarkMode(true)
})