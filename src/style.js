import { css } from '@emotion/react'

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
    dark: {
        title1: {
            color: 'grey',
            fontWeight: 600
        }
    },
    default: {
        title1: {
            color: 'hotpink',
            fontWeight: 600
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'center'
        },
        cart: {
            shop: visible => ({
                position: 'fixed',
                top: 0,
                right: visible ? '0' : '-100vw',
                height: '100vh',
                width: '420px',
                backgroundColor: 'var(--body-color)',
                padding: '2rem',
                boxShadow: '0 0 2rem black',
                opacity: visible ? '1' : '0',
                transition: visible ? '0.5s right, 0.5s opacity' : '1s right, 1s opacity',
                zIndex: 30
            }),
            shopTitle: {
                textAlign: 'center',
                paddingBottom: '5rem'
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
            }
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px,310px))',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '1rem',
                width: '100%'
            },
            card: {
                backgroundColor: '#FFF',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 0 3px 0px var(--bs-info)'
            }
        },
        imageSlider: {
            wrapper: {
                position: 'relative',
                overflow: 'auto'
            },
            loader: (h) => ({
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
            list: (w, h) => ({
                display: 'flex',
                gap: 0,
                listStyle: 'none',
                width: _in(w) || '200px'
            }),
            img: {
                position: 'absolute',
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
            }
        }
    }
}

export default appStyle