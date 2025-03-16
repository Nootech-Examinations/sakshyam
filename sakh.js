// script.js
document.getElementById('examForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const q1 = document.querySelector('input[name="q1"]:checked');

    if (!q1) {
        alert('Please answer all questions!');
        return;
    }

    const score = (q1.value === '4') ? 1 : 0;
    alert(`Thank you, ${name}! Your score is ${score}/1.`);

    // Simulating result email sending
    console.log(`Email sent to ${email} with score: ${score}`);

    // Reset form after submission
    document.getElementById('examForm').reset();
});
