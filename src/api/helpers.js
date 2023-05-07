const BASE_URL = "http://localhost:8000/api"

export async function getAllPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Cannot get products');
    }
  }

  export async function createPost({
    name,
    description,
    price,
    image,
    contactType,
    contact,
    contactTypeBackup,
    contact_backup,
    report_count,
    created_at,
    location,
    categoryId,
    isActive,
    userId
  }) {
    try {
        console.log(image);
        let imageBase64 = null;
        if (image) {
          imageBase64 = await getBase64(image);
        }
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image: imageBase64,
          contactType,
          contact,
          contactTypeBackup,
          contact_backup,
          report_count,
          created_at,
          location,
          categoryId,
          isActive,
          userId
        })
      });
      const data = await response.json();
  
      console.log(data);
  
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to make post.');
    }
  }
  
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  