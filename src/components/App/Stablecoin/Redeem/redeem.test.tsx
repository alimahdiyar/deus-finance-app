import { Redeem } from 'components/App/Stablecoin'
import { render } from '@testing-library/react'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Redeem />)

    const heading = screen.getByText('Claim')

    expect(heading).toBeInTheDocument()
  })
})
