$(() => {
  console.log("backend");
});

$(function () {
  vacancy();
  // submitForm();
  redirectBuy();
  buyListFilter();
  autocompleteDefineRegion();
  forms();
  searchForm();
  searchHeader();
  recipes();
  ajaxRecipes();

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
  $("[data-type=js-recipes-filter]")
    .find("select")
    .on("change", function () {
      ajaxRecipes();
    });
}

function ajaxRecipes() {
  let form = $("[data-type=js-recipes-filter]"),
    time = form.find("select[name=time]").val(),
    type = form.find("select[name=type]").val(),
    recipesList = $("[data-type=js-recipes-list]");

  console.log("ajaxRecipes");

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

function searchForm() {
  $(document).on("click", ".search-form__button", function (e) {
    e.preventDefault();

    let form = $(document).find("[data-type=search-form]"),
      search = form.find("input[name=search]").val(),
      searchList = $("[data-type=js-search-list]");

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        search: search,
      },
    }).done(function (a) {
      searchList.html(a);
    });
  });
}

function searchHeader() {
  $(document).on("click", "[data-type=search-button-header]", function (e) {
    e.preventDefault();

    let form = $(document).find("[data-type=header-search-form]"),
      search = form.find("input[name=search]").val();

      document.location.href = 'http://dubki.hellem.ru/search/?search=' + search;
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
  $(document).on("change", "[data-type=data-buy-filter]", function () {
    let obj = $(this),
      container = obj.parents("[data-type=buy-list-container]"),
      itemsContainer = container.find("[data-type=items-container]"),
      data = {
        regionId: obj.val(),
      };

    itemsContainer.empty();

    $.ajax({
      type: "POST",
      url: window.location.href,
      dataType: "html",
      data: data,
      success: function (r) {
        let itemsResponse = $(r).find("[data-type=items-container]").children();
        itemsContainer.append(itemsResponse);
      },
    });
  });
}

function autocompleteDefineRegion() {
  $('[data-type=autocomplete-region-define]').autocomplete({
    appendTo: '[data-autocomplete-place]',
    source: function (request, response) {
      $.ajax({
        url: '/local/templates/main/include/ajax/autocomplete_define_region.php',
        dataType: 'json',
        data: {
          q: request.term,
        },
        success: function (r) {
          !r.error ? response(r) : console.log(r.error);
        },
      });
    },
    position: {
      my: 'left top+5',
    },
    select: function(event, ui) {
      location.href = window.location.pathname + '?region=' + ui.item.id;
      return false;
    },
  });
}

function forms() {
  $(document).on('click', '[data-type=submit-form]', function (e) {
    e.preventDefault();

    let thisObj = $(this),
        container = thisObj.parents('[data-type=form-container]'),
        form = container.find('form'),
        formResponse = container.find('[data-type=form-response]'),
        url = container.attr('data-url'),
        eventType = container.attr('data-event-type'),
        contentType = 'application/x-www-form-urlencoded; charset=UTF-8',
        processData = true,
        data = {};

    if (eventType != 'CONTACT_FORM') {
      data = new FormData();
      contentType = false;
      processData = false;

      let file = container.find('[data-type=file]');
      data.append('file', file[0].files[0]);
    }

    container.find('[data-type=get-field], [data-type=get-offer]:checked, [data-type=get-manufacturer]:checked, [data-type=get-organizational]:checked').each(function () {
      let field = $(this).attr('data-uf'),
          val = $(this).val();

      eventType != 'CONTACT_FORM' ? data.append(field, val) : data[field] = val;
    });

    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      contentType: contentType,
      processData: processData,
      data: data,
      success: function (r) {
        if (r.success === true) {
          form.addClass('form--hidden');
          formResponse.addClass('response--active');
        }
      },
    });
  });
}

