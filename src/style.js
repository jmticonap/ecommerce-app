import { css } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

export const appStyleMUI = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        white: {
            light: '#FFF',
            main: '#FFF',
            dark: '#C2C2C2',
            contrastText: '#000',
        }
    }
})

export const myPalette = {
    title: '#c99fb6',
    mainButton: '#c99fb6',
    softPurple: '#c99fb6'

}

const _in = value => {

    if (value === undefined)
        return false
    else if ((value).__proto__ === (1).__proto__)
        return `${value}px`
    else if ((value).__proto__ === ('').__proto__)
        return value
    else
        return false
}
const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
const appStyle = {
    loading: {
        container: {
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backdropFilter: 'blur(5px)',
            backgroundColor: '#80808080',
            zIndex: 10
        }
    },
    dark: {
        title1: {
            color: 'grey',
            fontWeight: 600
        }
    },
    default: {
        login: {
            tryPanel: {
                display: 'flex',
                flexFlow: 'column nowrap',
                backgroundColor: 'var(--bs-info)',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                alignItems: 'center'
            },
            container: {
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: '90vh'
            }
        },
        quantitySelector: {
            container: {
                minWidth: '9rem',
                width: '9rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            },
            input: {
                border: 'none',
                padding: '0.5rem 0',
                width: '5rem',
                textAlign: 'center',
                '&:enabled,&:active,&:focus': {
                    outline: 'none',
                }
            },

        },
        title1: {
            color: 'hotpink',
            fontWeight: 600
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'center'
        },
        cartPanel: {
            container: visible => ({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1100,
                backdropFilter: visible ? 'blur(5px)' : 'blur(0px)',
                transition: '1s backdrop-filter',
                backgroundColor: 'rgba(1,1,1,0.35)'
            }),
            shop: visible => ({
                position: 'fixed',
                top: 0,
                right: visible ? '0' : '-100vw',
                height: '100vh',
                width: '420px',
                backgroundColor: 'var(--bs-body-bg)',
                padding: '2rem',
                boxShadow: '0 0 2rem black',
                opacity: visible ? '1' : '0',
                transition: '0.5s right, 0.5s opacity',
                zIndex: 30,
                overflow: 'scroll'
            }),
            shopTitle: {
                textAlign: 'center',
                paddingBottom: '2.5rem'
            },
            shopResume: {
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                marginTop: '5rem'
            },
            shopResumeItems: {
                textAlign: 'left',
                width: '50%'
            },
            shopResumeTotal: {
                textAlign: 'right',
                width: '50%'
            },
            shopBtnContainer: {
                width: '100%',
                textAlign: 'right',
                paddingTop: '1rem'
            },
            showShop: {
                right: '0',
                opacity: '1',
                transition: '0.5s right, 0.5s opacity'
            },
            cartArticle:{
                backgroundColor: 'aliceblue',
                borderRadius: '0.5rem',
                display: 'grid', 
                gridTemplateColumns: '128px auto',
                padding: '1rem 0',
                border: '1px solid transparent',
                '&:hover':{
                    border: '1px solid rgba(1,1,1,0.2)'
                }
            }
        },
        productCard: {
            container: {
                backgroundColor: '#D7F4FF',
                padding: '1rem',
                borderTopLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 0 3px 0px var(--bs-info)'
            },
            priceTag: _in => ({
                position: 'absolute',
                transform: 'rotate(-45deg)',
                top: '60px',
                right: '-8px',
                opacity: _in ? '1' : '0',
                transition: '0.5s opacity'
            })
        },
        home: {
            main: {
                display: 'flex',
                flexFlow: 'row nowrap'
            },
            categoryList: {
                listStyle: 'none',
                padding: '0'
            },
            filterLi: {
                textAlign: 'left',
                padding: '0.25rem'
            },
            filterLink: {
                padding: '0.25rem 1rem',
                backgroundColor: 'transparent',
                color: 'var(--bs-black)',
                borderRadius: '1rem',
                '&:hover': {
                    backgroundColor: 'var(--bs-primary)',
                    color: '#FFF'
                }
            },
            filterLinkActive: {
                padding: '0.25rem 1rem',
                borderRadius: '1rem',
                backgroundColor: 'var(--bs-primary)',
                color: '#FFF'
            },
            img: {
                width: 200,
                height: 'auto'
            },
            productListWrapper: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, calc(250px + 1rem))',//minmax(300px,310px)
                justifyContent: 'center',
                alignContent: 'center',
                rowGap: '2rem',
                width: '100%'
            },
        },
        imageSlider: {
            wrapper: {
                position: 'relative',
                overflow: 'auto',
                transition: '2s all ease'
            },
            loader: h => ({
                zIndex: 5,
                width: _in(h) || '200px',
                height: _in(h) || '200px',
                position: 'absolute',
                left: `calc(50% - ${_in(h / 2)})`,
                top: `calc(50% - ${_in(h / 2)})`
            }),
            btnLeft: {
                position: 'absolute',
                width: '50%',
                left: 0,
                top: 0,
                height: '100%',
                zIndex: 6
            },
            btnRight: {
                position: 'absolute',
                width: '50%',
                right: 0,
                top: 0,
                height: '100%',
                zIndex: 6
            },
            container: (w, h) => ({
                width: _in(w) || '200px',
                height: _in(h) || '200px'
            }),
            containerImgs: countImgs => ({
                width: `${countImgs * 100}%`,
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexFlow: 'row nowrap',
                gap: '0'
            }),
            list: (w, h) => ({
                display: 'flex',
                gap: 0,
                listStyle: 'none',
                width: _in(w) || '200px'
            }),
            img: {
                width: '100%',
                height: '100%',
                objectFit: 'scale-down'
            }
        },
        product: {
            container: {
                display: 'grid',
                gridTemplateColumns: '1fr',
                padding: '1rem 2rem',
                gap: '1rem',
                [mq[0]]: {

                },
                [mq[1]]: {

                },
                [mq[2]]: {
                    gridTemplateColumns: '6fr 4fr'
                },
                [mq[3]]: {

                }
            },
            addCartRow: {
                display: 'flex',
                justifyContent: 'space-between'
            },
            addCartBtn: {

                borderRadius: '2rem',
                padding: '0.5rem',

            },
            price: {
                fontSize: '1.5rem',
                color: '#FFF',
                backgroundColor: 'var(--bs-info)',
                padding: '0.25rem 1.25rem',
                borderRadius: '2rem'
            },
            imageControl: {
                display: 'flex',
                flexFlow: 'column nowrap',
                gap: '0'
            },
            slider: {
                width: '100%',
                minHeight: '370px',
                maxHeight: '600px'
            },
            thumbnailWrapper: {
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                gap: '1rem'
            },
            thumbnail: {
                width: '3rem',
                height: '3rem',
                objectFit: 'contain',
                border: '1px solid gray',
                '&:hover': {
                    border: '3px solid darkgray'
                }
            }
        }
    }
}

export default appStyle