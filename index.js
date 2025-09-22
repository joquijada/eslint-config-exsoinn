import neostandard, { resolveIgnoresFromGitignore, plugins } from 'neostandard'

export default function exSoInnStyleConfig(options = {}) {
  const baseConfig = neostandard({ ignores: resolveIgnoresFromGitignore(), ...options })

  return [
    ...baseConfig,
    {
      plugins: {
        stylistic: plugins['@stylistic']
      },
      rules: {
        '@stylistic/space-before-function-paren': 'off',
        '@stylistic/quote-props': [ 'error', 'as-needed' ],
        '@stylistic/comma-dangle': [ 'error', 'never' ],
        '@stylistic/object-curly-spacing': [ 'error', 'always' ],
        '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
        '@stylistic/object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: false,
            allowAllPropertiesOnSameLine: true // allow all JSON properties on same line (do not put a key per line when reformatting
          }
        ],
        '@stylistic/object-curly-newline': [
          'error',
          {
            multiline: false,
            minProperties: 5,
            consistent: true
          }
        ],
        '@stylistic/array-bracket-newline': [
          'error',
          {
            multiline: true
          }
        ]
      }
    }
  ]
}
