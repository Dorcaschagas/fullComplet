function loadPages(pages) {
    console.log(`${pages}.html`)
    $(".body").load(`${pages}.html`)
}

function search() {
    let pesquisa = $('.search').val()
    console.log(pesquisa)
}

search() 