import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" height="36" fill="none" viewBox="0 0 445 112">
    <path fill="#000" d="M45.718 17.085c4.664-7.75 15.9-7.75 20.564 0l5.53 9.188a12 12 0 0 0 7.574 5.503l10.448 2.42c8.811 2.04 12.283 12.727 6.354 19.557l-7.03 8.099a12 12 0 0 0-2.893 8.904l.927 10.684c.782 9.01-8.308 15.615-16.636 12.087l-9.875-4.184a12 12 0 0 0-9.362 0l-9.875 4.184c-8.328 3.528-17.418-3.076-16.636-12.087l.927-10.684a12 12 0 0 0-2.893-8.904l-7.03-8.099c-5.93-6.83-2.457-17.516 6.354-19.557l10.448-2.42a12 12 0 0 0 7.575-5.503l5.53-9.188Z"/>
    <path fill="#D9D9D9" fillRule="evenodd" d="M42 84.272c23.196 0 42-18.804 42-42a42.12 42.12 0 0 0-1.123-9.687l6.957 1.611c8.811 2.04 12.283 12.727 6.354 19.557l-7.03 8.099a12 12 0 0 0-2.893 8.904l.927 10.684c.782 9.01-8.308 15.615-16.636 12.087l-9.875-4.184a12 12 0 0 0-9.362 0l-9.875 4.184c-8.328 3.528-17.418-3.076-16.636-12.087l.07-.805A41.851 41.851 0 0 0 42 84.272Zm-17.122-3.637C10.216 74.082 0 59.37 0 42.272c0-23.195 18.804-42 42-42 19.862 0 36.504 13.787 40.877 32.313l-3.491-.809a12 12 0 0 1-7.575-5.503l-5.53-9.188c-4.663-7.75-15.899-7.75-20.563 0l-5.53 9.188a12 12 0 0 1-7.574 5.503l-10.447 2.42c-8.812 2.04-12.284 12.727-6.355 19.557l7.03 8.099a12 12 0 0 1 2.893 8.904l-.857 9.88Z" clip-rule="evenodd"/>
    <path fill="#000" d="M123 70.488a4 4 0 0 1-4-4v-1.673a4 4 0 0 1 .98-2.623l17.118-19.709a1.414 1.414 0 1 1 1.068 2.341h-14.718a4 4 0 0 1-4-4V39.8a4 4 0 0 1 4-4h22.912a4 4 0 0 1 4 4v1.609c0 .964-.348 1.896-.981 2.624l-17.153 19.74a1.433 1.433 0 1 1-1.082-2.373H147a4 4 0 0 1 4 4v1.088a4 4 0 0 1-4 4h-24Zm50.388.576c-3.798 0-7.168-.768-10.112-2.304-2.944-1.536-5.27-3.648-6.977-6.336-1.664-2.73-2.495-5.845-2.495-9.344 0-3.499.831-6.592 2.495-9.28 1.707-2.688 4.033-4.779 6.977-6.272 2.944-1.536 6.314-2.304 10.112-2.304 3.797 0 7.168.768 10.112 2.304 2.986 1.493 5.312 3.584 6.976 6.272 1.664 2.688 2.496 5.781 2.496 9.28 0 3.499-.832 6.613-2.496 9.344-1.664 2.688-3.99 4.8-6.976 6.336-2.944 1.536-6.315 2.304-10.112 2.304Zm0-9.664c1.408 0 2.645-.32 3.712-.96 1.109-.64 1.984-1.579 2.624-2.816.64-1.28.96-2.795.96-4.544 0-1.75-.32-3.221-.96-4.416-.64-1.237-1.515-2.176-2.624-2.816-1.067-.64-2.304-.96-3.712-.96-1.366 0-2.603.32-3.713.96-1.066.64-1.941 1.579-2.623 2.816-.64 1.195-.961 2.667-.961 4.416 0 1.75.321 3.264.961 4.544.682 1.237 1.557 2.176 2.623 2.816 1.11.64 2.347.96 3.713.96Zm29.216 9.088a4 4 0 0 1-4-4V39.8a4 4 0 0 1 4-4h5.391c1.212 0 2.193.982 2.193 2.193v4.963c0 .83-1.093 1.134-1.52.422a.792.792 0 0 1-.054-.72c1.033-2.415 2.646-4.232 4.838-5.45 1.311-.752 2.78-1.29 4.408-1.615 2.166-.432 3.977 1.422 3.977 3.631v5.465c0 .778-.695 1.351-1.472 1.351a11.67 11.67 0 0 0-1.28-.064c-2.475 0-4.481.683-6.017 2.048-1.535 1.323-2.303 3.499-2.303 6.528v11.936a4 4 0 0 1-4 4h-4.161Zm47.372 0a4 4 0 0 1-4-4v-1.562c0-.593-.143-1.176-.416-1.702a3.692 3.692 0 0 1-.416-1.702V50.52c0-1.92-.597-3.392-1.792-4.416-1.152-1.067-3.008-1.6-5.568-1.6-1.664 0-3.349.277-5.056.832-2.418.725-5.405.053-6.527-2.208l-.341-.686c-.901-1.817-.307-4.053 1.561-4.844a26.416 26.416 0 0 1 3.899-1.286c2.773-.725 5.525-1.088 8.256-1.088 5.632 0 9.984 1.301 13.056 3.904 3.115 2.56 4.672 6.592 4.672 12.096v15.264a4 4 0 0 1-4 4h-3.328Zm-14.24.576c-2.773 0-5.12-.47-7.04-1.408-1.92-.939-3.392-2.219-4.416-3.84-.981-1.621-1.472-3.435-1.472-5.44 0-2.133.533-3.968 1.6-5.504 1.109-1.579 2.795-2.773 5.056-3.584 2.261-.853 5.184-1.28 8.768-1.28h5.024a3.168 3.168 0 1 1 0 6.336h-3.36c-1.963 0-3.349.32-4.16.96-.768.64-1.152 1.493-1.152 2.56s.405 1.92 1.216 2.56c.811.64 1.92.96 3.328.96 1.323 0 2.517-.32 3.584-.96 1.175-.723 3.342-.622 3.822.671l.097.26c.115.31.134.65.035.965-.675 2.15-1.887 3.8-3.634 4.952-1.835 1.195-4.267 1.792-7.296 1.792Zm47.409 0c-3.84 0-7.275-.768-10.304-2.304-2.987-1.536-5.333-3.648-7.04-6.336-1.707-2.73-2.56-5.845-2.56-9.344 0-3.499.853-6.592 2.56-9.28 1.707-2.688 4.053-4.779 7.04-6.272 3.029-1.536 6.464-2.304 10.304-2.304 3.925 0 7.317.832 10.176 2.496 1.764 1.027 3.212 2.314 4.342 3.861 1.216 1.664.337 3.894-1.498 4.83l-2.58 1.316c-1.979 1.01-4.289.031-6.056-1.316a6.294 6.294 0 0 0-.544-.371 7.08 7.08 0 0 0-3.904-1.152c-1.408 0-2.688.32-3.84.96-1.152.64-2.069 1.579-2.752 2.816-.64 1.195-.96 2.667-.96 4.416 0 1.792.32 3.307.96 4.544.683 1.237 1.6 2.176 2.752 2.816 1.152.64 2.432.96 3.84.96a7.385 7.385 0 0 0 3.904-1.088c.195-.125.385-.262.57-.41 1.734-1.39 4.051-2.351 6.03-1.341l2.58 1.316c1.835.936 2.714 3.166 1.498 4.83-1.13 1.547-2.578 2.834-4.342 3.861-2.859 1.664-6.251 2.496-10.176 2.496Zm43.302-35.84c2.688 0 5.119.555 7.295 1.664 2.176 1.067 3.883 2.73 5.121 4.992 1.28 2.261 1.92 5.184 1.92 8.768v15.84a4 4 0 0 1-4 4h-4.161a4 4 0 0 1-4-4V52.632c0-2.475-.511-4.267-1.535-5.376-.982-1.152-2.368-1.728-4.161-1.728-1.28 0-2.453.299-3.52.896-1.066.555-1.898 1.43-2.495 2.624-.598 1.195-.897 2.752-.897 4.672v12.768a4 4 0 0 1-4 4h-4.159a4 4 0 0 1-4-4V27a4 4 0 0 1 4-4h4.159a4 4 0 0 1 4 4v15.55c0 1.135-1.378 1.696-2.171.885-.384-.393-.476-.992-.193-1.462 1.274-2.117 2.937-3.727 4.989-4.829 2.304-1.28 4.906-1.92 7.808-1.92Zm39.058 21.76c-2.503 2.55-6.835.722-6.757-2.85l.065-2.937a4 4 0 0 1 1.21-2.779l11.805-11.485a4.002 4.002 0 0 1 2.79-1.133h3.333c3.533 0 5.331 4.245 2.874 6.783l-9.112 9.409-6.208 4.992Zm-13.088 13.504a4 4 0 0 1-4-4V27a4 4 0 0 1 4-4h4.16a4 4 0 0 1 4 4v39.488a4 4 0 0 1-4 4h-4.16Zm23.397 0a4 4 0 0 1-3.126-1.505l-7.419-9.296a4 4 0 0 1 .015-5.01l2.377-2.94a4 4 0 0 1 6.257.044l9.61 12.236c2.061 2.625.191 6.471-3.146 6.471h-4.568Zm41.037 0a4 4 0 0 1-4-4v-1.562c0-.593-.143-1.176-.416-1.702a3.692 3.692 0 0 1-.416-1.702V50.52c0-1.92-.597-3.392-1.792-4.416-1.152-1.067-3.008-1.6-5.568-1.6-1.664 0-3.349.277-5.056.832-2.418.725-5.405.053-6.527-2.208l-.341-.686c-.901-1.817-.307-4.053 1.561-4.844a26.416 26.416 0 0 1 3.899-1.286c2.773-.725 5.525-1.088 8.256-1.088 5.632 0 9.984 1.301 13.056 3.904 3.115 2.56 4.672 6.592 4.672 12.096v15.264a4 4 0 0 1-4 4h-3.328Zm-14.24.576c-2.773 0-5.12-.47-7.04-1.408-1.92-.939-3.392-2.219-4.416-3.84-.981-1.621-1.472-3.435-1.472-5.44 0-2.133.533-3.968 1.6-5.504 1.109-1.579 2.795-2.773 5.056-3.584 2.261-.853 5.184-1.28 8.768-1.28h5.024a3.168 3.168 0 1 1 0 6.336h-3.36c-1.963 0-3.349.32-4.16.96-.768.64-1.152 1.493-1.152 2.56s.405 1.92 1.216 2.56c.811.64 1.92.96 3.328.96 1.323 0 2.517-.32 3.584-.96 1.175-.723 3.342-.622 3.822.671l.097.26c.115.31.134.65.035.965-.675 2.15-1.887 3.8-3.634 4.952-1.835 1.195-4.267 1.792-7.296 1.792Z"/>
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/zorachka/zorachka/tree/main/packages/docs'
  },
  docsRepositoryBase: 'https://github.com/zorachka/zorachka/tree/main/packages/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Zorachka — The PHP Framework'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Zorachka documentation"
        />
        <meta
          name="og:description"
          content="Zorachka documentation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Zorachka — The PHP Framework' : 'Zorachka — The PHP Framework'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Zorachka" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © 2022 — {new Date().getFullYear()} The Zorachka Project.
        </p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config