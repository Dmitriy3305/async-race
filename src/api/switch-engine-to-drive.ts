export async function switchEngineToDrive(id: number) {
  const url = "http://127.0.0.1:3000/engine";
  const query = `id=${id}&status=drive`;
  try {
    const response = await fetch(`${url}?${query}`, {
      method: "PATCH",
    });
    if (response.status === 200) {
      return { success: true, response };
    } else if (response.status == 500) {
      return { success: false, error: "Ошибка 500" };
    }
  } catch (error) {
    return { success: false, error };
  }
}
