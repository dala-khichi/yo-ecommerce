import axios from "axios";

class Yo {
  static async get(url, config = { withCredentials: true }) {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      console.error("GET error:", error);
      return error;
    }
  }

  static async post(url, data = {}, config = { withCredentials: true }) {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("POST error:", error);
      return error;
    }
  }

  static async put(url, data = {}, config = { withCredentials: true }) {
    try {
      const response = await axios.put(url, data, config);
      return response.data;
    } catch (error) {
      console.error("PUT error:", error);
      return error;
    }
  }

  static async patch(url, data = {}, config = { withCredentials: true }) {
    try {
      const response = await axios.patch(url, data, config);
      return response.data;
    } catch (error) {
      console.error("PATCH error:", error);
      return error;
    }
  }

  static async delete(url, config = { withCredentials: true }) {
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      console.error("DELETE error:", error);
      return error;
    }
  }
}

export default Yo;