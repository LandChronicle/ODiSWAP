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
       //{
       //  label: t('Brand'),
        // href: 'https://chronicle-land.gitbook.io/kr-land-chronicle/odiswap/undefined',
       //},
       //{
        // label: t('Blog'),
         //href: 'https://medium.com/pancakeswap',
       //},
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
      // {
        // label: t('Online Store'),
        // href: 'https://pancakeswap.creator-spring.com/',
       //},
    ],
  },
  //{
    //label: t('Help'),
    //items: [
     //  {
      //   label: t('Customer Support'),
      //   href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
      // },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.pancakeswap.finance/help/troubleshooting',
      // },
      // {
      //   label: t('Guides'),
      //   href: 'https://docs.pancakeswap.finance/get-started',
      // },
   // ],
  //},
  {
    label: t('Developers'),
    items: [
       //{
        // label: 'Github',
         //href: 'https://github.com/pancakeswap',
      // },
       {
         label: t('Documentation'),
         href: 'https://chronicle-land.gitbook.io/kr-land-chronicle/odiswap/undefined',
       },
       //{
        // label: t('Bug Bounty'),
        // href: 'https://docs.pancakeswap.finance/code/bug-bounty',
       //},
      // {
       //  label: t('Audits'),
        // href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
       //},
      // {
       //  label: t('Careers'),
        // href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
      // },
    ],
  },
]