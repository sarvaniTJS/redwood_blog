import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { standard as standardComment } from 'src/components/CommentsCell/CommentsCell.mock'

import { standard as standardArticle } from '../ArticleCell/ArticleCell.mock'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    const article = standardArticle().article
    expect(() => {
      render(<Article article={article} />)
      expect(screen.getByText(article.title)).toBeInTheDocument()
      expect(screen.getByText(article.body)).toBeInTheDocument()
    }).not.toThrow()
  })
  it('renders comments when displaying a full blog post', async () => {
    const comment = standardComment().comments[0]
    const article = standardArticle().article

    render(<Article article={article} />)

    await waitFor(() =>
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    )
  })

  it('renders a summary of a blog post', () => {
    const article = standardArticle().article

    render(<Article article={article} summary={true} />)

    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument()
  })

  it('does not render comments when displaying a summary', async () => {
    const comment = standardComment().comments[0]
    const article = standardArticle().article

    render(<Article article={article} summary={true} />)

    await waitFor(() =>
      expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
    )
  })
})
