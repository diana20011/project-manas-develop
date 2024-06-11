import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../.fireBase/FireBase";
export async function getNews() {
  try {
    const ref = collection(db, "users");
    const snapShot = await getDocs(ref);
    snapShot.forEach((res) => {
      console.log(res.data());
    });
    return snapShot;
  } catch (error) {
    console.log("e", error);
  }
}

type TypeParametres = "title" | "text" | "image" | "date" | "id";

export async function create(values: Record<TypeParametres, string | number>) {
  await setDoc(doc(db, "news", Date.now().toString()), values);
}
