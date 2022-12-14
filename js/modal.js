const modalBtn = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const arr = [];

for (let i = 0; i < modalBtn.length; i++)
{
    arr[i] = modalBtn[i];
};

console.log(arr);

arr.forEach(function(item) 
{
    item.addEventListener('click', () =>
    {
        modal.classList.remove('hidden');
    });
});

modal.addEventListener('click', (event) =>
{
    const target = event.target;
    
    if (target.classList.contains('overlay') || target.classList.contains('modal__close'))
        modal.classList.add('hidden');
});