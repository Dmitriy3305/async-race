export async function getMotionParams(id: number, status: string) {
  const url = "http://127.0.0.1:3000/engine";
  const method = "PATCH";
  const headers = new Headers();
  const query = `id=${id}&status=${status}`;
  try {
    const response = await fetch(`${url}?${query}`, {
      method: method,
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 400) {
      const errorData = await response.json();
      console.log(errorData);
    } else if (response.status === 404) {
      console.log("Car not found");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
