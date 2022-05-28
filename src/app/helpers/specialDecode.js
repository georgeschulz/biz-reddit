export function specialDecode(input) {
    let noAmp = input.replace("amp;", "")
    return noAmp;
}

export default specialDecode;