# Typescript Setup

## Webpack

- **Webpack + ts-loader**
- Webpack + babel + @babel/preset-typescript

## Rollup

- Rollup + rollup-plugin-typescript
- Rollup + babel + @babel/preset-typescript
- **Rollup + babel + @babel/preset-typescript2**


UPD: Варианты при которых type-check происходит "на лету" выделены **жирным**. Но у этого есть минус, более медленно компилирование, поэтому если это важно (например для клиентского приложения) то лучше использовать babel.

UPD: [Бабель поджерживает только компиляцию](https://github.com/babel/babel/issues/8301#issuecomment-404108743).