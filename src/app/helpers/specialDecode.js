export function specialDecode(input) {
    var doc =  new DOMParser().parseFromString(input, "text/html")
    let text = doc.documentElement.textContent;
    let noAmp = text.replace("amp;", "")
    return noAmp;
}

export default specialDecode;