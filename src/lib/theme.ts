// Theme preference is stored under the same localStorage key and values that
// next-themes used ('light' | 'dark' | 'system'), so returning visitors keep
// their choice. The initial class is applied by the inline script in
// BaseLayout before first paint; this module handles changes after load.

type Theme = 'light' | 'dark'

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function otherTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'light' : 'dark'
}

export function setTheme(theme: Theme) {
  // Picking the theme the OS already prefers means "follow the system".
  try {
    localStorage.setItem('theme', theme === systemTheme() ? 'system' : theme)
  } catch {}

  // Suppress transitions so every element switches colors at once.
  let style = document.createElement('style')
  style.textContent = '*,*::before,*::after{transition:none!important}'
  document.head.appendChild(style)

  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme

  window.getComputedStyle(document.body)
  setTimeout(() => style.remove(), 1)
}
