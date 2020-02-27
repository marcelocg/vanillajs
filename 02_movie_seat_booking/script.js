const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

let price = +movie.value;

function updateSelectedCount() {
  const selectedSeatsCount = document.querySelectorAll('.row .seat.selected').length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * price;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

movie.addEventListener('change', (e) => {
  price = +e.target.value;
  updateSelectedCount();
});
