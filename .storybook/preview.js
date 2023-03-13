import '../src/index.css'
import 'tailwindcss/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    darkMode: {
      current: 'light',
    },
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          {
            name: 'light',
            value: '#FFFFFF',
          },
        ],
      },
    },
  },
}
