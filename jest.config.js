module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  collectCoverage: false,
  globals: {
    'ts-jest': {
      diagnostics: false,
      moduleResolution: 'node',
      baseUrl: '.',
      paths: {
        'src/*': ['src/*'],
        '*': ['@types/*'],
      },
      experimentalDecorators: true,
      jsx: 'react',
      outDir: 'lib',
      allowSyntheticDefaultImports: true,
      preserveConstEnums: true,
      typeRoots: ['node_modules/@types'],
      importHelpers: true,
      esModuleInterop: true,
    },
  },
}
