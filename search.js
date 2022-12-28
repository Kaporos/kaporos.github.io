window.index = window.index ? window.index : elasticlunr.Index.load(window.searchIndex);


function search(e) {
    const term = e.target.value
    const results =  index.search(term, {expand: true});
    return results.map(x => {
    let body = x.doc.body
    let title = x.doc.title
    let index = body.toLowerCase().indexOf(term.toLowerCase())
    let titleIndex = title.toLowerCase().indexOf(term.toLowerCase())
    let bodyWord = "";
    let titleWord = "";
    if (titleIndex >= 0) {
        titleWord = title.slice(titleIndex, title.length).split(" ").slice(0, term.split(" ").length).join(" ").split("").splice(0, term.length).join("")
    } else {
        titleWord = ""
    }
    if (index >= 0) {
        bodyWord = body.slice(index, body.length).split(" ").slice(0, term.split(" ").length).join(" ").split("").splice(0, term.length).join("")
    } else {
        bodyWord = ""
    }
    if (index > 15) {
        index = index - 15
    } else {
        index = 0
    }
    body = body.slice(index, index+100)
    body = body.replace(bodyWord,"<strong>"+bodyWord+"</strong>")
    title = title.replace(titleWord,"<strong>"+titleWord+"</strong>")
    return {
        title: title,
        url: x.doc.id,
        body: body
    }})
}