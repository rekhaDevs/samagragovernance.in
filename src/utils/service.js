const baseUrl = 'https://api.samagragovernance.in/';
const filterUrl = (str) => {
    let result = '';
    str = str.replace(/ /g, '-').toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if ('ascdfeghijklmnopqrstuvwxyz0123456789-'.indexOf(str[i]) > -1) {
            result += str[i];
        }
    }
    return result;
};
export default {
    baseUrl,
    filterUrl
}
