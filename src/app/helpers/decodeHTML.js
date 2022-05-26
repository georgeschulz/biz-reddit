export function htmlDecode(input) {
    const paragraphs = input.split("\n");
    const parsedParagraphs = [];

    paragraphs.forEach(paragraph => {
        var doc = new DOMParser().parseFromString(paragraph, "text/html");
        parsedParagraphs.push(doc.documentElement.textContent)
    })

    return parsedParagraphs.map(p => <p>{p}</p>);
}

export default htmlDecode;