import type { ComponentStory } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty /> : <></>
}

export const failure: ComponentStory<typeof Failure> = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const success: ComponentStory<typeof Success> = () => {
  const article = {
    id: 1,
    title: 'First Post',
    body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
    createdAt: '2020-01-01T12:34:56Z',
  }
  return Success ? <Success article={article} /> : <></>
}

export default { title: 'Cells/ArticleCell' }
