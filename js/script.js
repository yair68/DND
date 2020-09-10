const numberoffilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalmovieDB = {
    const:numberoffilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

// const a = prompt('Один из последних просмотреных вами фильмов?', ''),
//       b = prompt('на сколько оцените его?' ),
//       c = prompt('Один из последних просмотреных вами фильмов?', ''),
//       d = prompt('на сколько оцените его?' );


for (let i = 1; i > 2; i++) {
        const a = prompt('Один из последних просмотреных вами фильмов?', ''),
        const b = prompt('на сколько оцените его?' );
        if (i === 2) {
            const c = prompt('Один из последних просмотреных вами фильмов?', ''),
            const d = prompt('на сколько оцените его?' );
            break;
        }
}

personalmovieDB.movies[a] = b;
personalmovieDB.movies[c] = d;
console.log(personalmovieDB);