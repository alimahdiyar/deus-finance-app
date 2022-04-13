import Migrator from './migrator'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { getOrCreateStore } from 'state'
import ThemeProvider from 'theme'

describe('Home', () => {
  let migrator: RenderResult

  beforeEach(() => {
    migrator = render(
      <Provider store={getOrCreateStore()}>
        <ThemeProvider>
          <Migrator />
        </ThemeProvider>
      </Provider>
    )
  })

  it('renders migrator', () => {
    expect(migrator).not.toBeNull()
  })

  it('shows connect wallet button when not connected', () => {
    const btn = migrator.findAllByRole('connectwallet')
    expect(btn).not.toBeNull()
  })
})
