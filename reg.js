function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match.');
  } else {
    confirmPassword.setCustomValidity('');
  }

  return true;
}

function validateForm1() {
    const productName = document.getElementById('productName');
    const category = document.getElementById('category');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
  
    if (category.value === '') {
      category.setCustomValidity('Please select a category.');
    } else {
      category.setCustomValidity('');
    }
  
    return true;
  }
  

  // You can populate this function with your own logic to pre-fill the form data based on the product being edited.
function populateFormWithProductData() {
    const productName = document.getElementById('productName');
    const category = document.getElementById('category');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
  
    // Replace the following with your logic to set the form fields' values with existing product data.
    const existingProductData = {
      productName: 'Sample Product',
      category: 'Electronics',
      description: 'A sample product description.',
      price: 49.99,
      quantity: 100,
    };
  
    productName.value = existingProductData.productName;
    category.value = existingProductData.category;
    description.value = existingProductData.description;
    price.value = existingProductData.price;
    quantity.value = existingProductData.quantity;
  }
  
  function validateForm() {
    const productName = document.getElementById('productName');
    const category = document.getElementById('category');
  
    if (category.value === '') {
      category.setCustomValidity('Please select a category.');
    } else {
      category.setCustomValidity('');
    }
  
    return true;
  }
  
  // Call the populateFormWithProductData function when the page loads to pre-fill the form data.
  window.onload = populateFormWithProductData;

  function confirmDeletion() {
    const productName = document.getElementById('productName');
    const confirmationCheckbox = document.getElementById('confirmationCheckbox');
  
    if (!confirmationCheckbox.checked) {
      alert('Please confirm that you want to delete this product.');
      return false;
    }
  
    // Your code to handle the product deletion logic goes here.
    // You can use the productName value to identify the product to be deleted.
  
    // After handling the deletion, you can redirect the user or show a success message.
  
    return true;
  }
  

  function validateFormm() {
    const paymentMethodType = document.getElementById('paymentMethodType');
    const cardholderName = document.getElementById('cardholderName');
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');
  
    if (paymentMethodType.value === '') {
      paymentMethodType.setCustomValidity('Please select a payment method type.');
    } else {
      paymentMethodType.setCustomValidity('');
    }
  
    return true;
  }
  