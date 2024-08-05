import { db } from "../_utils/firebase";
import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
      const items = [];
      const itemsCollectionReference = collection(db, "users", userId, "items");
      const itemsSnapshot = await getDocs(itemsCollectionReference);
      
      itemsSnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
      });
  
      return items;
    } catch (error) {
      console.log('Error getting items:', error);
      throw error;
    }
  }
  
  export async function addItem(userId, item) {
    try {
      const itemsCollectionReference = collection(db, "users", userId, "items");
      const addedItemPromise = await addDoc(itemsCollectionReference, item);
      return addedItemPromise.id;
    } catch (error) {
      console.log('Error adding item:', error);
      throw error;
    }
  }