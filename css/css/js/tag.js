const colors = {
    p: '#388e3c',
    div: '#fea24a',
    span: '#242da2',
    ul: '#ad3a56',
    ol: '#901adf',
    section: '#32c3df',
    header: '#37fa65',
    nav: '#0f23',
    main: '#01a278',
    footer: '#3aa000',
    form: '#aaa000',
    body: '#ee12ca',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})