document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menuClose = document.querySelector('.menu__close')
    const searchBtn = document.querySelector('.search-btn')
    const menu = document.querySelector('.menu')
    const search = document.querySelector('.search')
    const bodyElement = document.body



    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--active')
        menuBtn.classList.toggle('menu-btn--active')
        bodyElement.classList.toggle('overflow')
    })

    searchBtn.addEventListener('click', () => {
        search.classList.toggle('search--active')
    })


    const menuLinkLlist = document.querySelector('.menu__link-list')
    const menuList2 = document.querySelector('.menu__list-2')

    // menuLinkLlist.addEventListener('click', () => {
        
    // })


    // menuList2.addEventListener('mouseout', () => {
    //     menuList2.classList.remove('menu__list-2--active')
    //     let i = 0
    //     i++
    //     if(i) {
    //         console.log('тес-1')
    //     }
    // })
    menuLinkLlist.addEventListener('mouseover', () => {
        menuList2.classList.add('menu__list-2-dest--active')
    })
    menuLinkLlist.addEventListener('mouseout', () => {
        menuList2.classList.remove('menu__list-2-dest--active')
    })
    menuLinkLlist.addEventListener('click', () => {
        if(window.innerWidth < 800) {
            menuList2.classList.toggle('menu__list-2--active')
        }
    })


});