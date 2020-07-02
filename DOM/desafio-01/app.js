new Vue({
  el: '#desafio',
  data: {
    nome: 'João Felipe',
    idade: 27,
    titulo: 'Usando VueJS!',
    linkImg: 'https://i.pinimg.com/originals/42/4c/2d/424c2dd345b3cee701751773d3bac7c9.jpg'
  },
  methods: {
    multiplica: function() {
      return this.idade * 3
    },
    numrandom: function() {
      return Math.random()
    }
  }
})
