
const _in = value => {

    if(value === undefined)
        return false
    else if((value).__proto__===(1).__proto__)
        return `${value}px`
    else if ((value).__proto__===('').__proto__)
        return value
    else
        return false
}

const appStyle = {
    dark:{
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
        home:{
            img:{
                width: 200,
                height: 'auto'
            },
            productListWrapper:{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(390px,400px))',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '1rem',
                width: '100%'
            }
        },
        imageSlider:{
            wrapper: (w,h) => ({
                position: 'relative',
                width: _in(w)||'200px',
                overflow: 'auto'
            }),
            loader: (h) =>({
                zIndex: 5,
                width: _in(h)||'200px',
                height: _in(h)||'200px',
                position: 'absolute',
                left: `calc(50% - ${_in(h/2)})`,
                top: `calc(50% - ${_in(h/2)})`
            }),
            btnLeft:{
                position: 'absolute',
                width: '50%',
                left: 0,
                top: 0,
                height: '100%',
                zIndex: 6
            },
            btnRight:{
                position: 'absolute',
                width: '50%',
                right: 0,
                top: 0,
                height: '100%',
                zIndex: 6
            },
            container:(w,h) =>({
                width: _in(w)||'200px',
                height: _in(h)||'200px'
            }),
            list:(w,h) => ({
                display: 'flex',
                gap: 0,
                listStyle: 'none',
                width: _in(w)||'200px'
            }),
            img: {
                position: 'relative',
                width: '100%',
                height: '100%',
                objectFit: 'scale-down'
            }
        }
    }
}

export default appStyle