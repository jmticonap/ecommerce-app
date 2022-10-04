
export const numberToCurrency = value => (
    new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    }).format(
        value?.__proto__ === (1).__proto__ //comprobando que sea valor numerico
            ? value
            : parseFloat(value)
    )
)
