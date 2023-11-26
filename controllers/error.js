function get404(req, res, next) {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: null})
}

module.exports = {get404};