var main = (function() {

    var init = function() {
        _setupListeners();
    };

    var _setupListeners = function() {
        $('.accordeon__trigger').on('click', accordeon);
        $('.sort__select_box').on('click', selectDropdown);
        $('.sort__select_item').on('click', select);
        $('.slideshow__pic').on('click', slideShow);
        $('.tabs__controls_link').on('click', tabs);
        $(".accordeon-inner__link_reset").on('click', reset);
        $(".important-info_par").columnize({columns : 2});
    };

    /*              accordeon                       */
    var accordeon = function(e){
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.accordeon__item'),
            content = item.find('.accordeon-inner'),
            duration = 300;


        if(!item.hasClass('active')){
            content.stop(true, true).slideDown(duration);
            content.slideUp(duration);
            item.addClass('active');
        }else {
            content.stop(true, true).slideUp(duration);
            item.removeClass('active');
            content.slideDown(duration);
        }
    };

    /*              select                               */
    var selectDropdown = function(e) {
        e.preventDefault();

        if ($(this).hasClass('rotate')) {
            $('.sort__select_dropdown').slideUp(300);
            $(this).removeClass('rotate');
        } else {
            $(this).addClass('rotate');
            $('.sort__select_dropdown').slideDown(300);

        }
    };

    var select = function(e) {
        e.preventDefault();

        $('.sort__select_box')
            .html($(this).text())
            .removeClass('rotate');

        $('.sort__select_dropdown').slideUp(300);
    };

    /*                      slideshow                           */
    var slideShow = function(e){
        e.preventDefault();

        var
            $this = $(this),
            item  = $this.closest('.slideshow__item'),
            container = $this.closest('.slideshow'),
            display = container.find('.slideshow__display'),
            path = item.find('img').attr('src'),
            duration = 300;

        if(!item.hasClass('active')) {
            item.addClass('active').siblings().removeClass('active');

            display.find('img').fadeOut(duration, function(){
                $(this).attr('src', path).fadeIn(duration);
            });
        }

    };

    var tabs = function(e){
        e.preventDefault();

        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

        var item = $(this).closest('.tabs__controls_item'),
            contentItem = $('.tabs__item'),
            itemPosition = item.index();


        contentItem.eq(itemPosition)
            .add('item')
            .addClass('active')
            .css('display', 'block')
            .siblings()
            .removeClass('active')
            .css('display', 'none');

    };

    /*                      reset checkbox                              */
    var reset = function(e){
        e.preventDefault();

        $("input:checkbox").attr('checked', false);

    };







    return {
        init : init
    }

}());

main.init();