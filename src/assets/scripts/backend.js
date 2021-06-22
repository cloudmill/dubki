
$(() => {
  console.log("backend");
});

$(function () {
  vacancy();
  submitForm();
  redirectBuyList();
});

function vacancy() {
  console.log("vacancy");
  $("[data-type=js-vacancy-filter]").on("change", function (e) {
    ajaxVacancy(this.value);
  });
}

function ajaxVacancy(cityId) {
  let tags = [],
    vacancyList = $("[data-type=js-vacancy-list]");

  $.ajax({
    method: "POST",
    url: window.location.href,
    data: {
      ajax: 1,
      cityId: cityId,
    },
  }).done(function (a) {
    vacancyList.html(a);
  });
}

function submitForm() {
  $("[data-type=feedback-form]").submit(function (e) {
    e.preventDefault();

    let form = $(this),
      data = {},
      messID = form.attr("data-message-id");

    if (messID) {
      data["UF_MESSAGE_ID"] = messID;
    }

    form.find("input, textarea").each(function () {
      data[$(this).attr("data-uf")] = $(this).val();
    });

    if (data) {
      $.ajax({
        type: "POST",
        url: "/local/templates/main/include/ajax/feedback_form.php",
        dataType: "json",
        data: data,
        success: function (data) {
          console.log(data);
          // obj.hide().siblings('[data-type=success-message]');
        },
      });
    }
  });
}

function redirectBuyList() {
  $("[data-type=redirect-buy-list]").on("click", function () {
    window.location.href = "/buy/list";
  });
}
