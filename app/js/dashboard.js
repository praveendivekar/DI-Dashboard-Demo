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
    this.timerValue = 60;
    this.userRole = sessionStorage.getItem("userRole");
  },

  initEvents: function() {
    $(".start-survey").on("click", () => {
      $(".survey-options").hide();
      $(".survey-box").show();
      this.startSurvey();
    });
    $(".edit-survey").on("click", () => {
      $(".survey-options").hide();
      $(".edit-survey-box").show();
      this.editSurvey();
    });
    $(".save-survey").on("click", () => {
      this.saveSurvey();
    });
    $(".dashboard-link").on("click", () => {
      $(".survey-box, .edit-survey-box, .dashboard-link, .message-box").hide();
      $(".survey-options").show();
      $(".dashboard-container p")
        .first()
        .html("Dashboard");
    });
    $(".result-link").on("click", () => {
      window.location.href = "html/result.html";
    });
  },

  authoriseUser: function() {
    if (this.userRole === "user") {
      $(".edit-survey").attr("disabled", true);
    } else {
      $(".edit-survey").attr("disabled", false);
    }
  },

  startSurvey: function() {
    let optionsElement = "";
    $(".dashboard-container p")
      .first()
      .html("Survey");
    $(".survey-box .survey-question").html(this.surveyQuestion.question);
    $.map(this.surveyQuestion.options, option => {
      optionsElement +=
        "<div class='form-check'><label class='form-check-label'><input class='form-check-input' type='radio' name='question' value=" +
        option +
        ">" +
        option +
        "</label></div>";
    });
    $(".survey-box .option-box").html(optionsElement);
    $(".timer-box p").FlipClock(this.timerValue, {
      clockFace: "MinuteCounter",
      countdown: true,
      callbacks: {
        stop: function() {
          $(".message-box p").html(
            "Time Over. Click on link to navigate to results page"
          );
          $(".message-box, .result-link").show();
        }
      }
    });
  },

  editSurvey: function() {
    let optionsElement = "";
    $(".dashboard-container p")
      .first()
      .html("Edit Survey");
    $(".edit-survey-box").show(1000);
    $(".edit-survey-box .edit-question").val(this.surveyQuestion.question);
    $.map(this.surveyQuestion.options, option => {
      optionsElement +=
        "<div class='col-sm-6'><div class='input-group'><span class='input-group-addon'><input type='radio'></span><input type='text' class='form-control' value=" +
        option +
        "></div></div>";
    });
    $(".edit-survey-box .option-box").html(optionsElement);
  },

  saveSurvey: function() {
    this.surveyQuestion.question = $(".edit-survey-box .edit-question").val();
    let target = $(".edit-survey-box .option-box input.form-control");
    $.map(target, (option, index) => {
      this.surveyQuestion.options[index] = option.value;
    });
    $(".edit-survey-box").hide();
    $(".dashboard-link, .message-box").show();
    $(".message-box p").html("Survey question updated");
  }
};

$(document).ready(function() {
  dashboard.init();
});
