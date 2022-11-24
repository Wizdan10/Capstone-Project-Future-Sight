import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbOpen = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      database.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: 'id',
      });
    },
  });
  
const FavoriteProfDb = {
    async getProf(id) {
      return (await dbOpen).get(OBJECT_STORE_NAME, id);
    },
    async getAllProf() {
      return (await dbOpen).getAll(OBJECT_STORE_NAME);
    },
    async putProf(prof) {
      return (await dbOpen).put(OBJECT_STORE_NAME, prof);
    },
    async deleteProf(id) {
      return (await dbOpen).delete(OBJECT_STORE_NAME, id);
    },
};
  
export default FavoriteProfDb;