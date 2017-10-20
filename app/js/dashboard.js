var dashboard = {

    init: function(){
        this.initVariables();
        this.initEvents();
    },

    initVariables: function(){
        this.timerValue = 60;
    },

    initEvents: function(){
        $('.start-timer').on('click', () => {
            this.initiateTimer();
        });
    },

    initiateTimer: function(){

        let timerValue = this.timerValue;
        var x = setInterval(() =>  {
               
          $('.timer-value').html(timerValue + 'secs left ');
          timerValue--;
        
          if (timerValue < 0) {
            clearInterval(x);
            $('.timer-value').html('Time Over');
          }
        }, 1000);
    }
};

$(document).ready(function(){
    dashboard.init();
});