import store from 'store'

export default {
    saveUser(name){
        store.set('name',name)
    },
    getUser(name){
       return store.get('name')
    },
    removeUser(name){
        return  store.remove('name')
    }
}
