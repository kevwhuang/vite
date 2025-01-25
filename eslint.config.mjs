import { eslint } from '@aephonics/config';

const overrides = [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                ZustandActions: true,
                ZustandState: true,
            },
        },
        rules: {},
    },
];

const ignores = [
    'dist/**',
];

eslint.push(...overrides);
eslint.forEach(e => (e.ignores = ignores));

export default eslint;
