import { Car } from "../interfaces/car";
import { store } from "../store/store";

export async function getCars() {
  try {
    const url = "http://127.0.0.1:3000/garage";
    const response = await fetch(url);
    if (response.ok) {
      const data: Car[] = await response.json();
      store.raceCount = data.length;
      return data;
    } else {
      throw new Error("Error: " + response.status);
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
