import { DocSearch, DocSearchProps } from '@mussi/docsearch'
import '~/styles/docsearch.css'

const options: Partial<DocSearchProps> = import.meta.env.DEV
  ? {
    transformItems: (items) => {
      return items.map((item) => {
        const getRelativePath = (url: string) => {
          const { pathname, hash } = new URL(url)
          return pathname + hash
        }
        return Object.assign({}, item, { url: getRelativePath(item.url) })
      })
    },
  }
  : {}

const IlesDocSearch = (props: Partial<DocSearchProps>) =>
  <DocSearch
    appId="GERZE019PN"
    apiKey="cdb4a3df8ecf73fadf6bde873fc1b0d2"
    indexName="iles"
    { ...options }
    { ...props }
  />

export default IlesDocSearch
