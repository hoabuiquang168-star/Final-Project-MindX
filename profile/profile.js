
const updateBtn = document.querySelector('.update-btn');
const deleteBtn = document.querySelector('.delete-btn');
const inputs = document.querySelectorAll('input, textarea, select');


function getFormData() {
  const data = {};
  inputs.forEach((input) => {
    const label = input.previousElementSibling?.textContent || input.name || "unknown";
    data[label] = input.value.trim();
  });
  return data;
}


updateBtn.addEventListener('click', () => {
  const formData = getFormData();


  console.log('📝 Account Updated:', formData);


  localStorage.setItem('userProfile', JSON.stringify(formData));


  alert('✅ Your account details have been updated successfully!');
});


deleteBtn.addEventListener('click', () => {
  const confirmation = confirm(
    '⚠️ Are you sure you want to delete your account? This action cannot be undone.'
  );

  if (confirmation) {

    localStorage.removeItem('userProfile');
    inputs.forEach((input) => (input.value = ''));
    document.getElementById('previewImg').src = 'mentorimg/placeholder.png';

    console.log('🗑️ Account Deleted');
    alert('Your account has been deleted.');
  } else {
    console.log('❌ Deletion canceled.');
  }
});
