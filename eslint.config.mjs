import { eslint } from '@aephonics/config';

const ignores = [
    'dist/**',
];

const globals = [
    'ZustandActions',
    'ZustandState',
];

const overrides = [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: { globals: Object.fromEntries(globals.map(e => [e, true])) },
    },
];

eslint.push(...overrides);
eslint.forEach(e => (e.ignores = ignores));

export default eslint;
