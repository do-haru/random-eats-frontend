const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRandomMenu = async (categories) => {
  const response = await fetch(`${API_BASE_URL}/api/menus/random`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categories),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "메뉴를 불러오지 못했습니다.");
  }

  return response.json();
};
