const size = {
    xs: '320px',
    sm: '568px',
    lg: '1024px',
}
const MaxSize = {
    Mxs: '500px',
    Msm: '823px',
    Mlg: '1200px',
}
//objeto para hacer referencia a los diferentes anchos minmos de los dispositivos para responsive desing
const device = {
    xs: `(min-width: ${size.xs}) and (max-width:${MaxSize.Mxs})`,
    sm: `(min-width: ${size.sm}) and (max-width:${MaxSize.Msm})`,
    lg: `(min-width: ${size.lg}) and (max-width:${MaxSize.Mlg})`
}
//eslint-disable-next-line
export default {size, device, MaxSize};