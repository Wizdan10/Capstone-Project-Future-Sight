import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbOpen = openDB(DB_NAME, DB_VERSION, {
    upgrade(database) {
      database.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: 'id',
      });
    },
});

const FavoriteProfDB = {
    async getResto(id) {
      return (await dbOpen).get(OBJECT_STORE_NAME, id);
    },
    async getAllResto() {
      return (await dbOpen).getAll(OBJECT_STORE_NAME);
    },
    async putResto(resto) {
      return (await dbOpen).put(OBJECT_STORE_NAME, resto);
    },
    async deleteResto(id) {
      return (await dbOpen).delete(OBJECT_STORE_NAME, id);
    },
  };
  
  export default FavoriteProfDB;