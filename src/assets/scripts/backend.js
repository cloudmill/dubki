
$(() => {
  console.log("backend");
});

$(function () {
  vacancy();
  submitForm();
  redirectBuy();
  recipes();
});

function vacancy() {
  $("[data-type=js-vacancy-filter]").on("change", function (e) {
    ajaxVacancy(this.value);
  });
}

function ajaxVacancy(cityId) {
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

function recipes() {
  console.log("recipes");
  $("[data-type=js-recipes-filter-type]").on("change", function (e) {
    console.log("change type");
    time = $("[data-type=js-recipes-filter-time]").value;
    ajaxRecipes(this.value, time);
  });
  $("[data-type=js-recipes-filter-time]").on("change", function (e) {
    console.log("change time");
    type = $("[data-type=js-recipes-filter-type]").value;
    ajaxRecipes(type, this.value);
  });
}

function ajaxRecipes(type, time) {
  console.log("ajax Recipes");
  console.log(type);
  console.log(time);
  recipesList = $("[data-type=js-recipes-list]");

  $.ajax({
    method: "POST",
    url: window.location.href,
    data: {
      ajax: 1,
      time: time,
      type: type
    },
  }).done(function (a) {
    recipesList.html(a);
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

function redirectBuy() {
  $('[data-type=redirect-buy-list]').on('click', function() {
    window.location.href = '/buy/list';
  });

  $('[data-type=redirect-buy-map]').on('click', function() {
    window.location.href = '/buy';
  });
}
