export async function updateCar(id: number, color: string, name: string) {
  try {
    const url = `http://127.0.0.1:3000/garage/${id}`;
    const data = {
      name,
      color,
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const updatedCar = await response.json();
      return updatedCar;
    } else {
      throw new Error("Error: " + response.status);
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
