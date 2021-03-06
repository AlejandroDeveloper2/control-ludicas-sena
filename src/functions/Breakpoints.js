const size = {
    xs: '280px',
    sm: '540px',
    lg: '1024px',
}
const MaxSize = {
    Mxs: '539px',
    Msm: '1023px',
    Mlg: '1500px',
}
//objeto para hacer referencia a los diferentes anchos minmos de los dispositivos para responsive desing
const device = {
    xs: `(min-width: ${size.xs}) and (max-width:${MaxSize.Mxs})`,
    sm: `(min-width: ${size.sm}) and (max-width:${MaxSize.Msm})`,
    lg: `(min-width: ${size.lg}) and (max-width:${MaxSize.Mlg})`
}
//eslint-disable-next-line
export default {size, device, MaxSize};