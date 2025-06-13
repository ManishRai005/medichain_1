const API_BASE_URL = "http://localhost:5000/api";  // Ensure backend URL is correct

export const loginUser = async (internetIdentity, password, role) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ internetIdentity, password, role }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    return { error: error.message };
  }
};
