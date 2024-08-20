document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function () {
  const filterCuisine = document.getElementById('filter-cuisine');
  const sortMenu = document.getElementById('sort-menu');

  filterCuisine.addEventListener('change', function () {
      const selectedCuisine = filterCuisine.value;
      const categories = document.querySelectorAll('.menu-category');

      categories.forEach(category => {
          if (selectedCuisine === 'all' || category.id === selectedCuisine) {
              category.style.display = 'block';
          } else {
              category.style.display = 'none';
          }
      });
  });

  sortMenu.addEventListener('change', function () {
      const sortValue = sortMenu.value;
      const categories = document.querySelectorAll('.menu-category');

      // Example sort logic (you'll need to implement sorting based on your requirements)
      categories.forEach(category => {
          let dishes = Array.from(category.querySelectorAll('.card')).sort((a, b) => {
              const priceA = parseFloat(a.querySelector('.price').textContent.replace('₹', ''));
              const priceB = parseFloat(b.querySelector('.price').textContent.replace('₹', ''));

              if (sortValue === 'price-asc') {
                  return priceA - priceB;
              } else if (sortValue === 'price-desc') {
                  return priceB - priceA;
              }
              return 0;
          });

          dishes.forEach(dish => category.querySelector('.row').appendChild(dish));
      });
  });
});



