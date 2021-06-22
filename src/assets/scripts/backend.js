$(function () {
  redirectBuyList();
});

function redirectBuyList() {
  $('[data-type=redirect-buy-list]').on('click', function() {
    window.location.href = '/buy/list';
  });
}
