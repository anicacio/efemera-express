const homeController = {
    index: (req, res) => {
        let servicos = [
            {nome: 'Desenvoltimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
        ];

        let banners = [
            'https://img.olhardigital.com.br/uploads/acervo_imagens/2014/12/r16x9/20141219205334_1200_675_-_tecnologia.jpg',
            'https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2019/10/imagemn-escolhida-artigo-e1571255765939-1280x720.jpg',
            'https://www.lavanguardia.com/r/GODO/LV/p3/WebSite/2016/09/09/Recortada/img_eortiz_20160909-162955_imagenes_lv_terceros_istock_45744940_small-kwPG-U41205002262Z6B-992x558@LaVanguardia-Web.jpg'
        ];

        res.render('index', {title: 'Home', listaServicos: servicos, listaBanners: banners}) // 
    }
};

module.exports = homeController;