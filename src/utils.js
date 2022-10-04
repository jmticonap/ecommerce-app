
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

export const getUserSesion = () => {
    return {
        email: localStorage.getItem('email'),
        token: localStorage.getItem('token')
    }
}

export const getConfig = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}