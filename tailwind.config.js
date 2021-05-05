module.exports = {
    purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            courier: [
                'Roboto Mono',
                'Source Code Pro',
                'Menlo',
                'Courier',
                'monospace',
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
