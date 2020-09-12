module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 禁止或强制在单行代码块中使用空格
        'block-spacing': [2, 'always'],
        // 方法名和刮号之间需要多少格空格always（默认）需要一个空格， http://www.verydoc.net/eslint/00003564.html
        "space-before-function-paren": ["error", "always"],

    }
}