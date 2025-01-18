function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-content');
    if (!dropdown.contains(event.target) && event.target.innerText !== "Our Company") {
        dropdown.style.display = 'none';
    }
  });
  function toggleBrands() {
    const dropdown = document.getElementById('brands-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('brands-dropdown');
    if (!dropdown.contains(event.target) && event.target.innerText !== "Brands") {
        dropdown.style.display = 'none';
    }
  });
  
  function toggleSustainability() {
    const dropdown = document.getElementById('sustainability-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('sustainability-dropdown');
    if (!dropdown.contains(event.target) && event.target.innerText !== "Sustainability") {
        dropdown.style.display = 'none';
    }
  });
  
  function toggleSocialImpact() {
    const dropdown = document.getElementById('social-impact-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('social-impact-dropdown');
    if (!dropdown.contains(event.target) && event.target.innerText !== "Social Impact") {
        dropdown.style.display = 'none';
    }
  });
  
  function toggleSocialImpact() {
    const dropdown = document.getElementById('social-impact-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  function toggleCareers() {
    const dropdown = document.getElementById('careers-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('careers-dropdown');
    if (!dropdown.contains(event.target) && event.target.innerText !== "Careers") {
        dropdown.style.display = 'none';
    }
  });