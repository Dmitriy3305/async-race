import { Car } from "../interfaces/car";
import { store } from "../store/store";

export async function createCar(color: string, name: string) {
  try {
    const url = "http://127.0.0.1:3000/garage";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color, name }),
    });
    if (response.ok) {
      const data: Car = await response.json();
      store.raceCount++;
      return data;
    } else {
      throw new Error("Error: " + response.status);
    }
  } catch (e) {
    console.error("Error:", e);
    throw e;
  }
}
