function loadPages(pages) {
    console.log(`${pages}.html`)
    $(".body").load(`${pages}.html`)
}

$('.graficos').click(function(){
    $(".content").addClass('d-none')
    $(".sectionGraf").removeClass('d-none')
})


function search() {
    let pesquisa = $('.search').val()
    console.log(pesquisa)
}

search() 