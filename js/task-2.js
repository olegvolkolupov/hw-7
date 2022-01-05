/*
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

document.querySelector('#ingredients').append(
  ...ingredients.reduce((liArr, elem) => {
    let newLi = document.createElement('li');
    newLi.textContent = elem;
    liArr.push(newLi);
    return liArr;
  }, []),
);
