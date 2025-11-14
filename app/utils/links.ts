import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Projects',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Texts',
  icon: 'i-lucide-file-text',
  to: '/blog'
},
{
  label: 'will delete',
  icon: 'i-lucide-mic',
  to: '/speaking'
},
{
  label: 'Biography',
  icon: 'i-lucide-mic',
  to: '/biography'
},
{
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}]
