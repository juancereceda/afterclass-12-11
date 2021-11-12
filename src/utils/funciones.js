export function capitalize(str) {
    const firstLetter = str.slice(0,1).toUpperCase();
    const rest = str.slice(1,str.length);
    return firstLetter + rest
}