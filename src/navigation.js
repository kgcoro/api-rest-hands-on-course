window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#genres=')) {
        categoriesPage();
    } else {
        homePage();
    }
}

function homePage() {
    getTrendingMoviesPreview();
    getCategoriesMoviesPreview();
    console.log('HOME!!')
}

function searchPage() {
    console.log('SEARCH!!')
}

function categoriesPage() {
    console.log('CATEGORIES!!')
}

function movieDetailsPage() {
    console.log('MOVIES!!')
}

function trendsPage() {
    console.log('TRENDS!!')
}