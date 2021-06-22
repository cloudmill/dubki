$(() => {
  console.log("backend");
});

$(function () {
  vacancy();
  submitForm();
  redirectBuy();
  buyListFilter();
});

function vacancy() {
  console.log("vacancy");
  $("[data-type=js-vacancy-filter]").on("change", function (e) {
    ajaxVacancy(this.value);
  });
}

function ajaxVacancy(cityId) {
  let vacancyList = $("[data-type=js-vacancy-list]");

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
  $('[data-type=js-recipes-filter]').find('select').on('change', function(){
    ajaxRecipes();
  });
}

function ajaxRecipes() {
  let form = $('[data-type=js-recipes-filter]'),
    time = form.find('select[name=time]').val(),
    type = form.find('select[name=type]').val(),
    recipesList = $("[data-type=js-recipes-list]");

    console.log('ajaxRecipes');


  $.ajax({
    method: "POST",
    url: window.location.href,
    data: {
      ajax: 1,
      time: time,
      type: type,
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
  $("[data-type=redirect-buy-list]").on("click", function () {
    window.location.href = "/buy/list";
  });

  $("[data-type=redirect-buy-map]").on("click", function () {
    window.location.href = "/buy";
  });
}

function buyListFilter() {
  $(document).on('change', '[data-type=data-buy-filter]', function () {
    let obj = $(this),
        container = obj.parents('[data-type=buy-list-container]'),
        itemsContainer = container.find('[data-type=items-container]'),
        data = {
          regionId: obj.val(),
        }

    itemsContainer.empty();

    $.ajax({
      type: 'POST',
      url: window.location.href,
      dataType: 'html',
      data: data,
      success: function (r) {
        let itemsResponse = $(r).find('[data-type=items-container]').children();
        itemsContainer.append(itemsResponse);
      },
    });
  })
}
