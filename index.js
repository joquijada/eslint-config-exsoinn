module.exports = {
  plugins: ['@stylistic/ts'],
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'space-before-function-paren': 'off',
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false,
        allowAllPropertiesOnSameLine: true // allow all JSON properties on same line (do not put a key per line when reformatting
      }
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: false,
        minProperties: 5,
        consistent: true
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true
      }
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ]
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.ts'],
      extends: [
        'serverless-stack'
      ],
      rules: {
        '@stylistic/ts/type-annotation-spacing': 'error',
        'object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: false,
            allowAllPropertiesOnSameLine: true // allow all JSON properties on same line (do not put a key per line when reformatting
          }
        ],
        'object-curly-newline': [
          'error',
          {
            multiline: false,
            minProperties: 5,
            consistent: true
          }
        ],
        'array-bracket-newline': [
          'error',
          {
            multiline: true
          }
        ],
        'array-bracket-spacing': [
          'error',
          'always'
        ]
      }
    }
  ]
}
