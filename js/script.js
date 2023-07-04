const { createApp } = Vue ;

createApp({
    data(){
        return {
            newTodo:'' ,
            todos: [
                {
                    text : ' volano madonne ',
                    done : true ,
                },
                {
                    text : ' volano madonne ',
                    done : true ,
                },
                {
                    text : ' volano madonne ',
                    done : true ,
                },
                {
                    text : ' volano madonne ',
                    done : true ,
                },

                ]
            }

        },
    methods:{
        addTodo(){
            // if this.newTodo.length > 0
            //.trim serve per togliere gli spazi in una stringa
            if(this.newTodo.trim() != ' '){
            const fraDiCorpo = { text : this.newTodo,
            done : ' true ' };
            this.todos.push(fraDiCorpo); 
            this.newTodo= " " ;
            }
           
        } , 
        removeTodo(index){
            console.log('Rimuovi classe' , index);
            // per eliminare un oggetto da un array usiamo splice
            this.todos.splice(index , 1);
        }
    
    }
}).mount('#app');