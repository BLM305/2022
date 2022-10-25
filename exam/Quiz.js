class Author {
    constructor(n, b) {
        this.name = n
        this.birth = b 
        this.books = []
    }
    addBook(b) {
        this.books.push(b);
        b.author = this;
    }
    toString() {
        return this.name+" ("+this.birth+")"+
           " with "+this.books.length +" books"
    }
}

class Book {
    constructor(n, p, a) {
        this.name = n
        this.pages = p
        this.author = a
    }
    toString() { //not required in the quiz
        return this.name+" by "+this.author.name
    }
}

class Quiz extends Menu {
  constructor() {
    super(); let d = makeData()
    this.data = d.reduce((a,b) => a.concat(b.books), [])
    this.solution = d[3]
  }
  morePagesThan(num) {
    let a = this.data.filter(b => b.pages > num)
    return new Set(a)
  }
  convertToMap() {
    let m = new Map();
    for (let b of this.data) {
      let n = m.get(b.author.name)
      if (!n) n = 0
      m.set(b.author.name, n+1)
    }
    return m
  }
  report(num=300) {
    let c = this.data.length
    if (!c) return ""
    let t = `
    let a = new Author("Rumi", 1207)
    a.addBook(new Book("Mesnevi", 180))
    a.addBook(new Book("Divan", 350))\n`
    t += "\n• Start with "+c+" books:\n"
    for (let b of this.data) t += b+"\n"
    t += "\n• morePagesThan("+num+"):\n"
    for (let b of this.morePagesThan(num)) 
      t += b+"\n"
    t += "\n• convertToMap():\n"
    let m = this.convertToMap()
    for (let k of m.keys()) 
      t += k+" -- "+m.get(k)+" books\n"
    if (!window.disp1) return t
    disp1.innerText = t
  }
}
function makeData() {
  let a = null, d = []
  a = new Author("Platon", -428)
  a.addBook(new Book("Devlet Adamı", 320))
  a.addBook(new Book("Sofist", 160))
  a.addBook(new Book("Yasalar", 210))
  d.push(a)
  a = new Author("Farabi", 872)
  a.addBook(new Book("İlimlerin Sayımı", 90))
  a.addBook(new Book("Faziletli Şehir", 180))
  d.push(a)
  a = new Author("Gazzali", 1058)
  a.addBook(new Book("İlimlerin İhyası", 470))
  a.addBook(new Book("Filozoflar", 380))
  a.addBook(new Book("Dalaletten", 210))
  d.push(a)
  a = new Author("Rumi", 1207)
  a.addBook(new Book("Mesnevi", 180))
  a.addBook(new Book("Divan", 350))
  d.push(a)
  return d
}
