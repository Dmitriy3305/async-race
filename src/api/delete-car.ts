export async function deleteCar(id: number) {
  try {
    const url = `http://127.0.0.1:3000/garage/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Car deleted");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
