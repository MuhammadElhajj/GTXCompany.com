// document.getElementById('emailForm').addEventListener('submit', function(event) {
//     if (validateForm()) {
//         var submitButton = document.getElementById('submitButton');
//         submitButton.classList.add('button-disabled');

//         // Stop the spinner after 20 seconds
//         setTimeout(function() {
//             submitButton.classList.remove('button-disabled');
//         }, 20000);
//     } else {
//         event.preventDefault(); // Prevent form submission if validation fails
//     }
// });

// function hideNotification() {
//     document.getElementById('notification-container').style.display = 'none';
// }

// function toggleRecipientList() {
//     var recipientList = document.getElementById('recipientList');
//     recipientList.style.display = recipientList.style.display === 'none' ? 'block' : 'none';
// }

// function validateRowCounts() {
//     var firstNameList = document.getElementById('first_name_list').value.split('\n').filter(Boolean);
//     var emailList = document.getElementById('email_list').value.split('\n').filter(Boolean);
//     var firstNameRowCount = document.getElementById('firstNameRowCount');
//     var emailRowCount = document.getElementById('emailRowCount');
//     var validFeedback = document.getElementById('validFeedback');
//     var invalidFeedback = document.getElementById('invalidFeedback');

//     firstNameRowCount.innerText = firstNameList.length;
//     emailRowCount.innerText = emailList.length;

//     if (firstNameList.length === emailList.length) {
//         validFeedback.style.display = 'block';
//         invalidFeedback.style.display = 'none';
//         return true;
//     } else {
//         validFeedback.style.display = 'none';
//         invalidFeedback.style.display = 'block';
//         return false;
//     }
// }

// function validateForm() {
//     // Check if row counts are valid
//     return validateRowCounts();
// }