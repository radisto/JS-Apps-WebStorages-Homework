$(function(){
    for (var key in localStorage){
        if (localStorage[key]){
            $('#' + key + localStorage[key].toUpperCase()).attr('checked', true);
        }
    }
    $('input:radio').change(function(){
        localStorage.setItem($(this).prop('name'), $(this).val());
    });

    $('#submit').on('click', submit);

    function submit() {
        var first = $('input:radio[name=first]:checked').val();
        var firstText = $('label[for=first' + first.toUpperCase());
        if (first != 'c'){
            firstText.css('color', 'red');
        } else {
            firstText.css('color', 'green');
        }
        var second = $('input:radio[name=second]:checked').val();
        var secondText = $('label[for=second' + second.toUpperCase());
        if (second != 'd'){
            secondText.css('color', 'red');
        } else {
            secondText.css('color', 'green');
        }
        var third = $('input:radio[name=third]:checked').val();
        var thirdText = $('label[for=third' + third.toUpperCase());
        if (third != 'b'){
            thirdText.css('color', 'red');
        } else {
            thirdText.css('color', 'green');
        }
        var fourth = $('input:radio[name=fourth]:checked').val();
        var fourthText = $('label[for=fourth' + fourth.toUpperCase());
        if (fourth != 'a'){
            fourthText.css('color', 'red');
        } else {
            fourthText.css('color', 'green');
        }
    }

    (function countdown(){
        var current = 300;
        $('#countdown').text('5:00');
        setInterval(function(){
            current--;
            if (current > 0){
                var minutes = parseInt(current/60);
                var seconds = (current % 60).toString().length == 1 ? '0' +current % 60 : current % 60;
                $('#countdown').text(minutes + ':' + seconds);
            } else {
                $('#countdown').css('font-size', '36px').text('You ran out of time');
                submit();
            }
        }, 1000);
    })();
});