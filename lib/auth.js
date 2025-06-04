import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const roles = ["admins", "dosen", "mahasiswa", "mitra", "wali"];

export const loginUser = async (email, password) => {
  for (const role of roles) {
    const q = query(
      collection(db, role),
      where("email", "==", email),
      where("password", "==", password)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Dapat user, return success + rolenya
      return {
        success: true,
        message: "Login sukses!",
        role,
        data: querySnapshot.docs[0].data()
      };
    }
  }

  // Kalau ga nemu di semua role
  return { success: false, message: "Email atau password salah." };
};
