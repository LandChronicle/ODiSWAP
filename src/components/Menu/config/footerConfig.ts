import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
       {
         label: t('Contact'),
         href: 'https://chronicle-land.gitbook.io/kr-land-chronicle/odiswap/contact',
         isHighlighted: true,
       },
       {
         label: t('DISCORD'),
         href: 'https://discord.gg/landchronicle',
       },
       {
         label: t('Litepaper'),
         href: 'https://chronicle-land.gitbook.io/kr-land-chronicle/odiswap/undefined',
       },
       {
         label: '—',
       },
    ],
  },
  {
    label: t('Developers'),
    items: [
       {
         label: t('Documentation'),
         href: 'https://chronicle-land.gitbook.io/kr-land-chronicle/odiswap/undefined',
       },
    ],
  },
]