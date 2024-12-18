document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remove 'active' from all menu items
        menuItems.forEach((el) => el.classList.remove("active"));
  
        // Add 'active' to the clicked item
        item.classList.add("active");
      });
    });
  });
  