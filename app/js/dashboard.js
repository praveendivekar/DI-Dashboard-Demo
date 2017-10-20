var dashboard = {
  init: function() {
    this.initVariables();
    this.initEvents();
    this.authoriseUser();
  },

  initVariables: function() {
    this.surveyQuestion = {
      question: "What is your blood group",
      options: ["A+ve", "AB+ve", "B+ve", "O+ve", "None of above"]
    };
    this.timerValue= 5;
    this.userRole = sessionStorage.getItem('userRole');
  },

  initEvents: function() {
    $(".start-survey").on("click", () => {
      $('.survey-options').hide();
      $(".survey-box").show();
      this.startSurvey();
    });
    $(".edit-survey").on("click", () => {
      $('.survey-options').hide();
      $(".edit-survey-box").show();
      this.editSurvey();
    });
    $(".save-survey").on("click", () => {
      this.saveSurvey();
    });
    $('.dashboard-link').on('click', () => {
      $('.survey-box, .edit-survey-box, .dashboard-link, .message-box').hide();
      $('.survey-options').show();
    });
    $('.result-link').on('click', () => {
      window.location.href = ('html/result.html')
    })
  },

  authoriseUser: function(){
    if(this.userRole==='user'){
      $('.edit-survey').attr('disabled',true)
    } else {
      $('.edit-survey').attr('disabled',false)
    }
  },

  startSurvey: function() {
    let optionsElement = "";
    $(".survey-box .survey-question").html(this.surveyQuestion.question);
    $.map(this.surveyQuestion.options, option => {
      optionsElement += "<input type='radio' name='question' value=" + option + ">" + option + "<br>";
    });
    $(".survey-box .option-box").html(optionsElement);
    this.initiateTimer();
  },

  editSurvey: function() {
    let optionsElement = "";
    $(".edit-survey-box").show(5000);
    $(".edit-survey-box .edit-question").val(this.surveyQuestion.question);
    $.map(this.surveyQuestion.options, option => {
      optionsElement += "<input type='text' name='question' value=" + option + "><br>";
    });
    $(".edit-survey-box .option-box").html(optionsElement);
  },

  saveSurvey: function() {
    this.surveyQuestion.question = $(".edit-survey-box .edit-question").val();
    let target = $(".edit-survey-box .option-box input");
    $.map(target, (option, index) => {
      this.surveyQuestion.options[index] = option.value;
    });
    $(".edit-survey-box").hide();
    $(".dashboard-link, .message-box").show();
    $(".message-box p").html("Survey question updated");
  },

  initiateTimer: function() {
    let timerValue = this.timerValue;
    var x = setInterval(() => {
      $(".timer-value").html(timerValue + "secs left ");
      timerValue--;

      if (timerValue < 0) {
        clearInterval(x);
        $(".message-box p").html("Time Over. Click on link to navigate to results page");
        $('.result-link').show()
      }
    }, 1000);
  }
};

$(document).ready(function() {
  dashboard.init();
});
