document.addEventListener("DOMContentLoaded", function() {
  let userForm = document.getElementById("designForm");
  const apiVersion = "2023-07"; // Define the API version you are using
  const shopDomain = Shopify.shop;


    // Initialize Dropzone
    Dropzone.autoDiscover = false;
    const designIdInput = document.getElementById('designId');

    const myDropzone = new Dropzone("#fileUpload", {
        url: `${location.origin}/apps/proxyformdata/upload?shop=${shopDomain}&api_version=${apiVersion}`, // URL for handling file uploads
        paramName: "file", // Name of the file parameter
        maxFilesize: 5, // MB
        acceptedFiles: ".png,.jpg,.jpeg,.gif", // Accepted file types
        addRemoveLinks: true, // Show remove links on uploaded files
        dictDefaultMessage: "Drop files here or click to upload", // Default message
        dictRemoveFile: "Remove file", // Remove file text
        dictMaxFilesExceeded: "You can only upload 5 files at most", // Max files exceeded text
        maxFiles: 5, // Max number of files
        parallelUploads: 5, // Number of parallel uploads
        autoProcessQueue: false, // Do not upload files automatically on add
    });
  
    userForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      // Validation
      let isValid = validateForm();
      if (!isValid) return;
  
  

      let formData = new FormData(userForm);

    
      const apiVersion = "2023-07"; // Define the API version you are using
      const shopDomain = Shopify.shop;
  
      fetch(`${location.origin}/apps/proxyformdata/formdata?shop=${shopDomain}&api_version=${apiVersion}`, {
        method: "POST",
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.errors) {
          displayServerErrors(data.errors);
        } else {
         // Get the design ID from the response
         const designId = data.designId;
         designIdInput.value = designId;
 
         // Update Dropzone URL with design ID
         myDropzone.options.url = `${location.origin}/apps/proxyformdata/upload?shop=${shopDomain}&api_version=${apiVersion}&designId=${designId}`;
 
        // Check if there are files in Dropzone
        if (myDropzone.getAcceptedFiles().length === 0) {
          // No files to upload, redirect to thank you page
          window.location.href = `${location.origin}/pages/thank-you/`;
        } else {
          // Process Dropzone files
          myDropzone.processQueue();

          myDropzone.on("queuecomplete", function() {
            // Redirect to thank you page after all files are processed
            window.location.href = `${location.origin}/pages/thank-you/`;
          });
        }
        }
      })
      .catch(error => console.log(error));
    });
  
    function validateForm() {
      let isValid = true;
  
      // Clear previous error messages
      document.querySelectorAll(".error-message").forEach(el => el.remove());
  
      // Check required fields
      let requiredFields = ["first_name", "last_name", "email_address", "design_options", "metal_options","phone_number", "preferred_price_range", "preferred_contact_method", "availability_option"];
      requiredFields.forEach(field => {
        let input = document.getElementById(field);
        if (!input.value) {
          showError(input, `${field.replace("_", " ")} is required`);
          isValid = false;
        } else {
          clearError(input);
        }
      });
  
      // Check email format
      let emailInput = document.getElementById("email_address");
      if (!emailInput.value) {
        showError(emailInput, "Email is required");
        isValid = false;
      } 
      if (emailInput.value && !validateEmail(emailInput.value)) {
        showError(emailInput, "Invalid email format");
        isValid = false;
      } else {
        clearError(emailInput);
      }
  

  // Check phone number format based on selected country
  let countryCode = document.getElementById("country_code").value;
  let phoneInput = document.getElementById("phone_number");
  if (!validatePhoneNumber(phoneInput.value, countryCode)) {
    showError(phoneInput, "Invalid phone number format for selected country");
    isValid = false;
  } else {
    clearError(phoneInput);
  }


      return isValid;
    }
  
  
  
  });
  
