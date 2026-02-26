const movie = {
    id : 1,
    title : "avatar",
    image : "link/avatar.jpg",
    genre :["action","scifi"],
    cast : ["sam","jack","zoe","netiri"],
    getName : function() {
        return`
            judul : ${this.title}
            gambar : ${this.image}
            genre : ${this.genre}
        `
    },
    getNameCast : function() {
        return`cast : ${this.cast}`
    },
    setName : function(newtitle) {
        return this.title = newtitle
    },
    setImage : function(newImage) {
        return this.image = newImage
    }
}

console.log(movie.getName());
console.log(movie.getNameCast());
movie.setName("Fast & forius");
console.log(movie.title);
movie.setImage('link/car.jpg');
console.log(movie.image);

